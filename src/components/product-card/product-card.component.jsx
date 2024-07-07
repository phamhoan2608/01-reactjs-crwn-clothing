import Button from "../button/button.component";
import { ProductCardContainer, ProductCardFooter } from "./product-card.styles";
import { useDispatch, useSelector } from "react-redux";
import { createAction } from "../../utils/reducer/reducer.utils";
import { CART_ACTION_TYPES } from "../../store/cart/cart.types";
import { useNavigate } from "react-router-dom";
import { URL_MAPPING } from "../../utils/constants";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id, name, imageUrl, price } = product;
  const currentUser = useSelector((state) => state.user.currentUser);

  const handleAddToCard = () => {
    if (currentUser) {
      dispatch(createAction(CART_ACTION_TYPES.ADD_TO_CART, product));
    } else {
      navigate(URL_MAPPING.SIGN_IN);
    }
  };

  return (
    <ProductCardContainer key={id}>
      <img src={imageUrl} alt={`${name}`} />
      <ProductCardFooter>
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </ProductCardFooter>
      <Button buttonType="normal" onClick={handleAddToCard}>
        Add To Card
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
