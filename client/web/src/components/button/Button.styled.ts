import styled from 'styled-components';

type IProps = {
  isPrimary: boolean;
  width: string;
  height: string;
  radius?: string;
};

const StyledButton = styled.button<IProps>`
  --theme-color: ${({ theme, isPrimary }) =>
    isPrimary ? theme.colors.primary : theme.colors.secondary};
  --text-color: ${({ theme }) => theme.colors.btnText};
  --width: ${({ width }) => width};

  color: var(--text-color);
  background-color: var(--theme-color);
  border-radius: ${({ radius, theme }) => radius ?? theme.borderRadius};
  height: ${({ height }) => height};

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 16px;

  ${({ className }) =>
    className === 'quantity' &&
    `
      font-size: 22px;
      font-weight: 300;
    `}

  ${({ className }) =>
    className === 'remove' &&
    `
      font-size: 15px;
      font-weight: 400;
    `}

  max-width: calc(var(--width) + 13px);
  min-width: calc(var(--width) - 15px);
  transition: all 0.4s;
`;

const FilledButton = styled(StyledButton)`
  color: var(--text-color);
  background-color: var(--theme-color);
  border: none;
  flex-grow: 1;
  flex-shrink: 1;

  &:hover {
    filter: brightness(85%);
    transform: scale(0.97);
  }
`;

const OutlineButton = styled(StyledButton)`
  color: var(--theme-color);
  border-color: var(--theme-color);
  background-color: transparent;
  transition: 0.3s;
  border: 1px solid;
  /* height: 30px; */
  /* min-width: 80px; */

  &:hover {
    color: var(--text-color);
    background-color: var(--theme-color);
  }
`;

StyledButton.defaultProps = {
  isPrimary: true,
  width: '115px',
  height: '40px'
};

export { StyledButton, FilledButton, OutlineButton };
