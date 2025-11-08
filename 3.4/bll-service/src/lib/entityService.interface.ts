import { StudentModel } from './entityModel';

export interface IStudentService {
  addStudent(student: StudentModel): void;
  removeStudent(id: string): void;
  findStudentsByCondition(
    predicate: (student: StudentModel) => boolean
  ): StudentModel[];
  countFemaleStudentsInKyivOn5thCourse(): number;
  getAllStudents(): StudentModel[];
}
