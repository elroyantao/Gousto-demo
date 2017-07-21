import fetchMock from 'fetch-mock'
import * as actions from '../categoryAction'

const fetchAction = actions.fetchCategories()
const dispatch = jest.fn()

describe('category actions', () => {
  it('fetchCategoriesRequest()', () => {
    expect(actions.fetchCategoriesRequest()).toMatchSnapshot()
  })
  it('fetchCategoriesFailure()', () => {
    expect(actions.fetchCategoriesFailure()).toMatchSnapshot()
  })
  it('fetchCategoriesResponse()', () => {
    expect(actions.fetchCategoriesResponse([1, 2, 3])).toMatchSnapshot()
  })
  describe('fetchCategories() ', () => {
    afterEach(() => {
      fetchMock.restore()
      jest.clearAllMocks()
    })
    it('a successful fetch', () => {
      fetchMock.get('/api/categories', {
        data: [1, 2, 3]
      })
      expect.assertions(3)
      return fetchAction(dispatch).then(() => {
        expect(fetchMock.lastCall()).toEqual(['/api/categories', { method: 'GET' }])
        expect(dispatch).toHaveBeenCalledTimes(2)
        expect(dispatch.mock.calls).toMatchSnapshot()
      })
    })
    it('an unsuccessful fetch', () => {
      fetchMock.get('/api/categories', 402)
      expect.assertions(3)
      return fetchAction(dispatch).then(() => {
        expect(fetchMock.lastCall()).toEqual(['/api/categories', { method: 'GET' }])
        expect(dispatch).toHaveBeenCalledTimes(2)
        expect(dispatch.mock.calls).toMatchSnapshot()
      })
    })
  })
})
