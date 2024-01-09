import { CartItemContainer } from "./cart-item.styles";

const CartItem = ({ product }) => {
  return (
    <CartItemContainer>
      <img src={`${product.imageUrl}`} alt={`${product.name}`} />
      <div className="cart-item-header">
        <span className="item-name">{product.name}</span>
        <div className="cart-item-footer">
          <span>{product?.quantity}</span> x <span>${product.price}</span> = ${product?.quantity * product.price}
        </div>
      </div>
    </CartItemContainer>
  );
};

export default CartItem;
