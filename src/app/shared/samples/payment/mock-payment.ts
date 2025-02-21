import { Payment } from '../../data/payment/payment.model';

export const FAKE_PAYMENTS: Payment[] = [
  {
    paymentID: 1,
    amountPaid: 1500.5,
    paymentDate: new Date(),
    paymentMethod: 'Credit Card',
    invoiceId: 1,
  },
  {
    paymentID: 2,
    amountPaid: 2000.0,
    paymentDate: new Date(),
    paymentMethod: 'Cash',
    invoiceId: 2,
  },
];
