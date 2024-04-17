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

// Examples:
const B = document.querySelector('body');
// task 1:
const SECTION_T1 = document.createElement('SECTION');
const H2_T1 = document.createElement('H2');
H2_T1.innerText = 'Task 1';
SECTION_T1.appendChild(H2_T1);
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};
console.log('Task 1:', teacher3);
const P_T1 = document.createElement('P');
P_T1.innerHTML = JSON.stringify(teacher3, null, 2);
SECTION_T1.appendChild(P_T1);
B.appendChild(SECTION_T1);


