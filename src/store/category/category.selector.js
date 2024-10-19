import { createSelector } from "reselect";

const selectCategoryReducer = (state) =>state.categories
//extracting the categories array from the Redux state.

//memoizes the extracted array of categories.
export const selectCategories = createSelector(
  [selectCategoryReducer],
  (catagoriesSlice) => catagoriesSlice.categories

)

// transforms the array into a new data structure (a map).
//memoizes the transformation of that array into a map.
export const selectCategoriesMap = createSelector(
    [selectCategories],
    (categories)=>
    categories.reduce(
      (acc, { title, items }) => {
        acc[title.toLowerCase()] = items;
        return acc;
      },
      {}
    )
);
export const selectIsLoading = createSelector(
  [selectCategoryReducer],
  (catagoriesSlice) => catagoriesSlice.isLoading
)