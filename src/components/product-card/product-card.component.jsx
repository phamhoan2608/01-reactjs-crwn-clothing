import { useContext } from "react";
import Button from "../button/button.component";
import { CartContext } from "../../contexts/cart.context";
import { ProductCardContainer, ProductCardFooter } from "./product-card.styles";

const ProductCard = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);
  const { id, name, imageUrl, price } = product;

  return (
    <ProductCardContainer key={id}>
      <img src={imageUrl} alt={`${name}`} />
      <ProductCardFooter>
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </ProductCardFooter>
      <Button buttonType="inverted" onClick={() => addItemToCart(product)}>
        ADD TO CART
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
