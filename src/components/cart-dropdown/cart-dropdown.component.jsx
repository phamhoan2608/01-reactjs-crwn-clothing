import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { useNavigate } from "react-router-dom";
import { CartDropdownContainer } from "./cart-dropdown.styles";
import { useSelector } from "react-redux";
import { URL_MAPPING } from "../../utils/constants";

const CartDropdown = () => {
  const navigate = useNavigate();
  const { cartItems } = useSelector((state) => state.cart);

  const handleCheckout = () => {
    if (cartItems) {
      navigate(URL_MAPPING.CHECKOUT);
    }
  };

  const handleGoToShop = () => {
    if (cartItems) {
      navigate(URL_MAPPING.SHOP);
    }
  };

  return (
    <CartDropdownContainer>
      <div className="cart-items">
        {cartItems?.length > 0 ? (
          cartItems.map((item) => <CartItem key={item.id} product={item} />)
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      {cartItems?.length > 0 ? (
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
