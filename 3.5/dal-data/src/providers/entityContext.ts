import type { IDataProvider } from './dataProvider.interface';

export class EntityContext<T> {
  constructor(
    private provider: IDataProvider<T>,
    private filePath: string
  ) {}

  async readAll(): Promise<T[]> {
    return this.provider.read(this.filePath);
  }

  async saveAll(items: T[]): Promise<void> {
    await this.provider.write(this.filePath, items);
  }

  async createFile(): Promise<void> {
    await this.provider.create(this.filePath);
  }

  async deleteFile(): Promise<void> {
    await this.provider.deleteFile(this.filePath);
  }
}
