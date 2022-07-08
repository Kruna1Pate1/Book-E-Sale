import BaseList from '../model/BaseList';
import { AddBookModel, BookModel } from '../model/BookModel';
import { request } from '.';

class UserService {
  ENDPOINT = '/book';

  public async getAll(): Promise<BaseList<BookModel[]>> {
    const url = `${this.ENDPOINT}`;

    return request.get<BaseList<BookModel[]>>(url).then((res) => {
      return res.data;
    });
  }

  public async getById(id: number): Promise<BookModel> {
    const url = `${this.ENDPOINT}/${id}`;

    return request.get<BookModel>(url).then((res) => {
      return res.data;
    });
  }

  public async getByName(name: string): Promise<BaseList<BookModel[]>> {
    const url = `${this.ENDPOINT}/search`;

    return request
      .get<BaseList<BookModel[]>>(url, { params: { q: name } })
      .then((res) => {
        return res.data;
      });
  }

  public async add(data: AddBookModel): Promise<BookModel> {
    const url = `${this.ENDPOINT}`;

    return request.post<BookModel>(url, data).then((res) => {
      return res.data;
    });
  }

  public async update(data: BookModel): Promise<BookModel> {
    const url = `${this.ENDPOINT}/${data.bookId}`;

    return request.put<BookModel>(url, data).then((res) => {
      return res.data;
    });
  }

  public async delete(id: number): Promise<BookModel> {
    const url = `${this.ENDPOINT}/${id}`;

    return request.delete<BookModel>(url).then((res) => {
      return res.data;
    });
  }
}

export default new UserService();
