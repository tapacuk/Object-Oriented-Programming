type Gender = 'male' | 'female';

export class StudentEntity {
  lastName: string | undefined;
  firstName: string | undefined;
  course: number | undefined;
  studentId: string | undefined;
  gender: Gender | undefined;
  city: string | undefined;
  recordBookNumber: string | undefined;

  constructor(init?: Partial<StudentEntity>) {
    Object.assign(this, init);
  }
}
