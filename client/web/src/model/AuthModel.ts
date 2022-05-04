import { Name } from './UserModel';
import { Role } from '../utils/Enum';

export class LoginModel {
  email!: string;
  password!: string;

  constructor() {
    this.email = '';
    this.password = '';
  }
}

export class RegisterModel {
  name!: Name;
  email!: string;
  role!: Role;
  password!: string;
  confirmPassword?: string;

  constructor() {
    this.name = {
      firstName: '',
      lastName: ''
    };
    this.email = '';
    this.role = Role.Buyer;
    this.password = '';
    this.confirmPassword = '';
  }
}
