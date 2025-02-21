import { Visit } from '../../data/visit/visit.model';

export const FAKE_VISITS: Visit[] = [
  {
    visitID: 1,
    firstName: 'John',
    secondName: 'Michael',
    thirdName: 'Andrew',
    fourthName: 'Smith',
    nationalID: 'A123456789',
    visitDate: new Date(),
    status: 'Completed',
    studentId: 1,
  },
  {
    visitID: 2,
    firstName: 'Emily',
    secondName: 'Rose',
    thirdName: 'Ann',
    fourthName: 'Johnson',
    nationalID: 'B987654321',
    visitDate: new Date(),
    status: 'Pending',
    studentId: 2,
  },
];
