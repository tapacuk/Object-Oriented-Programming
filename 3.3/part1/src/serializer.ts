import { Line } from './line';
import fs from 'fs';
// import { XMLParser, XMLBuilder } from 'fast-xml-parser';

export class Serializer {
  serializeJSON = (data: Line[], file: string = 'data.json') => {
    fs.writeFileSync(file, JSON.stringify(data, null, 2));
  };

  deserializeJSON = (file: string = 'data.json') => {
    const arr = JSON.parse(fs.readFileSync(file, 'utf-8'));
    return arr.map((obj: any) => new Line(obj.value));
  };

  //   serializeXML = (data: Line[], file: string = 'data.xml') => {
  //     const builder = new XMLBuilder({ format: true });
  //     fs.writeFileSync(file, builder.build({ strings: { item: data } }));
  //   };

  //   deserializeXML = (file: string = 'data.xml'): Promise<Line[]> => {
  //     const parser = new XMLParser();
  //     const result = parser.parse(fs.readFileSync(file, 'utf8'));

  //     const items = result?.strings?.item ?? [];

  //     return items.map((obj: any) => new Line(obj.value));
  //   };

  serializeCustom = (data: Line[], file: string = 'data.txt') => {
    fs.writeFileSync(
      file,
      data.map((d) => `${d.value}|${d.length}`).join('\n')
    );
  };

  deserializeCustom = (file: string = 'data.txt') => {
    const reader = fs.readFileSync(file, 'utf-8').split('/n');

    return reader.map((l) => {
      return new Line(l);
    });
  };
}
