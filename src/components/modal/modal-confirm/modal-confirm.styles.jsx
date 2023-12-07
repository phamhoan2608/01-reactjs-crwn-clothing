import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  background-color: rgb(49, 49, 49, 0.8);
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

export const ModalConfirmContainer = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 9998;

  & h2 {
    padding: 0 20px;
  }
`;

export const ModalContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 500px;
  height: 300px;
  background-color: #fff;
  border-radius: 20px;
  color: #000;
  position: absolute;
  top: 35%;
  left: calc(50% - 250px);
  // transform: translate(-50%, -50%);
  z-index: 9999;

  @media screen and (max-width: 768px) {
    width: 300px;
    height: 200px;
    top: 35%;
    left: calc(50% - 150px);
  }
`;

export const ModalBtns = styled.div`
  display: flex;
  gap: 20px;
`;
