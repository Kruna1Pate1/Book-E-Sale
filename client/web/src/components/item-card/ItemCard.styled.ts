import styled from 'styled-components';
import { Input } from '../input';

const StyledItemCard = styled.div`
  background-color: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.onSurface};
  border-color: ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius};
  border-style: solid;
  border-width: 1.5px;
  padding: 8px 16px 16px 10px;

  height: 125px;
  width: 100%;

  display: flex;
  direction: row;

  & img {
    height: 100%;
  }
`;

const DetailsContainer = styled.div`
  display: flex;
  direction: row;
  justify-content: space-between;
  margin-left: 16px;
  width: 100%;

  h3 {
    margin-top: 6px;
    margin-bottom: 6px;
  }

  span.desc {
    color: ${({ theme }) => theme.colors.hint};
  }

  p {
    width: 300px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    padding: 0px;
    margin: 0px 0px 8px 0px;
  }

  div.details {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

const QuantityContainer = styled.div`
  display: flex;
  direction: row;
  gap: 14px;
  justify-content: flex-start;
`;

export { StyledItemCard, DetailsContainer, QuantityContainer };
