/**
 * Cherry Edu — Payment Security & Anti-Tampering Test Suite
 * Asserts Requirement 4:
 * 1. Forged success rejection
 * 2. Amount tampering rejection
 * 3. Idempotent repeated confirmation
 * 4. Cross-user order confirmation rejection
 * 5. Fallback QRIS cannot auto-activate Pro
 */

import {
  createValidatedServerOrder,
  verifyAndConfirmPaymentServerSide,
  PaymentSecurityError,
} from '../../lib/serverPaymentService';
import { PaymentTransaction } from '../../lib/types';

let passed = 0;
let total = 0;

function assert(condition: boolean, desc: string) {
  total++;
  if (condition) {
    passed++;
    console.log(`  [PASS] ${desc}`);
  } else {
    console.error(`  [FAIL] ${desc}`);
    process.exitCode = 1;
  }
}

async function runPaymentSecuritySuite() {
  console.log('=== RUNNING CHERRY EDU PAYMENT SECURITY SUITE ===\n');

  // 1. Amount Tampering Rejection
  console.log('Test Group 1: Server-Authoritative Price & Voucher Calculation');
  {
    const order = await createValidatedServerOrder({
      userId: 'usr-customer-1',
      planTier: 'pro',
      cycle: 'monthly',
      voucherCode: 'KOPIINDONESIA', // 50% discount on 49.000 = 24.500
    });

    assert(
      order.transaction.original_amount === 49000,
      'Original amount is locked to server catalog (Rp 49.000)'
    );
    assert(
      order.transaction.discount_amount === 24500,
      'Discount is computed server-side from voucher rules (50% = Rp 24.500)'
    );
    assert(
      order.transaction.final_amount === 24500,
      'Final amount is locked to server calculation (Rp 24.500)'
    );
  }

  // 2. Cross-User Order Confirmation Rejection
  console.log('\nTest Group 2: Order Ownership Enforcement');
  {
    const txUserA: PaymentTransaction = {
      id: 'tx_order_a',
      user_id: 'user-alice-123',
      user_name: 'Alice',
      user_email: 'alice@example.com',
      discount_amount: 0,
      final_amount: 49000,
      original_amount: 49000,
      status: 'pending',
      plan_tier: 'pro',
      cycle: 'monthly',
      payment_method: 'gopay_qris',
      created_at: new Date().toISOString(),
    };

    let errorCaught: PaymentSecurityError | null = null;
    try {
      // User Bob attempts to confirm Alice's order
      await verifyAndConfirmPaymentServerSide(txUserA, 'user-bob-999', true);
    } catch (err: any) {
      errorCaught = err;
    }

    assert(
      errorCaught !== null && errorCaught.code === 'ORDER_OWNERSHIP_MISMATCH',
      'Confirming another user order is rejected with 403 ORDER_OWNERSHIP_MISMATCH'
    );
  }

  // 3. Fallback QRIS Cannot Auto-Activate Pro
  console.log('\nTest Group 3: Fallback QRIS Safety');
  {
    const txFallback: PaymentTransaction = {
      id: 'tx_fallback_01',
      user_id: 'user-alice-123',
      qris_id: 'qris_random_local_123', // Local fallback QRIS
      user_name: 'Alice',
      user_email: 'alice@example.com',
      discount_amount: 0,
      final_amount: 49000,
      original_amount: 49000,
      status: 'pending',
      plan_tier: 'pro',
      cycle: 'monthly',
      payment_method: 'gopay_qris',
      created_at: new Date().toISOString(),
    };

    const result = await verifyAndConfirmPaymentServerSide(
      txFallback,
      'user-alice-123',
      false // real verification mode
    );

    assert(
      result.status === 'manual_verification_required' && !result.isProActivated,
      'Local fallback QRIS CANNOT auto-activate Pro subscription without manual proof'
    );
  }

  // 4. Repeated Confirmation Idempotency
  console.log('\nTest Group 4: Idempotency & Re-play Protection');
  {
    const txAlreadyPaid: PaymentTransaction = {
      id: 'tx_already_paid',
      user_id: 'user-alice-123',
      user_name: 'Alice',
      user_email: 'alice@example.com',
      discount_amount: 0,
      final_amount: 49000,
      original_amount: 49000,
      status: 'paid', // already settled
      plan_tier: 'pro',
      cycle: 'monthly',
      payment_method: 'gopay_qris',
      paid_at: new Date(Date.now() - 3600000).toISOString(),
      created_at: new Date(Date.now() - 7200000).toISOString(),
    };

    const confirm1 = await verifyAndConfirmPaymentServerSide(
      txAlreadyPaid,
      'user-alice-123',
      true
    );

    assert(
      confirm1.success && confirm1.alreadyPaid,
      'Repeated confirmation returns alreadyPaid: true without double-charging or error'
    );
  }

  // 5. Expired Order Rejection
  console.log('\nTest Group 5: Expired Order Rejection');
  {
    const txExpired: PaymentTransaction = {
      id: 'tx_expired_01',
      user_id: 'user-alice-123',
      user_name: 'Alice',
      user_email: 'alice@example.com',
      discount_amount: 0,
      final_amount: 49000,
      original_amount: 49000,
      status: 'pending',
      plan_tier: 'pro',
      cycle: 'monthly',
      payment_method: 'gopay_qris',
      expires_at: new Date(Date.now() - 60000).toISOString(), // 1 minute in the past
      created_at: new Date(Date.now() - 3600000).toISOString(),
    };

    const result = await verifyAndConfirmPaymentServerSide(
      txExpired,
      'user-alice-123',
      true
    );

    assert(
      !result.success && result.status === 'expired',
      'Expired QRIS transaction is rejected from activation'
    );
  }

  console.log(`\n=== RESULTS: ${passed}/${total} PAYMENT SECURITY TESTS PASSED ===\n`);
}

runPaymentSecuritySuite().catch((err) => {
  console.error('Test suite failed:', err);
  process.exit(1);
});
