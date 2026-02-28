function noReturn(...args: string[]): void {
  console.log(args.join(" "));
}

noReturn("Gustavo", "Mateus", "João", "Diego");

const user = {
  name: "Luiz",
  lastname: "Carlos",

  displayName(): void {
    console.log(this.name + " " + this.lastname);
  },
};

user.displayName();
