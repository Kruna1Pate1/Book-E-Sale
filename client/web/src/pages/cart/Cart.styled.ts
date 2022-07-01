import styled from 'styled-components';

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  gap: 50px;
`;

export { CartContainer, Title, ItemContainer };
