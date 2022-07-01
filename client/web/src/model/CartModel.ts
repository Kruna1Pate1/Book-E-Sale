import { BookModel } from './BookModel';

export class CartModel {
  cartId!: number;
  userId!: number;
  book!: BookModel;
  quantity!: number;
}

export class AddCartModel {
  userId!: number;
  bookId!: number;
  quantity!: number;

  constructor(userId: number, bookId: number, quantity: number) {
    this.userId = userId;
    this.bookId = bookId;
    this.quantity = quantity;
  }
}

export class UpdateCartModel {
  cartId!: number;
  quantity!: number;

  constructor(cartId: number, quantity: number) {
    this.cartId = cartId;
    this.quantity = quantity;
  }
}
