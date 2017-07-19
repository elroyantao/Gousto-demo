import createReducer from '../lib/create-reducer'

const initialState = []

export default createReducer(initialState, {
  FETCH_PRODUCTS_RESPONSE: (state, { products }) => products
})
