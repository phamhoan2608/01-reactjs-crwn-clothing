import { useContext } from "react";

import { CategoriesContext } from "../../contexts/categories.context";

const CategoryPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <div className="category-preview-container">
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return <CategoryPreview key={title} title={title} products={products} />;
      })}
    </div>
  );
};

export default CategoryPreview;
