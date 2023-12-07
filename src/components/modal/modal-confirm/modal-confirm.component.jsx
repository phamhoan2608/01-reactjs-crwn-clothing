import { ButtonStyle } from "../../button/button.styles";
import { ModalBtns, ModalConfirmContainer, ModalContent, Overlay } from "./modal-confirm.styles";

const ModalConfirm = ({ isOpen, onClose, onConfirm }) => {
  return (
    isOpen && (
      <ModalConfirmContainer>
        <Overlay></Overlay>
        <ModalContent>
          <h2>Bạn có chắc chắn muốn xóa sản phẩm?</h2>
          <ModalBtns>
            <ButtonStyle className="inverted modal-button" onClick={onConfirm}>
              OK
            </ButtonStyle>
            <ButtonStyle className="inverted modal-button" onClick={onClose}>
              Cancel
            </ButtonStyle>
          </ModalBtns>
        </ModalContent>
      </ModalConfirmContainer>
    )
  );
};

export default ModalConfirm;
