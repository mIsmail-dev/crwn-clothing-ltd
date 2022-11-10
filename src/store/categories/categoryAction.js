import { CATEGORIES_ACTION_TYPES } from './categoryTypes'
import { createAction } from '../../utils/reducer/reducer.utils'

export const setCategoriesMap = (categoriesMap) => {
  return createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP, categoriesMap)
}
