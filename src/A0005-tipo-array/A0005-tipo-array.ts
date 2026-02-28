function multiply(...args: number[]): number {
  return args.reduce((accumulator, current) => accumulator * current, 1);
}

function joinWords(...args: string[]): string {
  return args.join("-");
}

function toUpperCase(...args: string[]): string[] {
  return args.map((current) => current.toUpperCase());
}

const resultMultiply = multiply(4, 4, 2);
const resultJoinWords = joinWords("Hello", "New", "World");
const resultToUpperCase = toUpperCase("a", "b", "c", "d");

console.log(resultMultiply);
console.log(resultJoinWords);
console.log(resultToUpperCase);
