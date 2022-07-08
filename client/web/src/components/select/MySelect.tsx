import React from 'react';
import Select from 'react-select';
import { StyledLabel } from '../input/Input.style';
import { SelectStyle } from './MySelect.styled';

type SelectProps = {
  label?: string;
  hint?: string;
  isError?: boolean;
} & React.ComponentPropsWithoutRef<Select>;

const MySelect = ({
  label,
  hint,
  ...props
}: SelectProps): JSX.Element => {
  return (
    <>
      {label && <StyledLabel htmlFor={props.id}>{label}</StyledLabel>}
      <Select placeholder={hint} 
      styles={SelectStyle}
      {...props}></Select>
    </>
  );
};

export default MySelect;
