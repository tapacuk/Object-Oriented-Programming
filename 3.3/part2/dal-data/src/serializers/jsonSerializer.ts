import { StudentEntity } from '../entity.class';
import type { IDataProvider } from '../dataProvider.interface';
import { promises as fs } from 'fs';

export class JSONProvider implements IDataProvider<StudentEntity> {
  async read(filePath: string): Promise<StudentEntity[]> {
    try {
      const parsed = JSON.parse(await fs.readFile(filePath, 'utf-8'));
      return parsed.map((o: any) => Object.assign(new StudentEntity(), o));
    } catch (err) {
      return [];
    }
  }

  async write(filePath: string, items: StudentEntity[]): Promise<void> {
    await fs.writeFile(filePath, JSON.stringify(items, null, 2), 'utf-8');
  }

  async create(filePath: string): Promise<void> {
    await fs.writeFile(filePath, '[]', 'utf-8');
  }

  async deleteFile(filePath: string): Promise<void> {
    await fs.unlink(filePath);
  }
}
