import { useMemo } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartIconContainer, ItemCount } from "./cart-icon.styles";
import { useDispatch, useSelector } from "react-redux";
import { createAction } from "../../utils/reducer/reducer.utils";
import { CART_ACTION_TYPES } from "../../store/cart/cart.types";

const CartIcon = () => {
  const dispatch = useDispatch();
  const { isCartOpen, cartItems } = useSelector((state) => state.cart);

  const handleShowCart = () => dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, !isCartOpen));

  const count = useMemo(() => {
    return cartItems.reduce((preValue, curValue) => preValue + curValue.quantity, 0);
  }, [cartItems]);

  return (
    <CartIconContainer onClick={handleShowCart}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{count}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
