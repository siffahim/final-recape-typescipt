const message = (message: string = "Welcome"): string => {
  return message;
};

const arrOne: number[] = [1, 2, 3, 4];
const arrTwo: number[] = [20, 3];

arrTwo.push(...arrOne);

const flower = (...value: number[]) => {
  console.log(value);
};

const arrThree: number[] = [20, 3];

flower(5, 8, 2, 2, 2, 5, 6);

type MobilePriceType = (price?: number) => number;

const cheapestMobile: MobilePriceType = (price = 20000) => {
  return price;
};

console.log(cheapestMobile());
