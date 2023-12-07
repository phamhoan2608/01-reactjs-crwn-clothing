import { useContext, useEffect, useMemo, useState } from "react";
import { CartContext } from "../../contexts/cart.context";
import ModalConfirm from "../../components/modal/modal-confirm/modal-confirm.component";

import { CheckoutTable } from "./checkout.styles";
import { ButtonStyle } from "../../components/button/button.styles";

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [confirm]);

  const countSum = useMemo(() => {
    return cartItems.reduce((preValue, curValue) => preValue + curValue.price * curValue.quantity, 0);
  }, [cartItems]);

  return (
    <>
      <h1>Shopping Cart</h1>
      {cartItems.length > 0 ? (
        <CheckoutTable as="table">
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
                    <ButtonStyle
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
                      -
                    </ButtonStyle>
                    <span>{quantity}</span>
                    <ButtonStyle className="circle" onClick={() => addItemToCart(cartItem)}>
                      +
                    </ButtonStyle>
                  </td>
                  <td>${price}</td>
                  <td>${quantity * price}</td>
                  <td>
                    <ButtonStyle className="circle" onClick={() => deleteItemToCart(cartItem)}>
                      X
                    </ButtonStyle>
                  </td>
                </tr>
              );
            })}
            {cartItems.length > 0 && (
              <tr className="table-footer">
                <td colSpan={5}>
                  <h2>Subtotal</h2>
                </td>
                <td>
                  <h2>${countSum}</h2>
                </td>
                <td></td>
              </tr>
            )}
          </tbody>
        </CheckoutTable>
      ) : (
        <h3>Your cart is empty</h3>
      )}
      <ModalConfirm
        isOpen={modal}
        onClose={() => setModal(false)}
        onConfirm={() => setConfirm({ ...confirm, status: true })}
      />
    </>
  );
};

export default Checkout;
