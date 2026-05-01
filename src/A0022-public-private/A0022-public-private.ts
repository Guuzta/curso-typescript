export class Company {
  public readonly name: string;
  private readonly employers: Employers[] = [];
  protected readonly cnpj: string;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }

  addEmployer(employer: Employers): void {
    this.employers.push(employer);
  }

  showEmployers(): void {
    for (const employer of this.employers) {
      console.log(employer.name + " " + employer.lastName);
    }
  }
}

export class Employers {
  constructor(
    public readonly name: string,
    public readonly lastName: string,
  ) {}
}

const company = new Company("PkNet", "11111");
const employer1 = new Employers("Gustavo", "Bodziak");
const employer2 = new Employers("João", "Antunes");
const employer3 = new Employers("Vitor", "Pires");
company.addEmployer(employer1);
company.addEmployer(employer2);
company.addEmployer(employer3);
company.showEmployers();
