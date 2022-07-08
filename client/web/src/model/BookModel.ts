import { Category } from '../utils/Enum';
import CategoryModel from './CategoryModel';

export class BookModel {
  bookId!: number;
  name!: string;
  price!: number;
  description?: string;
  base64image?: string;
  category?: CategoryModel;
}

export class AddBookModel {
  name!: string;
  price!: number;
  description: string;
  base64image: string;
  category: Category;

  constructor() {
    this.name = '';
    this.price = 0;
    this.description = '';
    this.base64image = '';
    this.category = Category.FICTION;
  }
}
