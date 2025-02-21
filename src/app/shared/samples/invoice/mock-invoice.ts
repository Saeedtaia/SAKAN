import { Invoice } from '../../data/invoice/invoice.model';

export const FAKE_INVOICES: Invoice[] = [
  {
    invoiceID: 1,
    month: 9,
    day: 15,
    requiredAmount: 1500.5,
    dueDate: new Date('2025-09-15'),
    status: 'Unpaid',
    studentId: 1,
  },
  {
    invoiceID: 2,
    month: 10,
    day: 20,
    requiredAmount: 2000.0,
    dueDate: new Date('2025-10-20'),
    status: 'Paid',
    studentId: 2,
  },
];
