class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const p1 = new Person("Fahim", 22);

//inheritance
class PersonTwo {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class PersonThree extends PersonTwo {
  salary: number;
  designation: string;
  constructor(name: string, age: number, salary: number, designation: string) {
    super(name, age);
    this.salary = salary;
    this.designation = designation;
  }
  getSalary() {
    console.log(`You salary ${this.salary}`);
  }
}
const p2 = new PersonThree("Kate", 24, 1000, "actor");

console.log(p2);

//second example
class Car {
  name: string;
  model: string;

  constructor(name: string, model: string) {
    this.name = name;
    this.model = model;
  }
}

class CarDetails extends Car {
  seat: number;
  color: string;
  door: number;
  gearType: string;
  constructor(
    name: string,
    model: string,
    seat: number,
    color: string,
    door: number,
    gearType: string
  ) {
    super(name, model);
    this.seat = seat;
    this.color = color;
    this.door = door;
    this.gearType = gearType;
  }
}

const c1 = new CarDetails("Tesla", "xy-carbon", 4, "Black", 2, "Auto");

console.log(c1);
