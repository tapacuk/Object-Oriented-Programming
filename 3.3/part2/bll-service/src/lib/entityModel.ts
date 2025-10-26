type Gender = 'male' | 'female';

export class StudentModel {
  constructor(
    public id: string,
    public lastName: string,
    public firstName: string,
    public course: number,
    public studentId: string,
    public gender: Gender,
    public city: string,
    public recordBookNumber: string
  ) {}
}
