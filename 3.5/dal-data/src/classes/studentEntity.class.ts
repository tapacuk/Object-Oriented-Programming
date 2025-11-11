import { randomInt } from 'crypto';
import type { IMultiplyBigNumbers } from './multiplyBigNums.interface';

type Gender = 'male' | 'female';

export class StudentEntity implements IMultiplyBigNumbers {
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

  multiplyNumbers(): string {
    const a = randomInt(10, 99);
    const b = randomInt(1000, 9999);
    return `${this.lastName} ${this.firstName} рахує великі числа...\nУ результаті: ${(a * b).toString()}`;
  }
}
