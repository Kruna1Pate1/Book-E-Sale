import { Role } from '../utils/Enum';

export class UserModel {
  userId?: number;
  name!: Name;
  email!: string;
  role!: Role;
  jwtToken!: string;
}

export type Name = {
  firstName: string;
  lastName: string;
};
