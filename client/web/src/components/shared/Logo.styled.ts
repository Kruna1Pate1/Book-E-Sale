import styled from 'styled-components';

const Logo = styled.img`
  max-width: 180px;
  height: auto;

  &:hover {
    opacity: 0.85;
  }

  @media (max-width: 760px) {
    max-width: 150px;
  }
`;

export default Logo;
