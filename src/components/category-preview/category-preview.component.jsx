import { useNavigate } from "react-router-dom";
import ProductCard from "../product-card/product-card.component";
import { ProductContainer } from "../../routes/category-page/category-page.styles";

export default function CategoryPreview({ title, products }) {
  const navigate = useNavigate();

  return (
    <div className="category-preview-container">
      <h2>
        <span
          onClick={() => {
            navigate(`/shop/${title}`);
          }}
        >
          {title}
        </span>
      </h2>
      <ProductContainer>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </ProductContainer>
    </div>
  );
}
