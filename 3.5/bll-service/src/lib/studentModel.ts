import type { Gender } from './gender.type';

export class StudentModel {
  constructor(
    public lastName: string,
    public firstName: string,
    public course: number,
    public studentId: string,
    public gender: Gender,
    public city: string,
    public recordBookNumber: string
  ) {}
}
