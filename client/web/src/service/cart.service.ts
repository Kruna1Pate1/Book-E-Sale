import BaseList from '../model/BaseList';
import { BookModel } from '../model/BookModel';
import { AddCartModel, CartModel, UpdateCartModel } from '../model/CartModel';
import { request } from '.';

class CartService {
  ENDPOINT = '/cart';

  public async getAll(): Promise<BaseList<CartModel[]>> {
    const url = `${this.ENDPOINT}`;

    return request.get<BaseList<CartModel[]>>(url).then((res) => {
      return res.data;
    });
  }

  public async getById(id: number): Promise<CartModel> {
    const url = `${this.ENDPOINT}/${id}`;

    return request.get<CartModel>(url).then((res) => {
      return res.data;
    });
  }

  public async getByUser(id: number): Promise<BaseList<CartModel[]>> {
    const url = `${this.ENDPOINT}/user/${id}`;

    return request.get<BaseList<CartModel[]>>(url).then((res) => {
      return res.data;
    });
  }

  public async add(data: AddCartModel): Promise<CartModel> {
    const url = `${this.ENDPOINT}`;

    return request.post<CartModel>(url, data).then((res) => {
      return res.data;
    });
  }

  public async updateQuantity(data: UpdateCartModel): Promise<CartModel> {
    const url = `${this.ENDPOINT}/${data.cartId}/quantity`;

    return request.put<CartModel>(url, data.quantity).then((res) => {
      return res.data;
    });
  }

  public async delete(id: number): Promise<CartModel> {
    const url = `${this.ENDPOINT}/${id}`;

    return request.delete<CartModel>(url).then((res) => {
      return res.data;
    });
  }

  public async deleteByUser(id: number): Promise<string> {
    const url = `${this.ENDPOINT}/user/${id}`;

    return request.delete<string>(url).then((res) => {
      return res.data;
    });
  }
}

export default new CartService();
