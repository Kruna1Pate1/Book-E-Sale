import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Heading } from '../../components';
import { ItemCard } from '../../components/item-card';
import { useAuthContext } from '../../context/AuthContext';
import BaseList from '../../model/BaseList';
import { CartModel, UpdateCartModel } from '../../model/CartModel';
import cartService from '../../service/cart.service';
import { CartContainer, ItemContainer, Title } from './Cart.styled';

const Cart = (): JSX.Element => {
  const [cartList, setCartList] = useState<BaseList<CartModel[]>>({
    records: [],
    totalRecords: 0
  });

  const authContext = useAuthContext();
  const userId = authContext.user.userId;
  const navigate = useNavigate();
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (userId === undefined) {
      toast.error('Login to view cart items!');
      navigate('/login');
    } else {
      loadCart();
    }
  }, [authContext]);

  const loadCart = () => {
    cartService.getByUser(userId).then((res) => {
      setCartList(res);
    });
    console.log(cartList);
  };

  useEffect(() => {
    updateTotalPrice();
  }, [cartList]);
  const updateTotalPrice = () => {
    let price = 0;
    cartList.records &&
      cartList.records.forEach((c) => {
        price += c.book.price * c.quantity;
      });
    setTotalPrice(price);
    console.log(totalPrice);
  };

  const removeItem = (cartId: number) => {
    let cart = cartList.records.filter((c) => {
      return c.cartId !== cartId;
    });

    let cartList1 = new BaseList<CartModel[]>();

    cartList1.records = cart;
    cartList1.totalRecords = cart.length;

    cartService
      .delete(cartId)
      .then((res) => {
        console.log(res);
        setCartList(cartList1);
      })
      .catch((reason) => {
        toast.error('Something went wrong!!');
        console.log(reason);
      });
  };

  const updateQuantity = (cartId: number, quantity: number) => {
    cartList.records
      .filter((c) => {
        return c.cartId === cartId;
      })
      .forEach((c) => {
        c.quantity = quantity;
        return c;
      });

    updateTotalPrice();

    let cartModel = new UpdateCartModel(cartId, quantity);

    cartService
      .updateQuantity(cartModel)
      .then((res) => {
        console.log(res);
        setCartList(cartList);
      })
      .catch((reason) => {
        toast.error('Something went wrong!!');
        console.log(reason);
      });
  };

  return (
    <>
      <Heading>Cart</Heading>

      <CartContainer>
        <Title>
          <h3>
            My Shopping Bag (<span>{cartList.totalRecords}</span> Items)
          </h3>
          <h3>
            Total price: <span>{totalPrice}</span>
          </h3>
        </Title>

        <ItemContainer>
          {cartList.records &&
            cartList.records.map((cart: CartModel) => (
              <ItemCard
                cart={cart}
                key={cart.cartId}
                onRemove={() => removeItem(cart.cartId)}
                onQuantityChange={(quantity) =>
                  updateQuantity(cart.cartId, quantity)
                }
              />
            ))}
        </ItemContainer>
      </CartContainer>
    </>
  );
};

export default Cart;
