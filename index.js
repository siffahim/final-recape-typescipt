class StudentInfo {
  name;
  age;
  balance;
  constructor(name, age, balance) {
    this.name = name;
    this.age = age;
    this.balance = balance;
  }
}

class Student extends StudentInfo {
  constructor(name, age, balance) {
    super(name, age, balance);
  }
  getStudentBalance() {
    console.log(`${this.name} will give ${this.balance}`);
  }
}

const studentOne = new Student("Fahim", 20, 100);
const studentTwo = new Student("Kate Winslate", 25, 200);

console.log(studentOne, studentTwo);
studentOne.getStudentBalance();
studentTwo.getStudentBalance();

const variable = 20;

console.log(typeof variable);
