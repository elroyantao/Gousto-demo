import { createStore } from 'redux'
import errorReducer from '../errorReducer'

describe('errorReducer', () => {
  it('should set the error on FETCH_CATEGORIES_FAILURE', () => {
    const store = createStore(errorReducer)
    expect(store.getState()).toEqual(false)
    store.dispatch({
      type: 'FETCH_CATEGORIES_FAILURE'
    })
    expect(store.getState()).toEqual(true)
  })
  it('should set the error on FETCH_PRODUCTS_FAILURE', () => {
    const store = createStore(errorReducer)
    expect(store.getState()).toEqual(false)
    store.dispatch({
      type: 'FETCH_PRODUCTS_FAILURE'
    })
    expect(store.getState()).toEqual(true)
  })
  it('should reset the error on RESET_API_ERROR', () => {
    const store = createStore(errorReducer)
    expect(store.getState()).toEqual(false)
    store.dispatch({
      type: 'FETCH_PRODUCTS_FAILURE'
    })
    expect(store.getState()).toEqual(true)
    store.dispatch({
      type: 'RESET_API_ERROR'
    })
    expect(store.getState()).toEqual(false)
  })
})
