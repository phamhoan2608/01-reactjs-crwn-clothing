import { useContext, useMemo } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import "./cart-icon.styles.scss";
import { CartContext } from "../../contexts/cart.context";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartItems } = useContext(CartContext);

  const handleShowCart = () => setIsCartOpen(!isCartOpen);

  const count = useMemo(() => {
    return cartItems.reduce((preValue, curValue) => preValue + curValue.quantity, 0);
  }, [cartItems]);

  return (
    <div className="cart-icon-container" onClick={handleShowCart}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{count}</span>
    </div>
  );
};

export default CartIcon;
