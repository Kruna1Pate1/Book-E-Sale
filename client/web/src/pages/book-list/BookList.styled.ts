import Select from 'react-select';
import styled, { useTheme } from 'styled-components';

const BookContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  gap: 60px;
  h3 {
    font-size: 20px;
    margin: 0;
  }

  input {
    flex: 1;
  }
`;

const BookBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  gap: 120px;
`;

const BookListContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  flex-wrap: wrap;

  row-gap: 50px;
  column-gap: 30px;
`;

const BookPageStatusContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-self: flex-end;

  & ul {
    display: flex;
    flex-direction: row;
    gap: 15px;
    padding-left: 18px;
  }

  & li {
    list-style-type: none;
  }

  & span {
    color: ${({ theme }) => theme.colors.primary};
    text-align: end;
  }

  & button {
    border-radius: 50%;
  }
`;

export {
  BookContainer,
  BookBarContainer,
  BookListContainer,
  BookPageStatusContainer
};
