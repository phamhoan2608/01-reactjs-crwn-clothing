import styled from "styled-components";

export const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 10px;
  row-gap: 50px;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
