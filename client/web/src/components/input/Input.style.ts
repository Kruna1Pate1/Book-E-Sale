import styled from 'styled-components';
import { InputProps } from './Input';

const StyledInput = styled.input<InputProps>`
  background-color: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.onSurface};
  border-color: ${({ isError, theme }) =>
    isError ? theme.colors.error : theme.colors.border};
  border-radius: ${({ radius, theme }) => radius ?? theme.borderRadius};

  height: ${({ height }) => height};
  width: ${({ width }) => width};

  min-height: 40px;
  padding: 10px 20px;
  font-weight: 300;
  font-size: 16px;

  ${({ className }) =>
    className === 'quantity' &&
    `
    min-height: 0px;
    font-size: 14px;
    font-weight: 400;
    text-align: center;
    padding: 0px;
  `}

  border-style: solid;
  border-width: 1px;
  transition: all 0.2s;

  &::placeholder {
    color: ${({ theme }) => theme.colors.hint};
    font-style: italic;
    white-space: nowrap;
  }

  &:focus {
    outline: none !important;
    border-color: ${({ isError, theme }) =>
      isError ? theme.colors.error : theme.colors.secondary};
    border-width: 1.5px;
  }

  @media (max-width: 760px) {
    width: 100%;
    font-size: 16px;
    padding: 0 15px !important;
  }
`;

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  margin: 15px 0;
  gap: 15px;
  white-space: nowrap;
`;

const StyledDropDown = styled.select`
  background-color: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.onSurface};
  border-color: ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius};

  min-height: 40px;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 300;

  border-style: solid;
  border-width: 1px;
  transition: all 0.2s;

  &:focus {
    outline: none !important;
    border-color: ${({ theme }) => theme.colors.secondary};
  }
`;

export { StyledInput, StyledLabel, StyledDropDown };
