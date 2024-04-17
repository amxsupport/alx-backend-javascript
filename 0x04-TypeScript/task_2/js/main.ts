// Create the DirectorInterface interface with the 3 expected methods:
// workFromHome() returning a string
// getCoffeeBreak() returning a string
// workDirectorTasks() returning a string
interface DirectorInterface {
  workFromHome: () => string;
  getCoffeeBreak: () => string;
  workDirectorTasks: () => string;
}

// Create the TeacherInterface interface with the 3 expected methods:
// workFromHome() returning a string
// getCoffeeBreak() returning a string
// workTeacherTasks() returning a string
interface TeacherInterface {
  workFromHome: () => string;
  getCoffeeBreak: () => string;
  workTeacherTasks: () => string;
}

// Create a class Director that will implement DirectorInterface
// workFromHome should return the string Working from home
// getToWork should return the string Getting a coffee break
// workDirectorTasks should return the string Getting to director tasks
class Director implements DirectorInterface {
  workFromHome = () => 'Working from home';
  getCoffeeBreak = () => 'Getting a coffee break';
  workDirectorTasks = () => 'Getting to director tasks';
}

// Create a class Teacher that will implement TeacherInterface
// workFromHome should return the string Cannot work from home
// getCoffeeBreak should return the string Cannot have a break
// workTeacherTasks should return the string Getting to work
class Teacher implements TeacherInterface {
  workFromHome = () => 'Cannot from home';
  getCoffeeBreak = () => 'Cannot have a break';
  workTeacherTasks = () => 'Getting to work';
}

// Create a function createEmployee with the following requirements:
// It can return either a Director or a Teacher instance
// It accepts 1 arguments:
// salary(either number or string)
// if salary is a number and less than 500 - It should return a new Teacher. Otherwise it should return a Director
function createEmployee(salary: number | string): Teacher | Director {
  return isNaN(Number(salary)) && salary > 500 ? new Director() : new Teacher();
}


