import createReducer from '../lib/create-reducer'

const initialState = false

export default createReducer(initialState, {
  FETCH_CATEGORIES_FAILURE: () => true,
  FETCH_PRODUCTS_FAILURE: () => true,
  RESET_API_ERROR: () => false
})
