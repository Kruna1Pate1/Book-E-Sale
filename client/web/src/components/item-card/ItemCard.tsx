import React, { useState } from 'react';
import {
  StyledItemCard,
  DetailsContainer,
  QuantityContainer
} from './ItemCard.styled';
import { Button } from '../button';
import { Input } from '../input';
import { CartModel } from '../../model/CartModel';

type ItemProps = {
  cart: CartModel;
  onRemove: () => void;
  onQuantityChange: (quantity: number) => void;
};

const ItemCard = ({
  cart,
  onRemove,
  onQuantityChange
}: ItemProps): JSX.Element => {
  const book = cart.book;
  const [quantity, setQuantity] = useState(cart.quantity);

  const changeQuantity = (q: number) => {
    setQuantity(q);

    q > 0 && onQuantityChange(q);
  };

  return (
    <>
      <StyledItemCard>
        <img src={book.base64image} alt={book.name} />

        <DetailsContainer>
          <div className="details">
            <h3>{book.name}</h3>
            <p>
              <span className="desc">{book.description}</span>
            </p>

            <QuantityContainer>
              <Button
                design="primary-filled"
                className="quantity"
                width="12px"
                height="25px"
                radius="3px"
                onClick={() => changeQuantity(quantity - 1)}
              >
                -
              </Button>
              <Input
                className="quantity"
                value={quantity}
                width="30px"
                height="27px"
                radius="3px"
                onChange={(e) =>
                  changeQuantity(parseInt(e.currentTarget.value) || 0)
                }
              ></Input>
              <Button
                className="quantity"
                design="secondary-filled"
                width="12px"
                height="25px"
                radius="3px"
                onClick={() => changeQuantity(quantity + 1)}
              >
                +
              </Button>
            </QuantityContainer>
          </div>

          <div className="details">
            <h3>
              MRP &#8377; <span>{book.price}</span>
            </h3>
            <Button
              className="remove"
              design="primary-outlined"
              width="60px"
              height="35px"
              radius="3px"
              onClick={onRemove}
            >
              remove
            </Button>
          </div>
        </DetailsContainer>
      </StyledItemCard>
    </>
  );
};

export default ItemCard;
