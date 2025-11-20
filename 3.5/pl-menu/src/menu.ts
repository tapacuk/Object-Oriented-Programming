import readline from 'readline';
import { StudentModel, StudentService } from '../../bll-service/src';
import { EntityContext } from '../../dal-data/src/providers/entityContext.ts';
import { JSONProvider } from '../../dal-data/src/providers/serializers/jsonSerializer.ts';
import type { IDataProvider } from '../../dal-data/src/providers/dataProvider.interface.ts';
import { XMLProvider } from '../../dal-data/src/providers/serializers/xmlSerializer.ts';
import { BinaryProvider } from '../../dal-data/src/providers/serializers/binarySerializer.ts';
import { CustomProvider } from '../../dal-data/src/providers/serializers/customSerializer.ts';

export class Menu {
  private rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  private service!: StudentService;

  constructor() {}

  async start(): Promise<void> {
    const { provider, filePath } = await this.chooseProvider();

    const context = new EntityContext<StudentModel>(provider, filePath);
    this.service = new StudentService(context);

    await this.service.initialize();
    this.mainMenu();
  }

  private async chooseProvider(): Promise<{
    provider: IDataProvider<StudentModel>;
    filePath: string;
  }> {
    const choice = (
      await this.ask('Введіть спосіб серіалізації (json, xml, bin, txt): ')
    ).toLowerCase();

    switch (choice) {
      case 'xml':
        return {
          provider: new XMLProvider<StudentModel>(),
          filePath: './data/students.xml',
        };
      case 'bin':
        return {
          provider: new BinaryProvider<StudentModel>(),
          filePath: './data/students.bin',
        };
      case 'txt':
        return {
          provider: new CustomProvider<StudentModel>(),
          filePath: './data/students.txt',
        };
      case 'json':
      default:
        return {
          provider: new JSONProvider<StudentModel>(),
          filePath: './data/students.json',
        };
    }
  }

  private mainMenu(): void {
    console.log('\n=== Меню студентів ===');
    console.log('1. Додати студента');
    console.log('2. Видалити студента');
    console.log('3. Показати всіх студентів');
    console.log('4. Порахувати студенток 5 курсу з Києва');
    console.log('0. Вихід');

    this.rl.question('Оберіть дію: ', async (choice) => {
      switch (choice) {
        case '1':
          await this.addStudent();
          break;
        case '2':
          await this.removeStudent();
          break;
        case '3':
          this.showAllStudents();
          break;
        case '4':
          this.countKyivGirls();
          break;
        case '5':
          this.addToHostel();
          break;
        case '0':
          console.log('Завершення роботи...');
          this.rl.close();
          return;
        default:
          console.log('Невірний вибір.');
      }
      this.mainMenu();
    });
  }

  private async addStudent(): Promise<void> {
    const entity = new StudentModel(
      await this.ask('Прізвище: '),
      await this.ask("Ім'я: "),
      Number(await this.ask('Курс: ')),
      await this.ask('ID студента: '),
      (await this.ask('Стать (male/female): ')) as 'male' | 'female',
      await this.ask('Місто проживання: '),
      await this.ask('№ залікової книжки: ')
    );

    this.service.addStudent(entity);
    await this.service.saveChanges();
    console.log('Студента додано');
  }

  private async removeStudent(): Promise<void> {
    const id = await this.ask('Введіть ID студента для видалення: ');
    try {
      this.service.removeStudent(id);
      await this.service.saveChanges();
      console.log('Студента видалено');
    } catch (error: any) {
      console.error('Помилка:', error.message);
    }
  }

  private async addToHostel(): Promise<void> {
    const id = await this.ask('Введіть ID студента для переселення: ');
    this.service.hostel(id);
    await this.service.saveChanges();
    console.log('Студента переселено');
  }

  private showAllStudents(): void {
    const all = this.service.getAllStudents();
    if (all.length === 0) console.log('Список порожній.');
    else
      all.forEach((s) =>
        console.log(
          `${s.lastName} ${s.firstName} — ${s.course} курс, ${s.city}, ${s.gender}`
        )
      );
  }

  private countKyivGirls(): void {
    const count = this.service.countFemaleStudentsInKyivOn5thCourse();
    console.log(`Студенток 5-го курсу з Києва: ${count}`);
  }

  private ask(question: string): Promise<string> {
    return new Promise((resolve) => this.rl.question(question, resolve));
  }
}
