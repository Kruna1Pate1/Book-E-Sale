import styled from 'styled-components';

type IProps = {
  width?: string;
  height?: string;
};

const Spacer = styled.div<IProps>`
  width: ${(props) => props.width ?? '0'};
  height: ${(props) => props.height ?? '20px'};

  padding: 0;
  margin: 0;
`;

export default Spacer;
