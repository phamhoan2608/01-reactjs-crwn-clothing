import { formatVND } from "../../utils/utils";
import { CartItemContainer, CartItemFooter } from "./cart-item.styles";

const CartItem = ({ product }) => {
  return (
    <CartItemContainer>
      <img src={`${product.imageUrl}`} alt={`${product.name}`} />
      <div className="cart-item-header">
        <span className="item-name">{product.name}</span>
        <CartItemFooter>
          <span>
            <span>{product?.quantity}</span> x <span>{formatVND(product.price)}</span>
          </span>
          ={formatVND(product?.quantity * product.price)}
        </CartItemFooter>
      </div>
    </CartItemContainer>
  );
};

export default CartItem;
