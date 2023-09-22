//one
type TypeA = boolean;
type TypeB = TypeA extends boolean ? boolean : null;

//two
type TypeX = boolean;
type TypeZ = string;
type TypeW = TypeX extends string
  ? string
  : TypeZ extends number
  ? number
  : null;

//keyof
interface IMovieK {
  name: string;
  duration: number;
  category: string;
}

const movieThree: IMovieK = {
  name: "Mavka",
  duration: 145,
  category: "Sci-pi",
};

type MoviePropertyType = keyof IMovieK;

const myText: MoviePropertyType = "category";
