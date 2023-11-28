import Button from "../button/button.component";

import "./cart-dropdown.styles.scss";

const CartDropdown = ({ products }) => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {products.map((item) => (
          <div className="cart-item">
            <img src={`${item.imageUrl}`} alt={`${item.name}`} />
            <div className="item-box">
              <span className="item-name">{item.name}</span>
            </div>
          </div>
        ))}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
