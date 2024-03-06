import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCategoriesStart } from "../../store/categories/categories.action";
import { Route, Routes } from "react-router-dom";
import CategoriesPreview from "../category-preview/categories-preview.component";
import CategoryPage from "../category-page/category-page.component";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoryMap = async () => {
      dispatch(fetchCategoriesStart());
    };

    getCategoryMap();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":categoryId" element={<CategoryPage />} />
    </Routes>
  );
};

export default Shop;
