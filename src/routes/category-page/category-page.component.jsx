import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductCard from "../../components/product-card/product-card.component";
import { ProductContainer } from "./category-page.styles";
import { useSelector } from "react-redux";
import { selectCategoriesArray, selectCategoriesIsLoading } from "../../store/categories/category.selector";
import Spinner from "../../components/spinner/spinner.component";

const CategoryPage = () => {
  const navigate = useNavigate();
  const { categoryId } = useParams();
  const location = useLocation();
  const title = location.state && location.state.title ? location.state.title : "Empty";
  const categoriesMap = useSelector(selectCategoriesArray);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const [products, setProducts] = useState(categoriesMap);

  useEffect(() => {
    if (categoriesMap) {
      setProducts(categoriesMap.filter(({ path }) => path === categoryId));
    }
  }, [categoryId, categoriesMap]);

  return (
    <div>
      <h1>Category Details</h1>
      <h3 onClick={() => navigate("/shop")}>
        Shop &gt; <span>{title}</span>
      </h3>
      {isLoading ? (
        <Spinner />
      ) : (
        <ProductContainer>
          {products.length > 0 &&
            products[0]?.items.map((product) => <ProductCard key={product.id} product={product} />)}
        </ProductContainer>
      )}
    </div>
  );
};

export default CategoryPage;
