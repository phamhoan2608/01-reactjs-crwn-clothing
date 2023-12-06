import styled from "styled-components";

export const ProductCardContainer = styled.div`
  position: relative;
  width: 100%;

  &:hover > button {
    display: block;
  }

  &:hover > img {
    opacity: 0.8;
  }

  & img {
    object-fit: cover;
    width: 100%;
    height: 500px;
  }

  & button {
    display: none;
    width: 50%;
    position: absolute;
    bottom: 15%;
    left: 25%;
  }
`;

export const ProductCardFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
