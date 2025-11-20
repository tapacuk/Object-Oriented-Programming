import { StudentNotFoundException } from './lib/studentExceptions';
import type { IEntityContext } from './lib/iEntityContext.interface';
import type { StudentModel } from './lib/studentModel';
import type { IStudentService } from './lib/iStudentService.interface';
import type { Gender } from './lib/gender.type';

export class StudentService implements IStudentService {
  private students: StudentModel[] = [];

  constructor(private context: IEntityContext) {}

  async initialize(): Promise<void> {
    this.students = await this.context.readAll();
  }

  addStudent(student: StudentModel): void {
    if (
      !student.firstName ||
      !student.lastName ||
      student.firstName.trim() === '' ||
      student.lastName.trim() === ''
    ) {
      throw new Error(
        "Некоректні дані студента: Ім'я та Прізвище є обов'язковими полями"
      );
    }

    if (this.students.find((s) => s.studentId === student.studentId)) {
      throw new Error(`Студент з ID ${student.studentId} вже існує.`);
    }

    if (!student.city || student.city.trim() === '') {
      student.city = 'Unknown';
    }

    if (!student.recordBookNumber || student.recordBookNumber.trim() === '') {
      student.recordBookNumber = 'N/A';
    }

    if (!student.course || student.course < 1 || student.course > 6) {
      throw new Error('Некоректний курс студента: Допустимі значення: 1-6.');
    }

    if (student.gender !== 'male' && student.gender !== 'female') {
      throw new Error(
        "Некоректна стать студента: Допустимі значення: 'male', 'female '"
      );
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
        s.city!.toLowerCase() === 'kyiv'
    ).length;
  }

  getAllStudents(): StudentModel[] {
    return [...this.students];
  }

  async saveChanges(): Promise<void> {
    await this.context.saveAll(this.students);
  }

  hostel(id: string): void {
    const student = this.students.find((s) => s.studentId === id);
    if (!student)
      throw new StudentNotFoundException(`Студента з ID ${id} не знайдено.`);

    const city = (student.city ?? '').trim();
    if (city.toLowerCase() !== 'kyiv') {
      student.city = 'Kyiv (In hostel)';
    } else {
      if (!city.includes('(In hostel)')) {
        student.city = `${city} (In hostel)`;
      }
    }
  }
}
