export type Gender = 'male' | 'female';

export class StudentEntity {
  id: string | undefined;
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
