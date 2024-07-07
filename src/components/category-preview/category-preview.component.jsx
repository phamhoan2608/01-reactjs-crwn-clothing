import { useNavigate } from "react-router-dom";
import ProductCard from "../product-card/product-card.component";
import { ProductContainer } from "../../routes/category-page/category-page.styles";
import { useSelector } from "react-redux";
import { selectCategoriesIsLoading } from "../../store/categories/category.selector";
import Spinner from "../spinner/spinner.component";
import { URL_MAPPING } from "../../utils/constants";

export default function CategoryPreview({ title, path, products }) {
  const navigate = useNavigate();
  const isLoading = useSelector(selectCategoriesIsLoading);

  return (
    <div className="category-preview-container">
      <h2>
        <span
          onClick={() => {
            navigate(`${URL_MAPPING.SHOP}/${path}`, { state: { title: title } });
          }}
        >
          {title}
        </span>
      </h2>
      {isLoading ? (
        <Spinner />
      ) : (
        <ProductContainer>
          {products
            .filter((_, idx) => idx < 4)
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </ProductContainer>
      )}
    </div>
  );
}
