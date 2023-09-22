type IBook = {
  name: string;
  readonly author: string;
  price: number;
  category: string;
};

type IBookReadOnly = {
  readonly [key in keyof IBook]: IBook[key];
};

const bookOne: IBookReadOnly = {
  name: "Harry Potter",
  author: "J.K Rolling",
  price: 2000,
  category: "Adventure",
};

// bookOne["author"] = "J.K";
// bookOne["price"] = 200;

console.log(bookOne["name"]);
