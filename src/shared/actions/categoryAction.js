import 'isomorphic-fetch'

const fetchCategoriesRequest = () => ({
  type: 'FETCH_CATEGORIES_REQUEST'
})

const setCategories = (categories) => ({
  type: 'FETCH_CATEGORIES_RESPONSE',
  categories
})

export const fetchCategories = () => (dispatch) => {
  dispatch(fetchCategoriesRequest())
  return fetch('/api/categories', { method: 'GET' })
  .then((res) => {
    if (!res.ok) throw Error(res.statusText)
    return res.json()
  })
  .then((res) => {
    dispatch(setCategories(res.data))
  })
}
