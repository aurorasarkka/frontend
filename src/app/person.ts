export class Person {

  firstName:string;
  lastName: string;
  id: string | undefined;
  email: string | undefined;
  userName: string | undefined;
  password: string | undefined
  password2: string | undefined

  constructor() {
    this.firstName = '';
    this.lastName = '';
  }
}
