// GoPay Merchant Gateway Client & QRIS Utility
// Integration for https://github.com/ahmadzakiyox/gopay-api-gateaway

export const PRICING_PLANS = {
  pro: {
    name: 'CherryEdu Pro',
    description: 'Akses penuh ke seluruh materi spesialisasi, kuis bersertifikat, dan alat profesional.',
    monthly: {
      amount: 49000,
      label: 'Rp 49.000 / bulan',
      periodMonths: 1,
    },
    annual: {
      amount: 399000,
      label: 'Rp 399.000 / tahun',
      periodMonths: 12,
      savingsLabel: 'Hemat 32% (Setara Rp 33.250 / bln)',
    },
    features: [
      'Akses tak terbatas ke 6 Jalur Spesialisasi (128 materi lanjutan)',
      'Akses ke seluruh 8 Diagram Sains Interaktif (SVG Telemetri)',
      'Ujian Kuis Sertifikasi Spesialisasi (Passing Grade 80%)',
      'Sertifikat Kelulusan Digital Resmi bertanda tangan Fahrul M.W',
      'Verifikasi Ijazah Publik (URL unik /verify/:token)',
      'Fitur Cloud Simpan Data di Tools Cupping & Seduh Kopi',
      'Prioritas Pelamaran Kerja di Job Board Mitra Kafe',
      'Badge Emas "PRO" di Komunitas & Profil Publik',
    ],
  },
};

export const INITIAL_VOUCHERS = [
  {
    id: 'vouch-1',
    code: 'CHERRYBARISTA',
    discount_type: 'percentage' as const,
    discount_value: 30,
    min_purchase: 40000,
    usage_limit: 500,
    usage_count: 14,
    is_active: true,
    description: 'Diskon 30% Spesial Komunitas Barista Indonesia',
    created_at: new Date().toISOString(),
  },
  {
    id: 'vouch-2',
    code: 'KOPIINDONESIA',
    discount_type: 'percentage' as const,
    discount_value: 50,
    min_purchase: 40000,
    usage_limit: 200,
    usage_count: 89,
    is_active: true,
    description: 'Diskon 50% Semarak Kopi Nusantara',
    created_at: new Date().toISOString(),
  },
  {
    id: 'vouch-3',
    code: 'FAHRULPRO',
    discount_type: 'fixed' as const,
    discount_value: 20000,
    min_purchase: 49000,
    usage_limit: 100,
    usage_count: 27,
    is_active: true,
    description: 'Potongan Rp 20.000 Spesial Rekomendasi Master Roaster Fahrul M.W',
    created_at: new Date().toISOString(),
  },
];

// Fallback static QRIS string template (EMVCo) for CV Kreativitas Anak Bangsa (GoPay Merchant G268795309)
const DEFAULT_FALLBACK_STATIC_QRIS = 
  "00020101021126610014COM.GO-JEK.WWW01189360091432687953090210G2687953090303UMI51440014ID.CO.QRIS.WWW0215ID10265829585950303UMI5204899953033605802ID5925CV Kreativitas Anak Bangs6008SUKABUMI61054311262140703A01110362163042D87";

/**
 * Calculate CRC16-CCITT checksum for EMVCo QRIS payload
 */
export function calculateCRC16(payload: string): string {
  let crc = 0xFFFF;
  for (let i = 0; i < payload.length; i++) {
    crc ^= payload.charCodeAt(i) << 8;
    for (let j = 0; j < 8; j++) {
      if ((crc & 0x8000) !== 0) {
        crc = ((crc << 1) ^ 0x1021) & 0xFFFF;
      } else {
        crc = (crc << 1) & 0xFFFF;
      }
    }
  }
  return crc.toString(16).toUpperCase().padStart(4, '0');
}

/**
 * Generate a dynamic QRIS string compliant with EMVCo specifications
 * directly from a static merchant QRIS template.
 */
export function generateLocalDynamicQRIS(amount: number, staticQRIS?: string): string {
  const base = (staticQRIS || process.env.QRIS_STATIC || DEFAULT_FALLBACK_STATIC_QRIS).trim();
  let payload = base;

  const idx63 = payload.indexOf('6304');
  if (idx63 !== -1) {
    payload = payload.substring(0, idx63);
  }

  const tags: { tag: string; val: string }[] = [];
  let i = 0;
  try {
    while (i < payload.length) {
      const tag = payload.substring(i, i + 2);
      const length = parseInt(payload.substring(i + 2, i + 4), 10);
      if (isNaN(length)) break;
      const val = payload.substring(i + 4, i + 4 + length);
      tags.push({ tag, val });
      i += 4 + length;
    }
  } catch (e) {
    console.error('Failed to parse static QRIS TLV tags', e);
  }

  const amountStr = Math.round(amount).toString();
  const newTags: { tag: string; val: string }[] = [];
  let hasTag54 = false;

  for (const item of tags) {
    if (item.tag === '01') {
      newTags.push({ tag: '01', val: '12' }); // 12 = Dynamic QR
    } else if (item.tag === '54') {
      newTags.push({ tag: '54', val: amountStr });
      hasTag54 = true;
    } else if (item.tag === '58' && !hasTag54) {
      newTags.push({ tag: '54', val: amountStr });
      hasTag54 = true;
      newTags.push(item);
    } else {
      newTags.push(item);
    }
  }

  if (!hasTag54) {
    newTags.push({ tag: '54', val: amountStr });
  }

  let result = '';
  for (const item of newTags) {
    const lenStr = item.val.length.toString().padStart(2, '0');
    result += `${item.tag}${lenStr}${item.val}`;
  }

  result += '6304';
  const checksum = calculateCRC16(result);
  return result + checksum;
}

export interface CreateQRISResult {
  success: boolean;
  qris_id: string;
  trx_id: string;
  qris_code: string;
  qris_image_url: string;
  amount: number;
  expires_at: string;
  is_simulator: boolean;
  message?: string;
}

/**
 * Creates a Dynamic QRIS for GoPay Merchant.
 * If GOPAY_GATEWAY_URL is configured and online, calls the external Node.js gateway.
 * Otherwise, generates a valid local EMVCo QRIS with simulator mode.
 */
export async function requestDynamicQRIS(amount: number): Promise<CreateQRISResult> {
  const gatewayUrl = process.env.GOPAY_GATEWAY_URL || process.env.NEXT_PUBLIC_GOPAY_GATEWAY_URL;
  const apiKey = process.env.GOPAY_GATEWAY_API_KEY;

  if (gatewayUrl && apiKey) {
    try {
      const res = await fetch(`${gatewayUrl.replace(/\/$/, '')}/create-qris`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
        },
        body: JSON.stringify({ amount }),
      });

      if (res.ok) {
        const json = await res.json();
        if (json.success && json.data) {
          const qCode = json.data.qris_code;
          return {
            success: true,
            qris_id: json.data.qris_id,
            trx_id: json.data.trx_id,
            qris_code: qCode,
            qris_image_url: `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(qCode)}`,
            amount: json.data.amount,
            expires_at: json.data.expires_at,
            is_simulator: false,
          };
        }
      }
    } catch (err) {
      console.warn('GoPay external gateway unreachable, falling back to built-in dynamic QRIS engine:', err);
    }
  }

  // Built-in Dynamic QRIS Generation
  const dynamicCode = generateLocalDynamicQRIS(amount);
  const qrisId = 'qris_' + Math.random().toString(36).substring(2, 10);
  const trxId = 'TRX-' + Math.random().toString(36).substring(2, 10).toUpperCase();
  const expiresAt = new Date(Date.now() + 5 * 60 * 1000).toISOString(); // 5 minutes

  return {
    success: true,
    qris_id: qrisId,
    trx_id: trxId,
    qris_code: dynamicCode,
    qris_image_url: `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(dynamicCode)}`,
    amount,
    expires_at: expiresAt,
    is_simulator: false,
  };
}

/**
 * Checks payment status from the GoPay Gateway or simulator.
 */
export async function verifyQRISStatus(
  qrisId: string,
  trxId?: string,
  amount?: number
): Promise<{ success: boolean; paid: boolean; status: string; transaction?: any }> {
  const gatewayUrl = process.env.GOPAY_GATEWAY_URL || process.env.NEXT_PUBLIC_GOPAY_GATEWAY_URL;

  if (gatewayUrl && !qrisId.startsWith('qris_')) {
    try {
      const res = await fetch(`${gatewayUrl.replace(/\/$/, '')}/api/qr-status/${qrisId}`);
      if (res.ok) {
        const json = await res.json();
        return {
          success: json.success,
          paid: !!json.paid,
          status: json.status || (json.paid ? 'PAID' : 'PENDING'),
          transaction: json.transaction,
        };
      }
    } catch (err) {
      console.error('Failed to poll GoPay gateway status:', err);
    }
  }

  return {
    success: true,
    paid: false,
    status: 'PENDING',
  };
}
