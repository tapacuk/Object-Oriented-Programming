import { StudentModel, StudentService } from '../src';

describe('StudentService', () => {
  let studentService: StudentService;
  let mockContext: any;

  beforeEach(() => {
    mockContext = {
      readAll: jest.fn().mockResolvedValue([]),
      saveAll: jest.fn().mockResolvedValue(undefined),
    };
    studentService = new StudentService(mockContext);
  });

  test('should initialize with students from context', async () => {
    const mockStudents = [
      {
        studentId: '174564',
        firstName: 'Anna',
        lastName: 'Ivanova',
        gender: 'female',
        course: 5,
        city: 'Kyiv',
        recordBookNumber: 'RB12345',
      },
      {
        studentId: '2',
        firstName: 'Petro',
        lastName: 'Petrenko',
        gender: 'male',
        course: 4,
        city: 'Lviv',
        recordBookNumber: 'RB67890',
      },
    ];
    mockContext.readAll.mockResolvedValue(mockStudents);
    await studentService.initialize();
    expect(studentService.getAllStudents()).toEqual(mockStudents);
  });

  test('should add a student', () => {
    const newStudent = {
      studentId: '13345363',
      firstName: 'Olena',
      lastName: 'Shevchenko',
      gender: 'female',
      course: 3,
      city: 'Odesa',
      recordBookNumber: 'RB11223',
    };
    studentService.addStudent(newStudent as StudentModel);
    expect(studentService.getAllStudents()).toContain(newStudent);
  });

  test('should throw error when adding student with missing names', () => {
    const invalidStudent = {
      studentId: '14745634',
      firstName: '',
      lastName: '',
      gender: 'male',
      course: 2,
      city: 'Kharkiv',
      recordBookNumber: 'RB33445',
    };
    expect(() =>
      studentService.addStudent(invalidStudent as StudentModel)
    ).toThrow(
      "Некоректні дані студента: Ім'я та Прізвище є обов'язковими полями"
    );
  });

  test('should remove a student by ID', () => {
    const student = {
      studentId: '15653467',
      firstName: 'Ivan',
      lastName: 'Kovalenko',
      gender: 'male',
      course: 1,
      city: 'Dnipro',
      recordBookNumber: 'RB55667',
    };
    studentService.addStudent(student as StudentModel);
    studentService.removeStudent(student.studentId);
    expect(studentService.getAllStudents()).not.toContain(student);
  });

  test('should throw error when removing non-existent student', () => {
    expect(() => studentService.removeStudent('999')).toThrow(
      `Студента з ID 999 не знайдено.`
    );
  });

  test('should count female students in Kyiv on 5th course', () => {
    const students = [
      {
        studentId: '16732127',
        firstName: 'Maria',
        lastName: 'Bondarenko',
        gender: 'female',
        course: 5,
        city: 'Kyiv',
        recordBookNumber: 'RB77889',
      },
      {
        studentId: '17235435',
        firstName: 'Sofia',
        lastName: 'Melnik',
        gender: 'female',
        course: 5,
        city: 'kyiv',
        recordBookNumber: 'RB99000',
      },
      {
        studentId: '18974564',
        firstName: 'Olga',
        lastName: 'Kravchuk',
        gender: 'female',
        course: 4,
        city: 'Kyiv',
        recordBookNumber: 'RB11122',
      },
    ];
    students.forEach((s) => studentService.addStudent(s as StudentModel));
    const count = studentService.countFemaleStudentsInKyivOn5thCourse();
    expect(count).toBe(2);
  });

  test('should save changes to context', async () => {
    const student = {
      studentId: '1965635463',
      firstName: 'Dmytro',
      lastName: 'Shevchenko',
      gender: 'male',
      course: 2,
      city: 'Zaporizhia',
      recordBookNumber: 'RB434525',
    };
    studentService.addStudent(student as StudentModel);
    await studentService.saveChanges();
    expect(mockContext.saveAll).toHaveBeenCalledWith(
      studentService.getAllStudents()
    );
  });

  test('should update city when assigning hostel', () => {
    const student = {
      studentId: '10534734',
      firstName: 'Kateryna',
      lastName: 'Lysenko',
      gender: 'female',
      course: 3,
      city: 'Lviv',
      recordBookNumber: 'RB66778',
    };
    studentService.addStudent(student as StudentModel);
    studentService.hostel(student.studentId);
    const updatedStudent = studentService
      .getAllStudents()
      .find((s) => s.studentId === student.studentId);
    expect(updatedStudent?.city).toBe('Kyiv (In hostel)');
  });

  test('should throw error when assigning hostel to non-existent student', () => {
    expect(() => studentService.hostel('888')).toThrow(
      `Студента з ID 888 не знайдено.`
    );
  });

  test('should throw error when adding student with duplicate ID', () => {
    const student = {
      studentId: '1',
      firstName: 'Oleh',
      lastName: 'Zhuk',
      gender: 'male',
      course: 2,
      city: 'Kyiv',
      recordBookNumber: 'RB00001',
    };
    studentService.addStudent(student as StudentModel);
    expect(() => studentService.addStudent(student as StudentModel)).toThrow(
      `Студент з ID ${student.studentId} вже існує.`
    );
  });

  test('should set default city and recordBookNumber when missing', () => {
    const student = {
      studentId: '2',
      firstName: 'Nazar',
      lastName: 'Tkachenko',
      gender: 'male',
      course: 3,
      city: '',
      recordBookNumber: '',
    };
    studentService.addStudent(student as StudentModel);
    const added = studentService
      .getAllStudents()
      .find((s) => s.studentId === '2');
    expect(added?.city).toBe('Unknown');
    expect(added?.recordBookNumber).toBe('N/A');
  });

  test('should throw error for invalid course value', () => {
    const student = {
      studentId: '3',
      firstName: 'Andrii',
      lastName: 'Melnyk',
      gender: 'male',
      course: 7,
      city: 'Kyiv',
      recordBookNumber: 'RB123',
    };
    expect(() => studentService.addStudent(student as StudentModel)).toThrow(
      'Некоректний курс студента: Допустимі значення: 1-6.'
    );
  });

  test('should throw error for invalid gender value', () => {
    const student = {
      studentId: '4',
      firstName: 'Tanya',
      lastName: 'Koval',
      gender: 'other',
      course: 2,
      city: 'Kyiv',
      recordBookNumber: 'RB456',
    } as unknown as StudentModel;
    expect(() => studentService.addStudent(student)).toThrow(
      "Некоректна стать студента: Допустимі значення: 'male', 'female '"
    );
  });

  test('should add "(In hostel)" to Kyiv city only once', () => {
    const student = {
      studentId: '5',
      firstName: 'Sergiy',
      lastName: 'Bondar',
      gender: 'male',
      course: 4,
      city: 'Kyiv',
      recordBookNumber: 'RB789',
    };
    studentService.addStudent(student as StudentModel);
    studentService.hostel('5');
    studentService.hostel('5'); // друга спроба — "(In hostel)" вже є
    const updated = studentService
      .getAllStudents()
      .find((s) => s.studentId === '5');
    expect(updated?.city).toBe('Kyiv (In hostel)');
  });

  test('should return students matching predicate', () => {
    const students = [
      {
        studentId: 'a1',
        firstName: 'A',
        lastName: 'A',
        gender: 'male',
        course: 3,
        city: 'Lviv',
        recordBookNumber: 'R1',
      },
      {
        studentId: 'a2',
        firstName: 'B',
        lastName: 'B',
        gender: 'female',
        course: 3,
        city: 'Kyiv',
        recordBookNumber: 'R2',
      },
      {
        studentId: 'a3',
        firstName: 'C',
        lastName: 'C',
        gender: 'male',
        course: 2,
        city: 'Odesa',
        recordBookNumber: 'R3',
      },
    ];
    students.forEach((s) => studentService.addStudent(s as StudentModel));

    const res = studentService.findStudentsByCondition((s) => s.course === 3);
    expect(res).toHaveLength(2);
    expect(res.map((r) => r.studentId).sort()).toEqual(['a1', 'a2'].sort());
  });
});
