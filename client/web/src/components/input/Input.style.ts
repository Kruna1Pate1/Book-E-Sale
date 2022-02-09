import styled from 'styled-components';

const StyledInput = styled.input`
  background-color: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.onSurface};
  border-color: ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius};

  max-width: 430px;
  height: 40px;
  padding: 10px 20px;
  margin: 0 10px;
  font-size: 16px;
  font-weight: 300;
  flex-grow: 2;
  flex-shrink: 2;
  border-style: solid;
  border-width: 1px;
  transition: all 0.2s;

  &::placeholder {
    color: ${({ theme }) => theme.colors.hint};
    font-style: italic;
  }

  &:focus {
    outline: none !important;
    border-color: ${({ theme }) => theme.colors.secondary};
    border-width: 1.5px;
  }

  @media (max-width: 760px) {
    width: 100%;
    font-size: 16px;
    padding: 0 15px !important;
  }
`;

export { StyledInput };
