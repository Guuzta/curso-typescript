let x;
if (typeof x === "undefined") x = 20;
console.log(x * 10);

function createPerson(
  firstName: string,
  lastName?: string,
): {
  firstName: string;
  lastName?: string;
} {
  return {
    firstName,
    lastName,
  };
}

const person = createPerson("Gustavo", "Bodziak");
console.log(person);

function squareOf(x: any) {
  if (typeof x === "number") return x * x;
  return null;
}

const squareOfTwo = squareOf(2);

if (squareOfTwo === null) {
  console.log("Operação inválida");
} else {
  console.log("Resultado: " + squareOfTwo);
}
