const objectA: {
  readonly valueA: string;
  valueB: string;
} = {
  valueA: "A",
  valueB: "B",
};

objectA.valueB = "C";
console.log(objectA);
