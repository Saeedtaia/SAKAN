export interface StudentHistory {
  studentHistoryID: number; // PK
  from: Date;
  to?: Date;
  studentId: number; // FK to student
  violationID: number; // FK to violations
}
