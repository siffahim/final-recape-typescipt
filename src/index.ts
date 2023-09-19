/* there has two type work behind the typescript- one> explicit, two> implicit */

//interface, tuples, enum, type

//variable
const username: string = "Berlin";
const age: number = 205;
const isMarried: boolean = true;
const mobileName: null = null;

//array

//multiple value defined on this array
const flowersName: (string | number | boolean)[] = [
  "Rose",
  "China Rose",
  "Tulip",
  400,
  true,
];

const carsName: string[] = ["Honda", "Toyota", "Tesla"];
const carsPrice: number[] = [400, 500, 800];
const carsSeal: boolean[] = [true, false];

const studentRolls: Array<number> = [20, 24, 23, 4, 5, 6];
const studentNames: Array<string> = ["kate", "Berlin", "Tokyo"];
const isStudents: Array<boolean> = [true, false, true];

//tuples

//it's specific structure
const user: [number, string] = [101, "Alison"];
let person: [string, number, boolean] = ["Parker", 22, true];

const userName: string = person[0];
const userAge: number = person[1];
const userIsMarried: boolean = person[2];

const [personName, personAge, personIsMarried] = person;

console.log(personName, personAge, personIsMarried);

const couple: [string, string] = ["Alison", "Parker"];

//object

const student: { name: string; age: number; isMarried: boolean } = {
  name: "Fahim",
  age: 25,
  isMarried: false,
};

const cars: { name: string; price: number } = {
  name: "Tesla",
  price: 5000,
};

const flowers: { name: "China Rose" | "Rose"; price: number } = {
  name: "Rose",
  price: 500,
};

let statusApi: "success" | "error" | "pending";

statusApi = "pending";

const mobile: {
  name: "Samsung" | "Vivo" | "Iphone";
  price: number;
  color: "Pink" | "Silver" | "Blue";
  region?: "BD";
} = {
  name: "Iphone",
  price: 20000,
  color: "Silver",
  region: "BD",
};

//function

const getTotalPrice = (num1: number, num2: number): number => {
  return num1 + num2;
};

getTotalPrice(10, 15);

//
const squareNumber = (values: number[]): number[] => {
  return values.map((value: number) => value * value);
};

const numberArray = [2, 4, 8, 6];

squareNumber(numberArray);

//
const bank: {
  name: string;
  balance: number;
  getBalance(money: number): any;
} = {
  name: "Fahim",
  balance: 100,
  getBalance(money) {
    console.log(
      `Dear ${this.name} sir! your new balance is ${this.balance + money}`
    );
  },
};

bank.getBalance(5);

const book: {
  name: string;
  author: string;
  publish: number;
  getAuthorName(): void;
} = {
  name: "Harry Potter",
  author: "J.K Rolling",
  publish: 2021,
  getAuthorName() {
    console.log(`Author name ${this.author}`);
  },
};

book.getAuthorName();
