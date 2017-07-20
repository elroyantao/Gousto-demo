import 'isomorphic-fetch'

const fetchProductsRequest = () => ({
  type: 'FETCH_PRODUCTS_REQUEST'
})

const fetchProductsResponse = (products) => ({
  type: 'FETCH_PRODUCTS_RESPONSE',
  products
})

const fetchProductsFailure = () => ({
  type: 'FETCH_PRODUCTS_FAILURE'
})

export const fetchProducts = () => (dispatch) => {
  dispatch(fetchProductsRequest())
  return fetch('/api/products', { method: 'GET' })
  .then((res) => {
    if (!res.ok) throw Error(res.statusText)
    return res.json()
  })
  .then((res) => {
    dispatch(fetchProductsResponse(res.data))
  })
  .catch(() => {
    dispatch(fetchProductsFailure())
  })
}
