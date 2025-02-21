// violation.model.ts
export interface Violation {
  violationID: number; // PK
  violationDate: Date;
  description?: string;
  studentId: number; // FK to student
  violationLevel?: boolean;
  requiredAmount?: number;
}

export const FAKE_VIOLATIONS: Violation[] = [
  {
    violationID: 1,
    violationDate: new Date('2025-02-01'),
    description: 'Late submission of assignments',
    studentId: 1,
    violationLevel: false,
    requiredAmount: 50,
  },
  {
    violationID: 2,
    violationDate: new Date('2025-03-01'),
    description: 'Unauthorized absence',
    studentId: 2,
    violationLevel: true,
    requiredAmount: 100,
  },
];
// old-student.model.ts
export interface OldStudent {
  oldStudentID: number; // PK
  previousYearGrade?: string;
  gradePercentage: number;
  previousYearHosting: string;
}

export const FAKE_OLD_STUDENTS: OldStudent[] = [
  {
    oldStudentID: 1,
    previousYearGrade: 'B',
    gradePercentage: 75.5,
    previousYearHosting: 'Yes',
  },
];
// new-student.model.ts
export interface NewStudent {
  newStudentID: number; // PK
  highSchoolPercentage: number;
  isOutsideSchool: boolean;
  highSchoolId: number; // FK to high schools
}

export const FAKE_NEW_STUDENTS: NewStudent[] = [
  {
    newStudentID: 1,
    highSchoolPercentage: 88.5,
    isOutsideSchool: false,
    highSchoolId: 1,
  },
];
// high-school.model.ts
export interface HighSchool {
  highSchoolID: number; // PK
  name: string;
}

export const FAKE_HIGH_SCHOOLS: HighSchool[] = [
  {
    highSchoolID: 1,
    name: 'Central High School',
  },
];
// high-school-department.model.ts
export interface HighSchoolDepartment {
  highSchoolDepartmentID: number; // PK (assumed renaming for clarity)
  name: string;
  highSchoolId: number; // FK to high schools
}

export const FAKE_HIGH_SCHOOL_DEPARTMENTS: HighSchoolDepartment[] = [
  {
    highSchoolDepartmentID: 1,
    name: 'Science',
    highSchoolId: 1,
  },
];
// notification.model.ts
export interface Notification {
  notificationID: number; // PK
  title: string;
  content: string;
  isRead: boolean;
  date: Date;
  studentId: number; // FK to student
}

export const FAKE_NOTIFICATIONS: Notification[] = [
  {
    notificationID: 1,
    title: 'Exam Reminder',
    content: 'Your exam is scheduled for next week.',
    isRead: false,
    date: new Date(),
    studentId: 1,
  },
];
// attendance.model.ts
export interface Attendance {
  attendanceID: number; // PK
  dataAndTime: Date;
  entryType: string;
  studentId: number; // FK to student
}

export const FAKE_ATTENDANCE: Attendance[] = [
  {
    attendanceID: 1,
    dataAndTime: new Date(),
    entryType: 'Check-In',
    studentId: 1,
  },
];
// document-type.model.ts
export interface DocumentType {
  documentTypeID: number; // PK
  docTypeName: string;
}

export const FAKE_DOCUMENT_TYPES: DocumentType[] = [
  {
    documentTypeID: 1,
    docTypeName: 'Passport',
  },
];
// document.model.ts
export interface Document {
  documentID: number; // PK
  path: string;
  studentID: number; // FK to student
  docTypeID: number; // FK to document types
}

export const FAKE_DOCUMENTS: Document[] = [
  {
    documentID: 1,
    path: '/docs/passport_john.pdf',
    studentID: 1,
    docTypeID: 1,
  },
];
// village.model.ts
export interface Village {
  villageID: number; // PK
  nameEn: string;
  nameAr: string;
  cityID: number; // FK to cities
}

export const FAKE_VILLAGES: Village[] = [
  {
    villageID: 1,
    nameEn: 'Green Village',
    nameAr: 'قرية خضراء',
    cityID: 1,
  },
];
// dormitory.model.ts
export interface Dormitory {
  dromitoryID: number; // PK
  name: string;
  capacity: number;
  description: string;
  villageID: number; // FK to villages
  addressInDetails: string;
  mapSearchText: string;
  type: string;
}

export const FAKE_DORMITORIES: Dormitory[] = [
  {
    dromitoryID: 1,
    name: 'North Dorm',
    capacity: 200,
    description: 'Dormitory for first-year students',
    villageID: 1,
    addressInDetails: '123 Dorm St',
    mapSearchText: 'North Dorm, City Center',
    type: 'University Dorm',
  },
];
// room.model.ts
export interface Room {
  roomID: number; // PK
  roomNumber: number;
  capacity: number;
  dromitoryID: number; // FK to dormitory
}

export const FAKE_ROOMS: Room[] = [
  {
    roomID: 1,
    roomNumber: 101,
    capacity: 2,
    dromitoryID: 1,
  },
];
// user.model.ts
export interface User {
  userID: string; // PK
  userName: string;
  emailConfirmed: boolean;
  phoneConfirmed: boolean;
  passwordHash: string;
  isActive: boolean;
  lockoutEnabled: boolean;
  accessFailedCount: number;
  lockoutEnd?: Date;
}

export const FAKE_USERS: User[] = [
  {
    userID: 'user1',
    userName: 'johnsmith',
    emailConfirmed: true,
    phoneConfirmed: true,
    passwordHash: 'hashed_password_1',
    isActive: true,
    lockoutEnabled: false,
    accessFailedCount: 0,
    lockoutEnd: new Date('2025-02-01'),
  },
  {
    userID: 'user2',
    userName: 'emilyjohnson',
    emailConfirmed: false,
    phoneConfirmed: true,
    passwordHash: 'hashed_password_2',
    isActive: true,
    lockoutEnabled: false,
    accessFailedCount: 0,
    lockoutEnd: new Date('2025-02-01'),
  },
];
// issue.model.ts
export interface Issue {
  issueID: number; // PK
  description: string;
  createdDate: Date;
  responseDate: Date;
  response: string;
  studentId: number; // FK to student
  employeeId: number; // FK to employee
}

export const FAKE_ISSUES: Issue[] = [
  {
    issueID: 1,
    description: 'Issue with enrollment',
    createdDate: new Date('2025-01-01'),
    responseDate: new Date('2025-01-02'),
    response: 'Resolved',
    studentId: 1,
    employeeId: 1,
  },
];
// country.model.ts
export interface Country {
  countryID: number; // PK
  nameEn: string;
  nameAr: string;
}

export const FAKE_COUNTRIES: Country[] = [
  {
    countryID: 1,
    nameEn: 'USA',
    nameAr: 'الولايات المتحدة',
  },
];
// governorate.model.ts
export interface Governorate {
  governorateID: number; // PK
  nameEn: string;
  nameAr: string;
  countryId: number; // FK to country
}

export const FAKE_GOVERNORATES: Governorate[] = [
  {
    governorateID: 1,
    nameEn: 'California',
    nameAr: 'كاليفورنيا',
    countryId: 1,
  },
];
// city.model.ts
export interface City {
  cityID: number; // PK
  nameEn: string;
  nameAr: string;
  governorateID: number; // FK to governorate
}

export const FAKE_CITIES: City[] = [
  {
    cityID: 1,
    nameEn: 'Los Angeles',
    nameAr: 'لوس أنجلوس',
    governorateID: 1,
  },
];
// employee.model.ts
export interface Employee {
  employeeID: number; // PK
  firstName: string;
  secondName: string;
  thirdName: string;
  fourthName: string;
  userId: string; // FK to user
}

export const FAKE_EMPLOYEES: Employee[] = [
  {
    employeeID: 1,
    firstName: 'Alice',
    secondName: 'Beth',
    thirdName: 'Claire',
    fourthName: 'Davis',
    userId: 'user1',
  },
];
// users-refresh-token.model.ts
export interface UsersRefreshToken {
  id: number; // PK
  userID: string;
  accessToken: string;
  refreshToken: string;
  isUsed: boolean;
  isRevoked: boolean;
  createdDate: Date;
  expiryDate: Date;
}

export const FAKE_USERS_REFRESH_TOKENS: UsersRefreshToken[] = [
  {
    id: 1,
    userID: 'user1',
    accessToken: 'access_token_1',
    refreshToken: 'refresh_token_1',
    isUsed: false,
    isRevoked: false,
    createdDate: new Date(),
    expiryDate: new Date(Date.now() + 3600 * 1000),
  },
];
// user-role.model.ts
export interface UserRole {
  userID: string; // composite PK (FK to user)
  roleID: string; // composite PK (FK to role)
}

export const FAKE_USER_ROLES: UserRole[] = [
  {
    userID: 'user1',
    roleID: 'role1',
  },
  {
    userID: 'user2',
    roleID: 'role2',
  },
];
// role.model.ts
export interface Role {
  roleID: string; // PK
  name: string;
}

export const FAKE_ROLES: Role[] = [
  {
    roleID: 'role1',
    name: 'Admin',
  },
  {
    roleID: 'role2',
    name: 'User',
  },
];
// event.model.ts
export interface Event {
  eventID: number; // PK
  title: string;
  date: Date;
  description: string;
  createdBy: number; // FK to employee or user
}

export const FAKE_EVENTS: Event[] = [
  {
    eventID: 1,
    title: 'Orientation',
    date: new Date('2025-09-01'),
    description: 'Welcome event for new students',
    createdBy: 1,
  },
];
// questionnaire.model.ts
export interface Questionnaire {
  questionnaireID: number; // PK
  title: string;
  description: string;
  createdBy: number; // FK to user/employee
  createdAt: Date;
  forYear: string;
}

export const FAKE_QUESTIONNAIRES: Questionnaire[] = [
  {
    questionnaireID: 1,
    title: 'Course Feedback',
    description: 'Feedback for course improvements',
    createdBy: 1,
    createdAt: new Date(),
    forYear: '2025',
  },
];
// response.model.ts
export interface Response {
  responseID: number; // PK
  responseAt: Date;
  userID: number; // FK to user
  questionnaireId: number; // FK to questionnaire
}

export const FAKE_RESPONSES: Response[] = [
  {
    responseID: 1,
    responseAt: new Date(),
    userID: 1,
    questionnaireId: 1,
  },
];
// question.model.ts
export interface Question {
  questionID: number; // PK
  text: string;
  type: string;
  isRequired: boolean;
  questionnaireId: number; // FK to questionnaire
}

export const FAKE_QUESTIONS: Question[] = [
  {
    questionID: 1,
    text: 'How do you rate the course?',
    type: 'rating',
    isRequired: true,
    questionnaireId: 1,
  },
];
// answer.model.ts
export interface Answer {
  answerID: number; // PK
  responseId: number; // FK to response
  questionId: number; // FK to question
  answerText?: string;
  optionId: number; // FK to option
}

export const FAKE_ANSWERS: Answer[] = [
  {
    answerID: 1,
    responseId: 1,
    questionId: 1,
    answerText: '5',
    optionId: 1,
  },
];
// option.model.ts
export interface Option {
  optionID: number; // PK
  text: string;
  questionId: number; // FK to question
}

export const FAKE_OPTIONS: Option[] = [
  {
    optionID: 1,
    text: 'Excellent',
    questionId: 1,
  },
  {
    optionID: 2,
    text: 'Good',
    questionId: 1,
  },
];
