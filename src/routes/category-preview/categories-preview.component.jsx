import { useSelector } from "react-redux";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import { selectCategories } from "../../store/categories/category.selector";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategories);

  return (
    <div className="category-preview-container">
      {categoriesMap.map(({ items, title }) => {
        return <CategoryPreview key={title} title={title.toLowerCase()} products={items} />;
      })}
    </div>
  );
};

export default CategoriesPreview;
