import type { StudentModel } from './studentModel';

export interface IEntityContext {
  readAll(): Promise<StudentModel[]>;
  saveAll(students: StudentModel[]): Promise<void>;
}
