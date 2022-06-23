import React from 'react';
import { BookModel } from '../../model/BookModel';
import { Button } from '../button';
import { StyledBookCard } from './BookCard.styled';

type BookProps = {
  book: BookModel;
};

const BookCard = ({ book }: BookProps): JSX.Element => {
  return (
    <>
      <StyledBookCard>
        <img src={book.base64image} alt={book.name} />

        <div>
          <h3>{book.name}</h3>

          <p className="desc">{book.description}</p>
          <p className="price">
            MRP &#8377; <span>{book.price}</span>
          </p>
        </div>
        <Button design="primary-filled" width="100%">
          Add To Cart
        </Button>
      </StyledBookCard>
    </>
  );
};

export default BookCard;
