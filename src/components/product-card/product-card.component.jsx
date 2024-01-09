import Button from "../button/button.component";
import { ProductCardContainer, ProductCardFooter } from "./product-card.styles";
import { useDispatch } from "react-redux";
import { createAction } from "../../utils/reducer/reducer.utils";
import { CART_ACTION_TYPES } from "../../store/cart/cart.types";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { id, name, imageUrl, price } = product;

  return (
    <ProductCardContainer key={id}>
      <img src={imageUrl} alt={`${name}`} />
      <ProductCardFooter>
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </ProductCardFooter>
      <Button buttonType="inverted" onClick={() => dispatch(createAction(CART_ACTION_TYPES.ADD_TO_CART, product))}>
        ADD TO CART
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
