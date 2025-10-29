import type { IPhoto } from './iPhoto.interface';
import { StudentEntity } from './studentEntity.class';

export class Joiner extends StudentEntity implements IPhoto {
  photo(): string {
    return `${this.firstName} ${this.lastName} зробив фотографію на телефон`;
  }
}
