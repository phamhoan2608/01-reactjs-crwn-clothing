import { useNavigate, useParams } from "react-router-dom";
import "./category-page.styles.scss";
import { useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import ProductCard from "../../components/product-card/product-card.component";

const CategoryPage = () => {
  const navigate = useNavigate();
  const { categoryId } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <div>
      <h1>Category Details</h1>
      <h3 onClick={() => navigate("/shop")}>
        Shop &gt; <span>{categoryId}</span>
      </h3>
      <div className="products-container">
        {categoryId && categoriesMap[categoryId].map((product) => <ProductCard key={product.id} product={product} />)}
      </div>
    </div>
  );
};

export default CategoryPage;
