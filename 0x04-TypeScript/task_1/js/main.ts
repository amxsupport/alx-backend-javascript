interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [x: string]: any;
}

// solution for task 2
interface Directors extends Teacher {
  numberOfReports: number;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// solution for task 3
interface IStudentClassProps {
  firstName: string;
  lastName: string;
}

interface IStudent {
  displayName: string;
  workOnHomework: () => string;
}

class StudentClass implements IStudent {
  displayName: string;

  constructor(props: IStudentClassProps) {
    this.displayName = props.firstName;
  }

  workOnHomework() {
    return 'Currently working';
  }
}

const printTeacher: printTeacherFunction = (
  firstName: string,
  lastName: string
) => `${firstName.substring(0, 1)}. ${lastName}`;


