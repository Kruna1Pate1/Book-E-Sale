import React from 'react';
import { StyledInput, StyledLabel } from './Input.style';

type InputProps = {
  label?: string;
  hint?: string;
  radius?: string;
  isError?: boolean;
} & React.ComponentPropsWithoutRef<'input'>;

const Input = ({hint, label, ...props}: InputProps): JSX.Element => {
  return (
    <>
      {label && <StyledLabel htmlFor={props.id}>{label}</StyledLabel>}
      <StyledInput
      placeholder={hint}
        {...props}
      ></StyledInput>
    </>
  );
};

export default Input;
export type { InputProps };
