interface Car {
  name: string;
  price: number;
}

enum BandVariant {
  Tesla = "Tesla",
  Honda = "Honda",
  Toyota = "Toyota",
}

interface ICarDetails extends Car {
  color: string;
  seat: number;
  door: number;
  //band: "Tesla" | "Honda" | "Toyota";
  band: BandVariant;
}

const car: ICarDetails = {
  name: "Tesla",
  price: 2000,
  color: "Blue",
  door: 4,
  seat: 2,
  band: BandVariant.Tesla,
};

//
interface NoobDeveloper {
  name: string;
}

interface JuniorDeveloper extends NoobDeveloper {
  expertise: string;
  experience: number;
}

enum Level {
  Senior = "Senior",
  Junior = "Junior",
  Mid = "Mid",
}

interface NextLevelDev extends JuniorDeveloper {
  leaderShipExperience: number;
  //level: "Senior" | "Junior" | "Mid";
  level: Level;
}

const developer: NextLevelDev = {
  name: "Fahim",
  leaderShipExperience: 1,
  level: Level.Senior,
  expertise: "Typescript",
  experience: 2,
};

const newDeveloper: NextLevelDev | JuniorDeveloper = {
  name: "Captain",
  expertise: "Python",
  experience: 1,
};

console.log(newDeveloper);

interface IAddTwoNumber {
  (num1: number, num2: number): number;
}

const addTwoNumber: IAddTwoNumber = (x, y) => {
  return x + y;
};

// example with type alias and intersection and union----->
type FlowerType = {
  name: string;
};

type FlowerDetailType = FlowerType & {
  color: string;
  size: string;
};

type UniqueFlower = FlowerDetailType & {
  liveTime: number;
};

const chinaRoseFlower: UniqueFlower = {
  name: "China Rose",
  color: "White",
  size: "2mm",
  liveTime: 5,
};

const newFlower: FlowerDetailType | UniqueFlower = {
  name: "Rose",
  color: "Red",
  size: "1mm",
};
