/* eslint-disable */

let x = 10;
x = 300;

const y = 20;
const a = 100;

const person = {
  name: "Gustavo" as const,
  lastname: "Bodziak",
};

function pickColor(color: "yellow" | "blue" | "green"): string {
  return `Your color is ${color}!`;
}

console.log(pickColor("blue"));

export {};
