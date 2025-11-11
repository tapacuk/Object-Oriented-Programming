import { StudentEntity } from '../../classes/studentEntity.class';
import type { IDataProvider } from '../dataProvider.interface';
import { promises as fs } from 'fs';
import type { StudentModel } from '../../../../bll-service/src';

export class CustomProvider<T> implements IDataProvider<StudentModel> {
  async read(
    filePath: string = './data/students.txt'
  ): Promise<StudentModel[]> {
    try {
      const content = await fs.readFile(filePath, 'utf-8');
      const lines = content
        .split('\n')
        .map((line) => line.trim())
        .filter((line) => line.length > 0);

      return lines.map((line) => {
        const [
          lastName,
          firstName,
          course,
          studentId,
          gender,
          city,
          recordBookNumber,
        ] = line.split('|');
        return Object.assign(new StudentEntity(), {
          lastName,
          firstName,
          course: Number(course),
          studentId,
          gender,
          city,
          recordBookNumber,
        });
      });
    } catch (err) {
      return [];
    }
  }

  async write(
    filePath: string = './data/students.txt',
    items: StudentModel[]
  ): Promise<void> {
    const lines = items.map(
      (s) =>
        `${s.lastName}|${s.firstName}|${s.course ?? null}|${s.studentId}|${s.gender}|${s.city}|${s.recordBookNumber}`
    );
    await fs.writeFile(filePath, lines.join('\n'), 'utf-8');
  }

  async create(filePath: string = './data/students.txt'): Promise<void> {
    await fs.writeFile(filePath, '', 'utf-8');
  }

  async deleteFile(filePath: string = './data/students.txt'): Promise<void> {
    await fs.unlink(filePath);
  }
}
