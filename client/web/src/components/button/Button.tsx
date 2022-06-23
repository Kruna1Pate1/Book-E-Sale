import React from 'react';
import { FilledButton, OutlineButton } from './Button.styled';

type Variant = {
  design: `${'primary' | 'secondary'}-${'filled' | 'outlined'}`;
};

export type ButtonProps = {
  width: string;
  height: string;
  children?: React.ReactNode;
} & Variant & React.HTMLProps<HTMLButtonElement>;

const Button = ({
  design,
  children,
  width,
  height,
  onClick
}: ButtonProps): JSX.Element => {
  switch (design) {
    case 'primary-filled':
      return (
        <FilledButton isPrimary={true} width={width} height={height} onClick={onClick}>
          {children}
        </FilledButton>
      );

    case 'secondary-filled':
      return (
        <FilledButton isPrimary={false} width={width} height={height} onClick={onClick}>
          {children}
        </FilledButton>
      );

    case 'primary-outlined':
      return (
        <OutlineButton isPrimary={true} width={width} height={height} onClick={onClick}>
          {children}
        </OutlineButton>
      );

    case 'secondary-outlined':
      return (
        <OutlineButton isPrimary={false} width={width} height={height} onClick={onClick}>
          {children}
        </OutlineButton>
      );
  }
};

Button.defaultProps = {
  type: 'primary-filled',
  width: '100px',
  height: '40px'
};

export default Button;
