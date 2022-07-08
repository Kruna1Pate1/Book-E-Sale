import React, { useEffect, useState } from 'react';
import { Button, Heading, Input } from '../../components';
import { BookCard } from '../../components/book-card';
import { StyledDropDown } from '../../components/input/Input.style';
import {
  BookContainer,
  BookBarContainer,
  BookListContainer,
  BookPageStatusContainer
} from './BookList.styled';
import { BookService } from '../../service';

import { BookModel } from '../../model/BookModel';
import { useSearchParams } from 'react-router-dom';
import BaseList from '../../model/BaseList';
import cartService from '../../service/cart.service';
import { useAuthContext } from '../../context/AuthContext';
import { toast } from 'react-toastify';
import { AddCartModel } from '../../model/CartModel';
import Select from 'react-select';
import { MySelect } from '../../components/select';

const BookList = (): JSX.Element => {
  const [bookList, setBookList] = useState<BaseList<BookModel[]>>({
    records: [],
    totalRecords: 0
  });

  const authContext = useAuthContext();
  const userId = authContext.user.userId;

  const [searchParams, setSearchParams] = useSearchParams();
  const [sortBy, setSortBy] = useState<string>();
  const [filter, setFilter] = useState<string>();

  const sortOptions = [
    { label: 'A - Z', value: 'a-z' },
    { label: 'Z - A', value: 'z-a' }
  ];

  useEffect(() => {
    let name = filter || searchParams.get('q') || 'a';
    loadBooks(name);
  }, [searchParams, filter]);

  const loadBooks = (name: string) => {
    BookService.getByName(name).then((res) => {
      setBookList(res);
    });
    console.log(bookList);
  };

  const sortBooks = (sort: string) => {
    setSortBy(sort);
    bookList.records.sort((a, b) => {
      let s1 = a.name.toLowerCase();
      let s2 = b.name.toLowerCase();
      if (s1 < s2) {
        return sort === 'a-z' ? -1 : 1;
      }
      if (s1 > s2) {
        return sort === 'a-z' ? 1 : -1;
      }
      return 0;
    });

    console.log(bookList);
  };

  const addToCart = (bookId: number) => {
    if (userId === undefined) {
      toast.error('Login to add items in cart!');
      return;
    }
    let cart = new AddCartModel(userId, bookId, 1);
    cartService
      .add(cart)
      .then((res) => {
        console.log(res);
        toast.success('Item added to the cart!');
      })
      .catch((reason) => {
        console.log(reason);
        toast.error('Something went wrong!!');
      });
  };

  return (
    <>
      <Heading>Book Listing</Heading>

      <BookContainer>
        <BookBarContainer>
          <h3>
            Total - <span>{bookList.totalRecords}</span> items
          </h3>
          <Input
            id="find"
            hint="Find your book..."
            value={filter}
            onChange={(e) => setFilter(e.currentTarget.value)}
          />

          <MySelect
            name="sort"
            classNamePrefix="sort"
            placeholder="Sort By"
            options={sortOptions}
            onChange={(e: any) => sortBooks(e.value || '')}
          />
        </BookBarContainer>

        <BookListContainer>
          {bookList.records &&
            bookList.records.map((book: BookModel) => (
              <BookCard
                book={book}
                key={book.bookId}
                addToCart={() => addToCart(book.bookId)}
              />
            ))}
        </BookListContainer>

        <BookPageStatusContainer>
          <ul>
            <li>
              <Button design="primary-filled" width="60px">
                1
              </Button>
            </li>
            {/* <li>
              <Button design="primary-outlined" width="60px">
                2
              </Button>
            </li>
            <li>
              <Button design="primary-outlined" width="60px">
                3
              </Button>
            </li>
            <li>
              <span>...</span>
            </li>
            <li>
              <Button design="primary-outlined" width="60px">
                10
              </Button>
            </li> */}
          </ul>
        </BookPageStatusContainer>
      </BookContainer>
    </>
  );
};

export default BookList;
