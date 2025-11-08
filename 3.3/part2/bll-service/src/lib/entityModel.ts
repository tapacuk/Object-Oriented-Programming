type Gender = 'male' | 'female';

export class StudentModel {
  constructor(
    public lastName: string | undefined,
    public firstName: string | undefined,
    public course: number | undefined,
    public studentId: string | undefined,
    public gender: Gender | undefined,
    public city: string | undefined,
    public recordBookNumber: string | undefined
  ) {}
}
