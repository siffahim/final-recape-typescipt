const getUserInfo = <T extends { name: string; age: number }>(user: T): T => {
  return user;
};

const userInfo = {
  name: "fahim",
  age: 20,
  isMarried: true,
  height: 2,
  weight: 62,
};
console.log(getUserInfo(userInfo));

const getCarTier = <T extends { model: string }>(carInfo: T): T => {
  return carInfo;
};

const carInfo = {
  name: "Tesla",
  price: 20000,
  model: "xzy",
};

console.log(getCarTier(carInfo));
