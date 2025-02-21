export interface Payment {
  paymentID: number; // PK
  amountPaid: number;
  paymentDate: Date;
  paymentMethod: string; // e.g., 'Cash', 'Credit Card'
  invoiceId: number; // FK to invoices
}
