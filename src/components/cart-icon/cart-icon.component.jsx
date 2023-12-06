import { useContext, useMemo } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../contexts/cart.context";
import { CartIconContainer, ItemCount } from "./cart-icon.styles";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartItems } = useContext(CartContext);

  const handleShowCart = () => setIsCartOpen(!isCartOpen);

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
