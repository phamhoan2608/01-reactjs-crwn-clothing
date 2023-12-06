import { useNavigate } from "react-router-dom";
import { CategoryBodyContainer, CategoryContainer } from "./category-item.styles";

const CategoryItem = ({ category }) => {
  const navigate = useNavigate();
  const { imageUrl, title } = category;
  return (
    <CategoryContainer>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <CategoryBodyContainer
        onClick={() => {
          navigate(`/shop/${title}`);
        }}
      >
        <h2>{title}</h2>
        <p>Shop Now</p>
      </CategoryBodyContainer>
    </CategoryContainer>
  );
};

export default CategoryItem;
