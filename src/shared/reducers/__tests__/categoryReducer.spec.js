import { createStore } from 'redux'
import categoryReducer from '../categoryReducer'

describe('categoryReducer', () => {
  it('should set the categories', () => {
    const store = createStore(categoryReducer)
    const categories = [1, 2, 3]
    expect(store.getState()).toEqual([])
    store.dispatch({
      type: 'FETCH_CATEGORIES_RESPONSE',
      categories
    })
    expect(store.getState()).toEqual(categories)
  })
})
