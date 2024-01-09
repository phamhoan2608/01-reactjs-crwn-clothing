import { createSelector } from "reselect";

const selectCategoryReducer = (state) => state.categories;

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesArray = createSelector([selectCategories], (categories) => {
  return categories;
});

// export const selectCategoriesArray = (state) => {
//   console.log("selector fired");
//   return state.categories.categories;
// };
