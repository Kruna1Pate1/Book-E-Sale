import React from 'react';
import { StyledInput } from './Input.style';

type InputProps = {
  hint?: string;
};

const Input = ({ hint }: InputProps): JSX.Element => {
  return <StyledInput placeholder={hint}></StyledInput>;
};

export default Input;
