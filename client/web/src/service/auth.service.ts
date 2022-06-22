import { RegisterModel, LoginModel } from '../model/AuthModel';
import { UserModel } from '../model/UserModel';
import { request } from '.';

class AuthService {
  ENDPOINT = '/auth';

  public async login(data: LoginModel): Promise<UserModel> {
    const url = `${this.ENDPOINT}/login`;
    return request.post(url, data).then((res) => {
      return res.data as UserModel;
    });
  }

  public async register(data: RegisterModel): Promise<RegisterModel> {
    const url = `${this.ENDPOINT}/register`;
    return request.post<RegisterModel>(url, data).then((res) => {
      return res.data;
    });
  }
}

export default new AuthService();
