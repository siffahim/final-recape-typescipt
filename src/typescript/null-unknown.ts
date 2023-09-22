const searchText = (value: string | null) => {
  if (value === null) {
    console.log("I have no text");
  } else {
    console.log("Searching...");
  }
};

searchText(null);
searchText("Apple");

const myFavorite = (myGuess: unknown) => {
  console.log(myGuess);
};

myFavorite(20);
myFavorite("Hey");
myFavorite(null);
myFavorite(undefined);
myFavorite(true);
