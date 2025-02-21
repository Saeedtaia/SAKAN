export interface Application {
  applicationID: number; // PK
  submitDate: Date;
  aiValidationStatus: string;
  finalStatus: string;
  adminNotes?: string;
}
