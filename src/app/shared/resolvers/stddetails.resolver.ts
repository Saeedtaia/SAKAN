import { ResolveFn } from '@angular/router';
import { Student } from '../data/student/student';
import { FAKE_STUDENTS } from '../samples/student/mock-students';

export const sTDdetailsResolver: ResolveFn<Student[]> = (route, state) => {
  // const studentService = state.injector.get(StudentService);
  const studentId = route.paramMap.get('StudentId');
  let Data: Student[] = FAKE_STUDENTS.filter(
    (student) => student.nationalID == studentId
  );
  console.log('Fetching data for Student ID:', studentId);
  console.log(Data);
  return Data /* studentServices.getstudentdetails(studentId).data */;
};
