import { useEffect, useMemo, useState } from "react";
import ModalConfirm from "../../components/modal/modal-confirm/modal-confirm.component";

import { CheckoutTable } from "./checkout.styles";
import { ButtonStyle } from "../../components/button/button.styles";
import { useDispatch, useSelector } from "react-redux";
import { createAction } from "../../utils/reducer/reducer.utils";
import { CART_ACTION_TYPES } from "../../store/cart/cart.types";
import { formatVND } from "../../utils/utils";

const DEFALUT_CONFIRM = {
  status: false,
  item: null,
};

const Checkout = () => {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [confirm, setConfirm] = useState(DEFALUT_CONFIRM);
  const cart = useSelector((state) => state.cart);

  console.log("cart log", cart.cartItems);

  useEffect(() => {
    dispatch(createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cart.cartItems));
  }, [cart.cartItems, dispatch]);

  useEffect(() => {
    if (confirm.status) {
      handleRemoveItem(confirm?.item);
      setModal(false);
      setConfirm(DEFALUT_CONFIRM);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [confirm]);

  const countSum = useMemo(() => {
    return cart.cartItems.reduce((preValue, curValue) => preValue + curValue.price * curValue.quantity, 0);
  }, [cart.cartItems]);

  const handleRemoveItem = (product) => {
    dispatch(createAction(CART_ACTION_TYPES.REMOVE_TO_CART, product));
  };

  const handleAddItem = (product) => {
    dispatch(createAction(CART_ACTION_TYPES.ADD_TO_CART, product));
  };

  const deleteItem = (product) => {
    dispatch(createAction(CART_ACTION_TYPES.DELETE_TO_CART, product));
  };

  return (
    <>
      <h1>Shopping Cart</h1>
      {cart.cartItems.length > 0 ? (
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
            {cart.cartItems.map((cartItem, index) => {
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
                          handleRemoveItem(cartItem);
                        }
                      }}
                    >
                      -
                    </ButtonStyle>
                    <span>{quantity}</span>
                    <ButtonStyle className="circle" onClick={() => handleAddItem(cartItem)}>
                      +
                    </ButtonStyle>
                  </td>
                  <td>{formatVND(price)}</td>
                  <td>{formatVND(quantity * price)}</td>
                  <td>
                    <ButtonStyle className="circle" onClick={() => deleteItem(cartItem)}>
                      X
                    </ButtonStyle>
                  </td>
                </tr>
              );
            })}
            {cart.cartItems.length > 0 && (
              <tr className="table-footer">
                <td colSpan={5}>
                  <h2>Subtotal</h2>
                </td>
                <td>
                  <h2>{formatVND(countSum)}</h2>
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
