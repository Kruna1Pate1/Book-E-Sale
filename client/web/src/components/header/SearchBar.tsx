import React from 'react';
import { StyledSearchBar } from './Header.styled';
import { Icon, Button, Input } from '..';
import { BsSearch } from 'react-icons/bs';

const SearchBar = (): JSX.Element => {
  return (
    <StyledSearchBar>
      <Input hint="What are you looking for..." />
      <Button design="secondary-filled">
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
