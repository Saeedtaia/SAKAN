export interface Visit {
  visitID: number; // PK
  firstName: string;
  secondName: string;
  thirdName: string;
  fourthName: string;
  nationalID: string;
  visitDate: Date;
  status: string;
  studentId: number; // FK to student
}
