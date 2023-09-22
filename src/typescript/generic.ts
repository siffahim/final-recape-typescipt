type ArrayType<T> = Array<T>;

const flowerNames: ArrayType<string> = ["China", "Rose", "China Rose"];
const flowerPrice: ArrayType<number> = [20, 30, 5, 0];
const flowerIsDry: ArrayType<boolean> = [true, false, true];

//generic tuples
type HeroType<T1, T2> = [T1, T2];

const heroOne: HeroType<string, string> = ["Bin", "5484"];
const heroTwo: HeroType<number, string> = [45, "5484"];
const heroThree: HeroType<number, boolean> = [2, true];

//generic function
const company = <T, U>(name: T, revenue: U): T => {
  console.log(`Company name ${name} and this revenue ${revenue}$`);
  return name;
};

company("bdCalling", 200);
company(420, "Hey");

const friendName = <T>(name: T): T => {
  return name;
};

console.log(friendName("Kate"));

//generic interface
interface IMovie<T, U = null> {
  name: string;
  duration: T;
  category?: U;
}

const movie: IMovie<number, string> = {
  name: "Avatar",
  duration: 204,
  category: "Thrill",
};

console.log(movie);

interface IDynamo<T, X, Z> {
  friendOne: T;
  friendTwo: X;
  friendThree: Z;
}

type MovieType<T> = {
  name: string;
  country: T;
};

const movieTwo: MovieType<string> = {
  name: "Oscar",
  country: "England",
};
