import BaseList from '../model/BaseList';
import CategoryModel from '../model/CategoryModel';
import { request } from '.';

class CategoryService {
  ENDPOINT = '/category';

  public async getAll(): Promise<BaseList<CategoryModel[]>> {
    const url = `${this.ENDPOINT}`;

    return request.get<BaseList<CategoryModel[]>>(url).then((res) => {
      return res.data;
    });
  }

  public async getById(id: number): Promise<CategoryModel> {
    const url = `${this.ENDPOINT}/${id}`;

    return request.get<CategoryModel>(url).then((res) => {
      return res.data;
    });
  }
}

export default new CategoryService();
