import { StudentEntity } from '../../classes/studentEntity.class';
import type { IDataProvider } from '../dataProvider.interface';
import { promises as fs } from 'fs';
import { XMLParser, XMLBuilder } from 'fast-xml-parser';
import type { StudentModel } from '../../../../bll-service/src';

export class XMLProvider<T> implements IDataProvider<StudentModel> {
  async read(
    filePath: string = './data/students.xml'
  ): Promise<StudentModel[]> {
    try {
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
    } catch (err) {
      return [];
    }
  }

  async write(
    filePath: string = './data/students.xml',
    items: StudentModel[]
  ): Promise<void> {
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

  async create(filePath: string = './data/students.xml'): Promise<void> {
    const builder = new XMLBuilder({ format: true, attributeNamePrefix: '@_' });
    const xml = builder.build({ students: {} });
    await fs.writeFile(filePath, xml, 'utf-8');
  }

  async deleteFile(filePath: string = './data/students.xml'): Promise<void> {
    await fs.unlink(filePath);
  }
}
