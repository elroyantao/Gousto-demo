import fetchMock from 'fetch-mock'
import * as actions from '../productAction'

const fetchAction = actions.fetchProducts()
const dispatch = jest.fn()

describe('product actions', () => {
  it('fetchProductsRequest()', () => {
    expect(actions.fetchProductsRequest()).toMatchSnapshot()
  })
  it('fetchProductsFailure()', () => {
    expect(actions.fetchProductsFailure()).toMatchSnapshot()
  })
  it('fetchProductsResponse()', () => {
    expect(actions.fetchProductsResponse([1, 2, 3])).toMatchSnapshot()
  })
  describe('fetchProducts() ', () => {
    // fetch.mockResponse(JSON.stringify({ access_token: '12345' }))
    afterEach(() => {
      fetchMock.restore()
      jest.clearAllMocks()
    })
    it('a successful fetch', () => {
      fetchMock.get('/api/products', {
        data: [1, 2, 3]
      })
      expect.assertions(3)
      return fetchAction(dispatch).then(() => {
        expect(fetchMock.lastCall()).toEqual(['/api/products', { method: 'GET' }])
        expect(dispatch).toHaveBeenCalledTimes(2)
        expect(dispatch.mock.calls).toMatchSnapshot()
      })
    })
    it('an unsuccessful fetch', () => {
      fetchMock.get('/api/products', 402)
      expect.assertions(3)
      return fetchAction(dispatch).then(() => {
        expect(fetchMock.lastCall()).toEqual(['/api/products', { method: 'GET' }])
        expect(dispatch).toHaveBeenCalledTimes(2)
        expect(dispatch.mock.calls).toMatchSnapshot()
      })
    })
  })
})
