import { ModalBtns, ModalConfirmContainer, ModalContent, Overlay } from "./modal-confirm.styles";

const ModalConfirm = ({ isOpen, onClose, onConfirm }) => {
  return (
    isOpen && (
      <ModalConfirmContainer>
        <Overlay></Overlay>
        <ModalContent>
          <h2>Bạn có chắc chắn muốn xóa sản phẩm?</h2>
          <ModalBtns>
            <button className="inverted" onClick={onConfirm}>
              OK
            </button>
            <button className="inverted" onClick={onClose}>
              Cancel
            </button>
          </ModalBtns>
        </ModalContent>
      </ModalConfirmContainer>
    )
  );
};

export default ModalConfirm;
