import React from 'react';
import { StyledInput, StyledLabel } from './Input.style';

type InputProps = {
  label?: string;
  hint?: string;
} & React.HTMLProps<HTMLInputElement>;

const Input = ({ id, label, hint, type }: InputProps): JSX.Element => {
  return (
    <>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <StyledInput placeholder={hint} id={id} type={type}></StyledInput>
    </>
  );
};

export default Input;
