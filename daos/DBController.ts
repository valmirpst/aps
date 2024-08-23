class Person {
  name: string;
  phoneNumber: string;
  emailAddress: string;
  constructor(name: string, phoneNumber: string, emailAddress: string) {
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.emailAddress = emailAddress;
  }
}

class PF extends Person {
  cpf: string;
  constructor(
    name: string,
    phoneNumber: string,
    emailAddress: string,
    cpf: string
  ) {
    super(name, phoneNumber, emailAddress);
    this.cpf = cpf;
  }
}
