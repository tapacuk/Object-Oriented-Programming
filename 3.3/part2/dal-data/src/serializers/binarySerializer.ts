import { StudentEntity } from '../entity.class';
import type { IDataProvider } from './dataProvider.interface';
import { promises as fs } from 'fs';

export class BinaryProvider implements IDataProvider<StudentEntity> {
  async read(filePath: string): Promise<StudentEntity[]> {
    const buffer = await fs.readFile(filePath);
    const parsed: any[] = JSON.parse(buffer.toString('utf8'));
    return parsed.map((o: any) => Object.assign(new StudentEntity(), o));
  }

  async write(filePath: string, items: StudentEntity[]): Promise<void> {
    const json = JSON.stringify(items, null, 2);
    const buffer = Buffer.from(json, 'utf8');
    await fs.writeFile(filePath, buffer);
  }

  async create(filePath: string): Promise<void> {
    const buffer = Buffer.from('[]', 'utf8');
    await fs.writeFile(filePath, buffer);
  }

  async deleteFile(filePath: string): Promise<void> {
    await fs.unlink(filePath);
  }
}
