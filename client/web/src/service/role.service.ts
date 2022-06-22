import BaseList from '../model/BaseList';
import RoleModel from '../model/RoleModel';
import { request } from '.';

class RoleService {
  ENDPOINT = 'role';

  public async getAll(): Promise<BaseList<RoleModel[]>> {
    const url = `${this.ENDPOINT}`;

    return request.get<BaseList<RoleModel[]>>(url).then((res) => {
      return res.data;
    });
  }

  public async getById(id: number): Promise<RoleModel> {
    const url = `${this.ENDPOINT}/${id}`;

    return request.get<RoleModel>(url).then((res) => {
      return res.data;
    });
  }
}

export default new RoleService();
