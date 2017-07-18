import createReducer from '../lib/create-reducer'

const initialState = []

export default createReducer(initialState, {
  FETCH_CATEGORIES_RESPONSE: (state, { categories }) => categories
})
