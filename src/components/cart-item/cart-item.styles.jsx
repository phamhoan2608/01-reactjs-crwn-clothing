import styled from "styled-components";

export const CartItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 20px;
  padding-bottom: 10px;

  & img {
    width: 50px;
    height: 60px;
    object-fit: cover;
  }
`;

export const CartItemFooter = styled.div`
  display: flex;
  flex-direction: column;
`;
