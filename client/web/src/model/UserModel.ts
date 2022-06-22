import RoleModel from './RoleModel';

export class UserModel {
  userId!: number;
  name!: Name;
  email!: string;
  role!: RoleModel;
  jwtToken!: string;
}

export type Name = {
  firstName: string;
  lastName: string;
};
