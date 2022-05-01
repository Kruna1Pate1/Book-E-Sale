import styled from 'styled-components';

const Heading = styled.h1`
  color: ${({ theme }) => theme.colors.title};
  font-size: 32px;
  width: 100%;
  margin: 40px auto;
  text-align: center;
`;

export default Heading;
