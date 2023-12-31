import styled from "styled-components";

export const CheckoutTable = styled.div`
  width: 100%;
  font-weight: bold;
  font-size: 16px;
  border-collapse: collapse;

  & tr td {
    width: calc(100% / 6);
    text-align: center;

    & img {
      width: 200px;
      height: 200px;
      object-fit: cover;

      @media screen and (max-width: 768px) {
        width: 50px;
        height: 50px;
      }
    }

    & button {
      padding: 5px;
      margin: 0 10px;
    }
  }

  & tr th {
    width: calc(100% / 6);
  }

  & .table-footer {
    width: 100%;
    background-color: aquamarine;
    position: sticky;
    bottom: 0;
    left: 0;
  }
`;
