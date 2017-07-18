import createReducer from '../lib/create-reducer'

const initialState = '<placeholder>'

export default createReducer(initialState, {
  SET_NAME: (state, { name }) => name,
  CLEAR_NAME: () => ''
})
