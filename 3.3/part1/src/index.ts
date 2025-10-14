import { Line } from './line';
import { Serializer } from './serializer';

async function main() {
  const strings = [
    new Line('Hello world'),
    new Line('This is serialization'),
    new Line('waww :D'),
  ];

  strings[0]!.insert('beautiful');
  strings[1]!.replace('serialization', 'example');

  console.log('=== Початкові об’єкти ===');
  strings.forEach((s) => console.log(s.show()));

  const file = new Serializer();

  file.serializeJSON(strings, 'data.json');
  console.log(
    '\nJSON:',
    file.deserializeJSON('data.json').map((s: any) => s.show())
  );

  file.serializeCustom(strings);
  console.log(
    '\nTXT:',
    file.deserializeCustom().map((s: any) => s.show())
  );
}

main();
