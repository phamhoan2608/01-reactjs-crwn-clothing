import { useContext, useEffect, useMemo, useState } from "react";
import { CartContext } from "../../contexts/cart.context";
import ModalConfirm from "../../components/modal/modal-confirm/modal-confirm.component";
import "./checkout.styles.scss";

import Button from "../../components/button/button.component";

const DEFALUT_CONFIRM = {
  status: false,
  item: null,
};

const Checkout = () => {
  const [modal, setModal] = useState(false);
  const [confirm, setConfirm] = useState(DEFALUT_CONFIRM);
  const { cartItems, addItemToCart, removeItemToCart, deleteItemToCart } = useContext(CartContext);

  useEffect(() => {
    if (confirm.status) {
      removeItemToCart(confirm?.item);
      setModal(false);
      setConfirm(DEFALUT_CONFIRM);
    }
  }, [confirm]);

  const countSum = useMemo(() => {
    return cartItems.reduce((preValue, curValue) => preValue + curValue.price * curValue.quantity, 0);
  }, [cartItems]);

  return (
    <>
      {cartItems.length > 0 ? (
        <table className="checkout-table">
          <thead className="checkout-header">
            <tr>
              <th>STT</th>
              <th>Hình ảnh</th>
              <th>Tên</th>
              <th>Số lượng</th>
              <th>Đơn giá</th>
              <th>Thành tiền</th>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((cartItem, index) => {
              const { id, name, imageUrl, price, quantity } = cartItem;

              return (
                <tr key={id} className="checkout-item">
                  <td>{index + 1}</td>
                  <td>
                    <img src={imageUrl} alt={`${name}`} />
                  </td>
                  <td>
                    <h2>{name}</h2>
                  </td>
                  <td>
                    <Button
                      className="circle"
                      onClick={() => {
                        if (quantity === 1) {
                          setModal(true);
                          setConfirm({ ...confirm, item: cartItem });
                        } else {
                          removeItemToCart(cartItem);
                        }
                      }}
                    >
                      &lt;
                    </Button>
                    <span>{quantity}</span>
                    <Button className="circle" onClick={() => addItemToCart(cartItem)}>
                      &gt;
                    </Button>
                  </td>
                  <td>${price}</td>
                  <td>${quantity * price}</td>
                  <td>
                    <button onClick={() => deleteItemToCart(cartItem)}>X</button>
                  </td>
                </tr>
              );
            })}
            {cartItems.length > 0 && (
              <tr className="table-footer">
                <td colSpan={5}>
                  <h2>Tổng tiền</h2>
                </td>
                <td>
                  <h2>${countSum}</h2>
                </td>
                <td></td>
              </tr>
            )}
          </tbody>
        </table>
      ) : (
        <h1>Your cart is empty</h1>
      )}
      {/* <div className="table-footer">
        <h2>Tổng tiền</h2>

        <h2>2000000</h2>
      </div> */}

      <ModalConfirm
        isOpen={modal}
        onClose={() => setModal(false)}
        onConfirm={() => setConfirm({ ...confirm, status: true })}
      />
    </>
  );
};

export default Checkout;
