import "./modal-confirm.styles.scss";

const ModalConfirm = ({ isOpen, onClose, onConfirm }) => {
  return (
    isOpen && (
      <div className="modal-confirm">
        <div className="overlay"></div>
        <div className="modal-content">
          <h2>Bạn có chắc chắn muốn xóa sản phẩm?</h2>
          <div className="modal-btns">
            <button className="inverted" onClick={onConfirm}>
              OK
            </button>
            <button className="inverted" onClick={onClose}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default ModalConfirm;
