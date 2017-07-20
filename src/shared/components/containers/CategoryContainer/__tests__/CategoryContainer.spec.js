import testComponentHelper from '../../../../lib/test-helper'
import CategoryContainer from '../CategoryContainer'

describe('<CategoryContainer/>', () => {
  const renderComponent = testComponentHelper(CategoryContainer.WrappedComponent)
  const initialProps = {
    products: [
      {
        id: '1',
        title: 'title 1',
        description: 'description 1',
        categories: [{ id: 'fake-id' }]
      },
      {
        id: '2',
        title: 'title 2',
        description: 'description 2 ',
        categories: [{ id: 'fake-id-diff' }]
      },
      {
        id: '3',
        title: 'title 3 search tItle',
        description: 'description 3',
        categories: [{ id: 'fake-id' }]
      },
      {
        id: '4',
        title: 'title 4',
        description: 'description 4 search description',
        categories: [{ id: 'fake-id' }]
      }
    ],
    categories: [
      {
        id: 'fake-id',
        title: 'one'
      },
      {
        id: 'fake-id-diff',
        title: 'two'
      },
      {
        id: 'fake-id-no-products',
        title: 'No Products'
      }
    ],
    searchTerm: '',
    match: {
      params: { categoryId: 'fake-id' }
    },
    setSearchTerm: jest.fn(),
    clearSearchTerm: jest.fn()
  }

  describe('@renders', () => {
    it('in default state', () => {
      const { wrapper, getTree } = renderComponent(initialProps)
      const productsShown = wrapper.find('ProductList').props().products
      expect(productsShown.length).toBe(3)
      expect(getTree())
        .toMatchSnapshot()
    })
    it('when no products for the matched category', () => {
      const { getTree } = renderComponent({
        ...initialProps,
        match: {
          params: { categoryId: 'fake-id-no-products' }
        }
      })
      expect(getTree())
        .toMatchSnapshot()
    })
    it('when 1 products matches category and search matches title', () => {
      const { wrapper, getTree } = renderComponent({
        ...initialProps,
        searchTerm: 'search title'
      })
      const productsShown = wrapper.find('ProductList').props().products
      expect(productsShown.length).toBe(1)
      expect(productsShown[0].id).toBe('3')
      expect(getTree())
        .toMatchSnapshot()
    })
    it('when 1 products matches category and search matches description', () => {
      const { wrapper, getTree } = renderComponent({
        ...initialProps,
        searchTerm: 'search dEscription'
      })
      const productsShown = wrapper.find('ProductList').props().products
      expect(productsShown.length).toBe(1)
      expect(productsShown[0].id).toBe('4')
      expect(getTree())
        .toMatchSnapshot()
    })
  })
  describe('@lifecycle', () => {
    describe('componentWillUpdate', () => {
      let renderedComponent
      beforeAll(() => {
        jest.clearAllMocks()
        renderedComponent = renderComponent(initialProps)
      })
      it('should not call clearSearchTerm when the categoryId does not change', () => {
        const { instance, wrapper } = renderedComponent
        expect(instance.props.clearSearchTerm).not.toHaveBeenCalled()
        wrapper.setProps({ searchTerm: 'is changed' })
        expect(instance.props.clearSearchTerm).not.toHaveBeenCalled()
      })
      it('should call clearSearchTerm when the categoryId change', () => {
        const { instance, wrapper } = renderedComponent
        expect(instance.props.clearSearchTerm).not.toHaveBeenCalled()
        wrapper.setProps({ match: { params: { categoryId: 'will-change' } } })
        expect(instance.props.clearSearchTerm).toHaveBeenCalledTimes(1)
      })
    })
  })
  describe('@events', () => {
    describe('onSearch search', () => {
      it('should call setSearchTerm', () => {
        const searchTerm = 'new search term'
        const { instance, wrapper } = renderComponent(initialProps)
        expect(instance.props.setSearchTerm).not.toHaveBeenCalled()
        wrapper.find('Search').simulate('search', searchTerm)
        expect(instance.props.setSearchTerm).toHaveBeenCalledTimes(1)
        expect(instance.props.setSearchTerm).toHaveBeenLastCalledWith(searchTerm)
      })
    })
  })
})
