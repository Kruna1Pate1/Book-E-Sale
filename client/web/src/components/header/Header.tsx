import React from 'react';
import { StyledHeader } from './Header.styled';
import SearchBar from './SearchBar';
import SiteHeader from './SiteHeader';

const Header = (): JSX.Element => {
  return (
    <StyledHeader>
      <SiteHeader />
      <SearchBar />
      {/* <Suggetions /> */}
    </StyledHeader>
  );
};

export default Header;
