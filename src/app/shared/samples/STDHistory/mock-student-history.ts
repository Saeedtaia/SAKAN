import { StudentHistory } from '../../data/STDHistory/student-history.model';

export const FAKE_STUDENT_HISTORY: StudentHistory[] = [
  {
    studentHistoryID: 1001,
    from: new Date('2024-09-01'),
    to: new Date('2025-06-01'),
    studentId: 1,
    violationID: 1,
  },
  {
    studentHistoryID: 1002,
    from: new Date('2024-09-01'),
    studentId: 2,
    violationID: 2,
  },
];
