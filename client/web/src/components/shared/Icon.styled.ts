import styled from 'styled-components';

type IProps = {
  size?: string;
  color?: string;
};

const Icon = styled.div<IProps>`
  --color: ${({ color }) => color ?? 'inherit'};
  --size: ${({ size }) => size ?? '16px'};
  margin: auto 8px;

  * {
    size: var(--size);
    height: var(--size);
    width: var(--size);
    color: var(--color);
    fill: 'currentColor';
  }

  span.label {
    color: ${({ theme }) => theme.colors.hint};
    text-align: center;
  }
`;

export default Icon;
