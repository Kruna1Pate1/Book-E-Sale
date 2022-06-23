import React, { useState } from 'react';
import { StyledSearchBar } from './Header.styled';
import { Icon, Button, Input } from '..';
import { BsSearch } from 'react-icons/bs';
import { createSearchParams, useNavigate } from 'react-router-dom';

const SearchBar = (): JSX.Element => {
  const [name, setName] = useState('');

  const navigate = useNavigate();

  const onClick = () => {
    navigate({
      pathname: '/booklist',
      search: createSearchParams({
        q: name
      }).toString()
    });
  };

  return (
    <StyledSearchBar>
      <Input
        hint="What are you looking for..."
        value={name}
        onChange={(e) => setName(e.currentTarget.value)}
      />
      <Button design="secondary-filled" onClick={onClick}>
        <Icon>
          <BsSearch />
        </Icon>
        Search
      </Button>
      <Button design="primary-filled">Cancel</Button>
    </StyledSearchBar>
  );
};

export default SearchBar;
