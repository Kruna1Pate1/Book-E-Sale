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

const Book = (): JSX.Element => {
  const [bookList, setBookList] = useState<BaseList<BookModel[]>>({
    records: [],
    totalRecords: 0
  });

  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get('q') ?? 'a';
  const [filter, setFilter] = useState('a-z');

  useEffect(() => {
    loadBooks();
  }, [searchParams]);

  const loadBooks = () => {
    BookService.getByName(name).then((res) => {
      setBookList(res);
    });
    console.log(bookList);
  };

  useEffect(() => {
    let temp = bookList;
    switch (filter) {
      case 'a-z':
        temp.records = bookList.records.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        break;

      case 'z-a':
        temp.records = bookList.records.sort((a, b) =>
          b.name.localeCompare(a.name)
        );
        break;
    }

    setBookList(temp);
    console.log(bookList);
  }, [bookList, filter]);

  return (
    <>
      <Heading>Book Listing</Heading>

      <BookContainer>
        <BookBarContainer>
          <h3>
            Total - <span>{bookList.totalRecords}</span> items
          </h3>
          <Input id="find" hint="Find your book..." />

          <StyledDropDown
            value={filter}
            onChange={(e) => setFilter(e.currentTarget.value)}
          >
            <option value="a-z">a - z</option>
            <option value="z-a">z - a</option>
          </StyledDropDown>
        </BookBarContainer>

        <BookListContainer>
          {bookList.records &&
            bookList.records.map((book: BookModel) => (
              <BookCard book={book} key={book.bookId} />
            ))}
        </BookListContainer>

        <BookPageStatusContainer>
          <ul>
            <li>
              <Button design="primary-filled" width="60px">
                1
              </Button>
            </li>
            <li>
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
            </li>
          </ul>
        </BookPageStatusContainer>
      </BookContainer>
    </>
  );
};

export default Book;
