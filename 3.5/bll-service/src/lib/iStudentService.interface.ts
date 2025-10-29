import { StudentModel } from './studentModel';

export interface IStudentService {
  addStudent(student: StudentModel): void;
  removeStudent(id: string): void;
  findStudentsByCondition(
    predicate: (student: StudentModel) => boolean
  ): StudentModel[];
  countFemaleStudentsInKyivOn5thCourse(): number;
  getAllStudents(): StudentModel[];
}
