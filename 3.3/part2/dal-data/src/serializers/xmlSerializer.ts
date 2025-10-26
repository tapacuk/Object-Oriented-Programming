import { StudentEntity } from '../entity.class';
import type { IDataProvider } from './dataProvider.interface';
import { promises as fs } from 'fs';
import { XMLParser, XMLBuilder } from 'fast-xml-parser';

export class XMLProvider implements IDataProvider<StudentEntity> {
  async read(filePath: string): Promise<StudentEntity[]> {
    const xml = await fs.readFile(filePath, 'utf-8');
    const parser = new XMLParser({
      ignoreAttributes: false,
      attributeNamePrefix: '@_',
    });
    const parsed = parser.parse(xml);

    const studentsNode = parsed?.students?.student;

    const plainArray: any[] = (() => {
      if (!studentsNode) return [];
      return Array.isArray(studentsNode) ? studentsNode : [studentsNode];
    })();

    return plainArray.map((o: any) => Object.assign(new StudentEntity(), o));
  }

  async write(filePath: string, items: StudentEntity[]): Promise<void> {
    const builder = new XMLBuilder({
      format: true,
      attributeNamePrefix: '@_',
    });

    const plainItems = items.map((i) => {
      return JSON.parse(JSON.stringify(i));
    });

    const obj: any = {
      students: {
        student: plainItems,
      },
    };

    const xml = builder.build(obj);
    await fs.writeFile(filePath, xml, 'utf-8');
  }

  async create(filePath: string): Promise<void> {
    const builder = new XMLBuilder({ format: true, attributeNamePrefix: '@_' });
    const xml = builder.build({ students: {} });
    await fs.writeFile(filePath, xml, 'utf-8');
  }

  async deleteFile(filePath: string): Promise<void> {
    await fs.unlink(filePath);
  }
}
