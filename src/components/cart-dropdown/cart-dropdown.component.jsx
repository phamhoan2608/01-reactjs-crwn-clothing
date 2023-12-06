import { useContext } from "react";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { CartContext } from "../../contexts/cart.context";
import { useNavigate } from "react-router-dom";
import { CartDropdownContainer } from "./cart-dropdown.styles";

const CartDropdown = () => {
  const navigate = useNavigate();
  const { cartItems } = useContext(CartContext);

  const handleCheckout = () => {
    if (cartItems) {
      navigate("/checkout");
    }
  };

  const handleGoToShop = () => {
    if (cartItems) {
      navigate("/shop");
    }
  };

  return (
    <CartDropdownContainer>
      <div className="cart-items">
        {cartItems.length > 0 ? (
          cartItems.map((item) => <CartItem product={item} />)
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      {cartItems.length > 0 ? (
        <Button className="inverted" onClick={handleCheckout}>
          GO TO CHECKOUT
        </Button>
      ) : (
        <Button className="inverted" onClick={handleGoToShop}>
          GO TO SHOP
        </Button>
      )}
    </CartDropdownContainer>
  );
};

export default CartDropdown;
