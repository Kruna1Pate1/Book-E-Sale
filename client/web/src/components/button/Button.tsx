import React from 'react';
import { FilledButton, OutlineButton } from './Button.styled';

type Variant = {
  type: `${'primary' | 'secondary'}-${'filled' | 'outlined'}`;
};

export type ButtonProps = {
  width: string;
  height: string;
  children?: React.ReactNode;
} & Variant;

const Button = ({
  type,
  children,
  width,
  height
}: ButtonProps): JSX.Element => {
  switch (type) {
    case 'primary-filled':
      return (
        <FilledButton isPrimary={true} width={width} height={height}>
          {children}
        </FilledButton>
      );

    case 'secondary-filled':
      return (
        <FilledButton isPrimary={false} width={width} height={height}>
          {children}
        </FilledButton>
      );

    case 'primary-outlined':
      return (
        <OutlineButton isPrimary={true} width={width} height={height}>
          {children}
        </OutlineButton>
      );

    case 'secondary-outlined':
      return (
        <OutlineButton isPrimary={false} width={width} height={height}>
          {children}
        </OutlineButton>
      );
  }
};

Button.defaultProps = {
  type: 'primary-filled',
  width: '115px',
  height: '40px'
};

export default Button;
