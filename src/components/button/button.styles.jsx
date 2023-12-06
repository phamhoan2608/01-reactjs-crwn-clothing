import styled from "styled-components";

export const ButtonStyle = styled.button`
  color: white;
  background-color: #1f1f1f;
  border: 1px solid #fff;
  border-radius: 10px;

  &.inverted {
    width: 200px;
    height: 70px;
    color: white;
    background-color: #1f1f1f;
    border: 1px solid #fff;
    border-radius: 10px;
    &:hover {
      color: #1f1f1f;
      background-color: white;
      border: 2px solid #1f1f1f;
    }
  }

  &.google-sign-in {
    width: 200px;
    height: 70px;
    color: white;
    background-color: #00b4d8;

    &:hover {
      color: #00b4d8;
      background-color: #fff;
      border: 2px solid #00b4d8;
    }
  }

  &.circle {
    width: 40px;
    height: 40px;
    border-radius: 2px solid #000;
  }
`;
