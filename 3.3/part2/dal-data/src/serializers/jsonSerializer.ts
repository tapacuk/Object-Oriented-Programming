import type { IDataProvider } from '../dataProvider.interface';
import { promises as fs } from 'fs';
import type { StudentModel } from '../../../bll-service/src';
import { StudentEntity } from '../studentEntity.class';

export class JSONProvider<T> implements IDataProvider<StudentModel> {
  async read(
    filePath: string = './data/students.json'
  ): Promise<StudentModel[]> {
    try {
      const parsed = JSON.parse(await fs.readFile(filePath, 'utf-8'));
      return parsed.map((o: any) => Object.assign(new StudentEntity(), o));
    } catch (err) {
      return [];
    }
  }

  async write(
    filePath: string = './data/students.json',
    items: StudentModel[]
  ): Promise<void> {
    await fs.writeFile(filePath, JSON.stringify(items, null, 2), 'utf-8');
  }

  async create(filePath: string = './data/students.json'): Promise<void> {
    await fs.writeFile(filePath, '[]', 'utf-8');
  }

  async deleteFile(filePath: string = './data/students.json'): Promise<void> {
    await fs.unlink(filePath);
  }
}
