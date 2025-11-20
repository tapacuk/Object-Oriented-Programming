import { StudentEntity } from '../../classes/studentEntity.class';
import type { IDataProvider } from '../dataProvider.interface';
import { promises as fs } from 'fs';
import type { StudentModel } from '../../../../bll-service/src';

export class BinaryProvider<T> implements IDataProvider<StudentModel> {
  async read(
    filePath: string = './data/students.bin'
  ): Promise<StudentModel[]> {
    try {
      const buffer = await fs.readFile(filePath);
      const parsed: any[] = JSON.parse(buffer.toString('utf8'));
      return parsed.map((o: any) => Object.assign(new StudentEntity(), o));
    } catch (err) {
      return [];
    }
  }

  async write(
    filePath: string = './data/students.bin',
    items: StudentModel[]
  ): Promise<void> {
    const json = JSON.stringify(items, null, 2);
    const buffer = Buffer.from(json, 'utf8');
    await fs.writeFile(filePath, buffer);
  }

  async create(filePath: string = './data/students.bin'): Promise<void> {
    const buffer = Buffer.from('[]', 'utf8');
    await fs.writeFile(filePath, buffer);
  }

  async deleteFile(filePath: string = './data/students.bin'): Promise<void> {
    await fs.unlink(filePath);
  }
}
