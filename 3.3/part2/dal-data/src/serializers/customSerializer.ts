import { StudentEntity } from '../entity.class';
import type { IDataProvider } from './dataProvider.interface';
import { promises as fs } from 'fs';

export class CustomProvider implements IDataProvider<StudentEntity> {
  async read(filePath: string): Promise<StudentEntity[]> {
    const content = await fs.readFile(filePath, 'utf-8');
    const lines = content
      .split('\n')
      .map((line) => line.trim())
      .filter((line) => line.length > 0);

    return lines.map((line) => {
      const [
        id,
        lastName,
        firstName,
        course,
        studentId,
        gender,
        city,
        recordBookNumber,
      ] = line.split('|');
      return Object.assign(new StudentEntity(), {
        id,
        lastName,
        firstName,
        course: Number(course),
        studentId,
        gender,
        city,
        recordBookNumber,
      });
    });
  }

  async write(filePath: string, items: StudentEntity[]): Promise<void> {
    const lines = items.map(
      (s) =>
        `${s.id}|${s.lastName}|${s.firstName}|${s.course ?? null}|${s.studentId}|${s.gender}|${s.city}|${s.recordBookNumber}`
    );
    await fs.writeFile(filePath, lines.join('\n'), 'utf-8');
  }

  async create(filePath: string): Promise<void> {
    await fs.writeFile(filePath, '', 'utf-8');
  }

  async deleteFile(filePath: string): Promise<void> {
    await fs.unlink(filePath);
  }
}
