import { createStore } from 'redux'
import productReducer from '../productReducer'

describe('productReducer', () => {
  it('should set the products', () => {
    const store = createStore(productReducer)
    const products = [1, 2, 3, 4]
    expect(store.getState()).toEqual([])
    store.dispatch({
      type: 'FETCH_PRODUCTS_RESPONSE',
      products
    })
    expect(store.getState()).toEqual(products)
  })
})
