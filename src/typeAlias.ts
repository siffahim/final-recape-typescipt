//variable
type TypeUsername = string;
type TypeUserAge = number;
type TypeUserIsMarried = boolean;

const userName1: TypeUsername = "Kate W";
const userAge1: TypeUserAge = 52;
const userMarried: TypeUserIsMarried = true;

//array
type TypeUserNames = number[];
const userNames: TypeUserNames = [50, 30];

//object
type TypeStudent = {
  name: string;
  age: number;
};

const studentOne: TypeStudent = {
  name: "Fahim",
  age: 25,
};

type TypeCar = {
  name: string;
  model: "x" | "z";
  color: string;
  price: number;
  band?: boolean;
};

const carOne: TypeCar = {
  name: "Tesla",
  model: "x",
  color: "Purple",
  price: 2000,
};

//function

type OperationType = (numberOne: number, numberTwo: number) => number;

const calculate = (nam1: number, nam2: number, operation: OperationType) => {
  operation(nam1, nam2);
};

calculate(10, 20, (x, y) => x + y);

type getNameType = (value: string) => string;

const getUserName: getNameType = (value) => {
  return value;
};

console.log(getUserName("Fahim"));

//--------------

type GreetingType = (name: string, message: string) => string;

const greeting = (
  name: string,
  message: string,
  greetingMessage: GreetingType
) => {
  return greetingMessage(name, message);
};

greeting("Emma", "Welcome", (x, y) => x + " " + y);

//---------------
type GreetType = (message?: string) => string;

const greet: GreetType = (value = "Please write a message") => {
  return value;
};

console.log(greet());
