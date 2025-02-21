// student.model.ts
export interface Student {
  studentID: number; // PK
  firstName: string;
  secondName: string;
  thirdName: string;
  fourthName: string;
  countryId: number;
  nationalID: string;
  phone: string;
  telephone?: string;
  birthDate: Date;
  gender: string; // e.g., 'M' or 'F'
  religion: string;
  placeOfBirth: string;
  hasSpecialNeeds: boolean;
  guardianID: number; // FK to guardians
  studentCode: string;
  academicYear: number;
  collegeID: number; // FK to colleges
  email: string;
  applicationID: number; // FK to applications
  residencePlace: number; // FK (could be a location table)
  isMarried: boolean;
  addressLine: string;
  roomID: number; // FK to rooms
  userID: string; // FK to users (nvarchar(450))
  historyId: number; // FK to student history
  oldStudentId: number; // FK to old students
  newStudentId: number; // FK to new students
}
