import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductCard from "../../components/product-card/product-card.component";
import { ProductContainer } from "./category-page.styles";
import { useSelector } from "react-redux";
import { selectCategories } from "../../store/categories/category.selector";

const CategoryPage = () => {
  const navigate = useNavigate();
  const { categoryId } = useParams();
  const categoriesMap = useSelector(selectCategories);
  const [products, setProducts] = useState(categoriesMap);

  useEffect(() => {
    if (categoriesMap) {
      setProducts(categoriesMap.filter(({ title }) => title.toLowerCase() === categoryId));
    }
  }, [categoryId, categoriesMap]);

  return (
    <div>
      <h1>Category Details</h1>
      <h3 onClick={() => navigate("/shop")}>
        Shop &gt; <span>{categoryId}</span>
      </h3>
      <ProductContainer>
        {products.length > 0 && products[0]?.items.map((product) => <ProductCard key={product.id} product={product} />)}
      </ProductContainer>
    </div>
  );
};

export default CategoryPage;
