import { StudentNotFoundException } from './lib/entityExceptions';
import type { IEntityContext } from './lib/entityContext.interface';
import type { StudentModel } from './lib/entityModel';
import type { IStudentService } from './lib/entityService.interface';

export class StudentService implements IStudentService {
  private students: StudentModel[] = [];

  constructor(private context: IEntityContext) {}

  async initialize(): Promise<void> {
    this.students = await this.context.readAll();
  }

  addStudent(student: StudentModel): void {
    if (!student.firstName || !student.lastName) {
      throw new Error('Некоректні дані студента.');
    }
    this.students.push(student);
  }

  removeStudent(id: string): void {
    const index = this.students.findIndex((s) => s.studentId === id);
    if (index === -1)
      throw new StudentNotFoundException(`Студента з ID ${id} не знайдено.`);
    this.students.splice(index, 1);
  }

  findStudentsByCondition(
    predicate: (student: StudentModel) => boolean
  ): StudentModel[] {
    return this.students.filter(predicate);
  }

  countFemaleStudentsInKyivOn5thCourse(): number {
    return this.students.filter(
      (s) =>
        s.gender === 'female' &&
        s.course === 5 &&
        s.city!.toLowerCase() === 'київ'
    ).length;
  }

  getAllStudents(): StudentModel[] {
    return [...this.students];
  }

  async saveChanges(): Promise<void> {
    await this.context.saveAll(this.students);
  }
}
