import { useNavigate } from "react-router-dom";
import "../category-preview/category-preview.styles.scss";
import ProductCard from "../product-card/product-card.component";

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
      <div className="products-container">
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
}
