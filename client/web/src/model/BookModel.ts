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
  description?: string;
  base64image?: string;
  categoryId?: Category;
}
