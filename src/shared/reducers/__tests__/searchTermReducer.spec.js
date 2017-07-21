import { createStore } from 'redux'
import searchTermReducer from '../searchTermReducer'

describe('searchTermReducer', () => {
  it('should set the searchTerm', () => {
    const store = createStore(searchTermReducer)
    const searchTerm = 'fake searchTerm'
    expect(store.getState()).toEqual('')
    store.dispatch({
      type: 'SET_SEARCH_TERM',
      searchTerm
    })
    expect(store.getState()).toEqual(searchTerm)
  })
  it('should clear the searchTerm', () => {
    const store = createStore(searchTermReducer)
    const searchTerm = 'fake searchTerm'
    expect(store.getState()).toEqual('')
    store.dispatch({
      type: 'SET_SEARCH_TERM',
      searchTerm
    })
    expect(store.getState()).toEqual(searchTerm)
    store.dispatch({
      type: 'CLEAR_SEARCH_TERM',
      searchTerm
    })
    expect(store.getState()).toEqual('')
  })
})
