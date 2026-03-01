//Tuple
const clientData: readonly [number, string] = [100, "Gustavo"];
const clientData2: [number, string, boolean?] = [100, "Gustavo"];
const clientData3: [number, string, ...string[]] = [100, "Gustavo", "Bodziak"];

console.log(clientData);
console.log(clientData2);
console.log(clientData3);

//readonly
const array1: readonly string[] = ["JavaScript", "Python", "C++", "Dart"];
const array2: ReadonlyArray<string> = ["Banana", "Maçã", "Laranja", "Uva"];

console.log(array1);
console.log(array2);
