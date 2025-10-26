import type { StudentModel } from './entityModel';

export interface IEntityContext {
  readAll(): Promise<StudentModel[]>;
  saveAll(students: StudentModel[]): Promise<void>;
}
