export interface Invoice {
  invoiceID: number; // PK
  month: number;
  day: number;
  requiredAmount: number;
  dueDate: Date;
  status: string;
  studentId: number; // FK to student
}
