/* eslint-disable */
type Age = number;
type RGBColor = "Red" | "Green" | "Blue";
type CMYKColor = "Yellow" | "Purple" | "Orange";
type FavoriteColor = RGBColor | CMYKColor;

type Person = {
  name: string;
  age: Age;
  salary: number;
  favoriteColor?: string;
};

const person: Person = {
  name: "Gustavo",
  age: 22,
  salary: 150_000,
};

function setFavoriteColor(person: Person, color: FavoriteColor): Person {
  return { ...person, favoriteColor: color };
}

console.log(setFavoriteColor(person, "Green"))

export {};
