import { createSelector } from 'reselect'

const selectCategoryReducer = (state) => state.categories

// Memorizing the categories of Category selector using CreateSlector Method.
export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
)

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) =>
    categories.reduce((acc, category) => {
      const { title, items } = category
      acc[title.toLowerCase()] = items
      return acc
    }, {})
)
