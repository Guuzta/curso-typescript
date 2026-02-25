/* eslint-disable */
export {};

//Tipos básicos (aqui ocorre inferência de tipos)
let name: string = "Gustavo";
let age: number = 22;
let isActive: boolean = true;
let hash: symbol = Symbol("any-symbol");

//Arrays
let numberArray: Array<number> = [1, 2, 3, 4, 5];
let numberArray2: number[] = [1, 2, 3, 4, 5];

let stringArray: Array<string> = ["a", "b", "c", "d"];
let stringArray2: string[] = ["a", "b", "c", "d"];

//Objetos
let user: { name: string; age: number; isAvailable?: boolean } = {
  name: "Eduardo",
  age: 13,
};

//Funções
function sum(x: number, y: number) {
  return x + y;
}

const subtraction: (x: number, y: number) => number = (x, y) => x - y;
