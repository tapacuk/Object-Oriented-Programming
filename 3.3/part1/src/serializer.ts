import { Line } from './line';
import fs from 'fs';

const { XMLParser, XMLBuilder, XMLValidator } = require('fast-xml-parser');

export class Serializer {
  serializeJSON = (data: Line[], file: string = 'data.json') => {
    fs.writeFileSync(file, JSON.stringify(data, null, 2));
  };

  deserializeJSON = (file: string = 'data.json') => {
    const content = JSON.parse(fs.readFileSync(file, 'utf-8'));
    return content.map((obj: any) => new Line(obj.value));
  };

  serializeXML = (data: Line[], file: string = 'data.xml') => {
    const builder = new XMLBuilder({ format: true });
    const obj = {
      strings: {
        item: data.map((d) => ({ value: d.value })),
      },
    };

    const xml = builder.build(obj);
    fs.writeFileSync(file, xml, 'utf8');
  };

  deserializeXML = (file: string = 'data.xml'): Line[] => {
    const parser = new XMLParser();
    const result = parser.parse(fs.readFileSync(file, 'utf8'));

    let items: any[] = [];
    if (result?.strings?.item) {
      items = Array.isArray(result.strings.item)
        ? result.strings.item
        : [result.strings.item];
    }

    return items.map((obj) => new Line(obj.value));
  };

  serializeBinary = (data: Line[], file: string = 'data.bin') => {
    const buffer = Buffer.from(JSON.stringify(data), 'utf8');
    fs.writeFileSync(file, buffer);
  };

  deserializeBinary = (file: string = 'data.bin') => {
    const buffer = fs.readFileSync(file);
    const arr: any[] = JSON.parse(buffer.toString('utf8'));

    return arr.map((obj) => new Line(obj.value));
  };

  serializeCustom = (data: Line[], file: string = 'data.txt') => {
    fs.writeFileSync(
      file,
      data.map((d) => `${d.value}|${d.length}`).join('\n')
    );
  };

  deserializeCustom = (file: string = 'data.txt') => {
    const content = fs.readFileSync(file, 'utf8');
    const lines = content
      .split('\n')
      .map((line) => line.trim())
      .filter((l) => l.length > 0);

    return lines.map((l) => {
      const [text] = l.split('|');
      return new Line(text!);
    });
  };
}
