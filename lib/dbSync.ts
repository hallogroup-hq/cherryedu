import { supabase, isSupabaseConfigured } from './supabase';
import { User, PaymentTransaction, SubscriptionCycle } from './types';

/**
 * Push user profile to Supabase `profiles` table.
 * Fault-tolerant: If the table has not been created yet, it fails silently without crashing.
 */
export async function syncProfileToSupabase(user: User): Promise<void> {
  if (!isSupabaseConfigured() || user.id === 'guest') return;

  try {
    const payload = {
      id: user.id,
      name: user.name,
      email: user.email,
      avatar_url: user.avatar_url,
      bio: user.bio,
      role: user.role,
      coffee_role: user.coffee_role,
      city: user.city,
      xp_points: user.xp_points || 0,
      streak_count: user.streak_count || 0,
      is_pro: Boolean(user.is_pro),
      subscription_tier: user.subscription_tier || (user.is_pro ? 'pro' : 'free'),
      subscription_cycle: user.subscription_cycle || null,
      subscription_expires_at: user.subscription_expires_at || null,
      last_active_date: user.last_active_date || new Date().toISOString().slice(0, 10),
      updated_at: new Date().toISOString(),
    };

    await supabase.from('profiles').upsert(payload, { onConflict: 'id' });
  } catch (err) {
    console.debug('Supabase profiles sync skipped (table may not be configured yet):', err);
  }
}

/**
 * Fetch all registered user profiles from Supabase.
 */
export async function fetchProfilesFromSupabase(): Promise<User[] | null> {
  if (!isSupabaseConfigured()) return null;

  try {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .order('created_at', { ascending: false });

    if (error || !data) return null;

    return data.map((row: any) => ({
      id: row.id,
      name: row.name || 'Pengguna CherryEdu',
      email: row.email || '',
      avatar_url: row.avatar_url || `https://api.dicebear.com/7.x/bottts/svg?seed=${row.id}`,
      bio: row.bio || '',
      role: row.role || 'learner',
      coffee_role: row.coffee_role || 'barista',
      city: row.city || 'Indonesia',
      xp_points: row.xp_points || 0,
      streak_count: row.streak_count || 0,
      is_pro: Boolean(row.is_pro),
      subscription_tier: row.subscription_tier || (row.is_pro ? 'pro' : 'free'),
      subscription_cycle: row.subscription_cycle || undefined,
      subscription_expires_at: row.subscription_expires_at || undefined,
      last_active_date: row.last_active_date || new Date().toISOString().slice(0, 10),
      created_at: row.created_at || new Date().toISOString(),
    }));
  } catch (err) {
    console.debug('Failed to fetch profiles from Supabase:', err);
    return null;
  }
}

/**
 * Directly update a user's Pro status in Supabase so it immediately applies across devices.
 */
export async function updateProStatusInSupabase(
  userId: string,
  isPro: boolean,
  tier: string = 'pro',
  cycle?: SubscriptionCycle,
  expiresAt?: string
): Promise<void> {
  if (!isSupabaseConfigured() || userId === 'guest') return;

  try {
    await supabase
      .from('profiles')
      .update({
        is_pro: isPro,
        subscription_tier: tier,
        subscription_cycle: cycle || null,
        subscription_expires_at: expiresAt || null,
        updated_at: new Date().toISOString(),
      })
      .eq('id', userId);
  } catch (err) {
    console.debug('Failed to update Pro status in Supabase:', err);
  }
}

/**
 * Push payment transaction to Supabase `transactions` table.
 */
export async function syncTransactionToSupabase(tx: PaymentTransaction): Promise<void> {
  if (!isSupabaseConfigured()) return;

  try {
    const payload = {
      id: tx.id,
      user_id: tx.user_id,
      user_name: tx.user_name,
      user_email: tx.user_email,
      plan_tier: tx.plan_tier,
      cycle: tx.cycle,
      original_amount: tx.original_amount,
      discount_amount: tx.discount_amount,
      final_amount: tx.final_amount,
      voucher_code: tx.voucher_code || null,
      status: tx.status,
      payment_method: tx.payment_method,
      qris_id: tx.qris_id || null,
      trx_id: tx.trx_id || null,
      qris_code: tx.qris_code || null,
      qris_url: tx.qris_url || null,
      expires_at: tx.expires_at || null,
      paid_at: tx.paid_at || null,
      created_at: tx.created_at,
    };

    await supabase.from('transactions').upsert(payload, { onConflict: 'id' });
  } catch (err) {
    console.debug('Supabase transaction sync skipped:', err);
  }
}

/**
 * Fetch all transactions from Supabase for Admin overview.
 */
export async function fetchTransactionsFromSupabase(): Promise<PaymentTransaction[] | null> {
  if (!isSupabaseConfigured()) return null;

  try {
    const { data, error } = await supabase
      .from('transactions')
      .select('*')
      .order('created_at', { ascending: false });

    if (error || !data) return null;

    return data.map((row: any) => ({
      id: row.id,
      user_id: row.user_id,
      user_name: row.user_name || 'Pengguna CherryEdu',
      user_email: row.user_email || '',
      plan_tier: row.plan_tier || 'pro',
      cycle: row.cycle || 'monthly',
      original_amount: row.original_amount,
      discount_amount: row.discount_amount || 0,
      final_amount: row.final_amount,
      voucher_code: row.voucher_code || undefined,
      status: row.status as PaymentTransaction['status'],
      payment_method: row.payment_method || 'gopay_qris',
      qris_id: row.qris_id || undefined,
      trx_id: row.trx_id || undefined,
      qris_code: row.qris_code || undefined,
      qris_url: row.qris_url || undefined,
      expires_at: row.expires_at || undefined,
      paid_at: row.paid_at || undefined,
      created_at: row.created_at || new Date().toISOString(),
    }));
  } catch (err) {
    console.debug('Failed to fetch transactions from Supabase:', err);
    return null;
  }
}

/**
 * Update transaction status in Supabase.
 */
export async function updateTransactionStatusInSupabase(
  txId: string,
  status: PaymentTransaction['status'],
  paidAt?: string
): Promise<void> {
  if (!isSupabaseConfigured()) return;

  try {
    await supabase
      .from('transactions')
      .update({
        status,
        paid_at: paidAt || null,
      })
      .eq('id', txId);
  } catch (err) {
    console.debug('Failed to update transaction status in Supabase:', err);
  }
}
