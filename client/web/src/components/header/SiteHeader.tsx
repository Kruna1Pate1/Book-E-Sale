import React from 'react';
import { StyledSiteHeader } from './Header.styled';
import { Icon, Logo, Nav } from '..';
import svg from '../../assets/site-logo.svg';
import { BsCart2 } from 'react-icons/bs';

const SiteHeader = (): JSX.Element => {
  return (
    <StyledSiteHeader>
      <Logo src={svg} alt="logo" />
      <Nav>
        <a href="#">Login</a>
        <span className='separator'>|</span>
        <a href="#">Register</a>
        <a href="#">
          <Icon size="28px">
            <BsCart2 />
          </Icon>
        </a>
      </Nav>
    </StyledSiteHeader>
  );
};

export default SiteHeader;
