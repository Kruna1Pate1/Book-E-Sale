import styled from 'styled-components';

const StyledBookCard = styled.div`
  background-color: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.onSurface};
  border-style: solid;
  border-width: 1.5px;
  border-color: ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius};

  height: 420px;
  width: 260px;

  & div {
    padding: 20px 14px 0px 14px;
  }

  & h3 {
    font-size: 16px;
    margin: 0;
    text-overflow: ellipsis;
    overflow: scroll;
    display: -webkit-box;
    white-space: nowrap;
    ::-webkit-scrollbar {
      display: none;
    }
  }

  & img {
    display: block;
    height: 50%;
    width: 100%;
    overflow: hidden;
    border-start-start-radius: ${({ theme }) => theme.borderRadius};
    border-start-end-radius: ${({ theme }) => theme.borderRadius};
  }

  & *.desc {
    text-overflow: ellipsis;
    overflow: scroll;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
    ::-webkit-scrollbar {
      display: none;
    }
    line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  & *.price {
    color: ${({ theme }) => theme.colors.hint};
    font-size: 16px;
  }

  & button {
    margin-left: 8px;
  }
`;
export { StyledBookCard };
