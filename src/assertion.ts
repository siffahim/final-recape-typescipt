const thinkSomething: unknown = "48.5458";
console.log((thinkSomething as string).length);

const myLuckyNum = (num: string | number): string | number | undefined => {
  if (typeof num === "string") {
    return "I have an string";
  } else if (typeof num === "number") {
    return num;
  }
};

console.log(myLuckyNum(""));
console.log(myLuckyNum(20));

//without undefined
const testing = (num: string | number): string | number => {
  if (typeof num === "string") {
    return "";
  }
  return num;
};

const petName: unknown = "Bungee";

console.log((petName as string).length);
