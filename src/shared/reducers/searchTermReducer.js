import createReducer from '../lib/create-reducer'

const initialState = ''

export default createReducer(initialState, {
  SET_SEARCH_TERM: (state, { searchTerm }) => searchTerm,
  CLEAR_SEARCH_TERM: () => ''
})
