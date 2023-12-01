import "./cart-item.styles.scss";

const CartItem = ({ product }) => {
  return (
    <div className="cart-item">
      <img src={`${product.imageUrl}`} alt={`${product.name}`} />
      <div className="cart-item-header">
        <span className="item-name">{product.name}</span>
        <div className="cart-item-footer">
          <span>{product.quantity}</span> x <span>${product.price}</span> = ${product.quantity * product.price}
        </div>
      </div>
    </div>
  );
};

export default CartItem;
