import React, { useState } from 'react';
import BaseList from '../../model/BaseList';
import { BookModel } from '../../model/BookModel';
import { StyledSearchBar } from './Header.styled';

const Suggetions = (): JSX.Element => {

    const [bookList, setBookList] = useState<BookModel[]>([]);

  return (
    <p></p>
  );
};

export default Suggetions;
