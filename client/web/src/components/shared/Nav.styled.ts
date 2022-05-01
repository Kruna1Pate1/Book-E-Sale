import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

type IProps = {
  className?: string;
};

const Nav = styled.nav<IProps>`
  color: ${({ theme }) => theme.colors.primary};
  width: 230px;
  font-size: 16px;
  height: 92px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  *:not(.separator):hover {
    color: ${({ theme }) => theme.colors.secondary};
    transform: scale(1.02);
    font-style: bold;
  }

  *.separator {
    color: ${({ theme }) => theme.colors.hint};
    font-size: 20px;
    font-weight: lighter;
  }
`;

const StyledNavLink = styled(NavLink)<IProps>`
  &:not(.icon).active {
    color: ${({ theme }) => theme.colors.secondary};
    padding-bottom: 2px;
    border-bottom: 2px solid;
  }
`;

export { Nav as default, StyledNavLink };
