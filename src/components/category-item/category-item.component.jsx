import { useNavigate } from "react-router-dom";
import { CategoryBodyContainer, CategoryContainer } from "./category-item.styles";
import { URL_MAPPING } from "../../utils/constants";

const CategoryItem = ({ category }) => {
  const navigate = useNavigate();
  const { imageUrl, title, path } = category;
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
          navigate(`${URL_MAPPING.SHOP}/${path}`, { state: { title: title } });
        }}
      >
        <h2>{title}</h2>
        <p>Shop Now</p>
      </CategoryBodyContainer>
    </CategoryContainer>
  );
};

export default CategoryItem;
