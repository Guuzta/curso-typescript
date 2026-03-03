/* eslint-disable */
type HasName = { name: string };
type HasLastName = { lastname: string };
type HasAge = { age: number };
type Person = HasName & HasLastName & HasAge;

type AB = "A" | "B";
type AC = "A" | "C";
type AD = "A" | "D";
type Intersection = AB & AC & AD;

const person: Person = {
  name: "Gustavo",
  lastname: "Bodziak",
  age: 22,
};

console.log(person);

export {};
