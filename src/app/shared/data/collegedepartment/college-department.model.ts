export interface CollegeDepartment {
  collegeDepartmentID: number; // PK
  name: string;
  collegeID: number; // FK to colleges
}
