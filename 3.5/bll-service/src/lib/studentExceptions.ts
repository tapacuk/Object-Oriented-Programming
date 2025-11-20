export class StudentNotFoundException extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'StudentNotFoundException';
  }
}

export class InvalidStudentDataException extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'InvalidStudentDataException';
  }
}
