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
});
