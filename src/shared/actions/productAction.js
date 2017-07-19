import 'isomorphic-fetch'

const fetchProductsRequest = () => ({
  type: 'FETCH_PRODUCTS_REQUEST'
})

const setProducts = (products) => ({
  type: 'FETCH_PRODUCTS_RESPONSE',
  products
})

export const fetchProducts = () => (dispatch) => {
  dispatch(fetchProductsRequest())
  return fetch('/api/products', { method: 'GET' })
  .then((res) => {
    if (!res.ok) throw Error(res.statusText)
    return res.json()
  })
  .then((res) => {
    dispatch(setProducts(res.data))
  })
}
