import styled from "styled-components";

export const FormInputContainer = styled.div`
  display: flex;
  width: 100%;
  padding-bottom: 10px;
  column-gap: 10px;
`;

export const FormLabel = styled.label`
  width: 30%;
  padding: 10px 0;
`;

export const FormInputStyle = styled.input`
  width: 70%;
  min-width: 300px;
  border-radius: 4px;
  border: 2px solid #1f1f1f;
  padding: 0 10px;

  @media screen and (max-width: 768px) {
    min-width: 250px;
  }
`;
