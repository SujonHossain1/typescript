class Student {
  name: string;
  department: string;
  subject: string;

  constructor(name: string, department: string, subject: string) {
    this.name = name;
    this.department = department;
    this.subject = subject;
  }

  studyTime(hours: number) {
    console.log(`${this.name} study ${this.subject} for ${hours} hours`);
  }
}

class Teacher {
  name: string;
  department: string;
  subject: string;
  designation: string;

  constructor(
    name: string,
    department: string,
    subject: string,
    designation: string
  ) {
    this.name = name;
    this.department = department;
    this.subject = subject;
    this.designation = designation;
  }

  studyTime(hours: number) {
    console.log(`${this.name} study ${this.subject} for ${hours} hours`);
  }

  takeClasses(classNumbers: number) {
    console.log(`${this.name} takes ${classNumbers} classes`);
  }
}

const student = new Student('John', 'Computer Science', 'Programming');
const teacher = new Teacher(
  'Jane',
  'Computer Science',
  'Programming',
  'Professor'
);

teacher.studyTime(4);
student.studyTime(4);

/*** Inheritance */

class NewTeacher extends Student {
  designation: string;

  constructor(
    name: string,
    department: string,
    subject: string,
    designation: string
  ) {
    super(name, department, subject);
    this.designation = designation;
  }

  takeClasses(classNumbers: number) {
    console.log(`${this.name} takes ${classNumbers} classes`);
  }
}
