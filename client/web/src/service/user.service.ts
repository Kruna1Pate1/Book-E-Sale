import BaseList from '../model/BaseList';
import { UserModel } from '../model/UserModel';
import { request } from '.';

class UserService {
  ENDPOINT = '/user';

  public async getAll(): Promise<BaseList<UserModel[]>> {
    const url = `${this.ENDPOINT}`;

    return request.get<BaseList<UserModel[]>>(url).then((res) => {
      return res.data;
    });
  }

  public async getById(id: number): Promise<UserModel> {
    const url = `${this.ENDPOINT}/${id}`;

    return request.get<UserModel>(url).then((res) => {
      return res.data;
    });
  }

  public async update(data: UserModel): Promise<UserModel> {
    const url = `${this.ENDPOINT}/${data.userId}`;

    return request.put<UserModel>(url, data).then((res) => {
      return res.data;
    });
  }

  public async delete(id: number): Promise<UserModel> {
    const url = `${this.ENDPOINT}/${id}`;

    return request.delete<UserModel>(url).then((res) => {
      return res.data;
    });
  }
}

export default new UserService();
