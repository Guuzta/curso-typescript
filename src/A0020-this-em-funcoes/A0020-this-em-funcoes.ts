function test(this: Date, name: string, age: number): void {
  console.log(this);
  console.log(name, age);
}

test.call(new Date(), "Gustavo", 22);
test.apply(new Date(), ["Eduardo", 25]);
