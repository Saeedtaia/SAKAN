export interface Guardian {
  guardianID: number; // PK (renamed from InvoiceID error)
  firstName: string;
  secondName: string;
  thirdName: string;
  fourthName: string;
  job: string;
  nationalID: number; // or string if preferred
  phone: string;
  guardianRelation: string;
}
