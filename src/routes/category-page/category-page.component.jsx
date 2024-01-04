import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ProductCard from '../../components/product-card/product-card.component';
import { ProductContainer } from './category-page.styles';
import { useSelector } from 'react-redux';

const CategoryPage = () => {
  const navigate = useNavigate();
  const { categoryId } = useParams();
  const categoriesMap = useSelector((state) => state.categories.categoriesMap);
  const [products, setProducts] = useState(categoriesMap[categoryId]);

  console.log('categoryId', categoryId);

  useEffect(() => {
    setProducts(categoriesMap[categoryId]);
  }, [categoryId, categoriesMap]);

  return (
    <div>
      <h1>Category Details</h1>
      <h3 onClick={() => navigate('/shop')}>
        Shop &gt; <span>{categoryId}</span>
      </h3>
      {/* <CategoriesPreview /> */}
      <ProductContainer>
        {products && products.map((product) => <ProductCard key={product.id} product={product} />)}
      </ProductContainer>
    </div>
  );
};

export default CategoryPage;
