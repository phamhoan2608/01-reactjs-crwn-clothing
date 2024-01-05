import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCategories } from "../../store/categories/categories.action";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { Route, Routes } from "react-router-dom";
import CategoriesPreview from "../category-preview/categories-preview.component";
import CategoryPage from "../category-page/category-page.component";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoryMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      dispatch(setCategories(categoryMap));
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
