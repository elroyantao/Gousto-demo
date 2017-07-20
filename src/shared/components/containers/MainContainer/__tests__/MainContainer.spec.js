import testComponentHelper from '../../../../lib/test-helper'
import MainContainer from '../MainContainer'

describe('<MainContainer/>', () => {
  const renderComponent = testComponentHelper(MainContainer.WrappedComponent)
  const initialProps = {
    categories: [
      {
        id: '1',
        title: 'one'
      },
      {
        id: '2',
        title: 'two'
      }
    ],
    fetchCategories: jest.fn(),
    fetchProducts: jest.fn()
  }

  describe('@renders', () => {
    it('in default state', () => {
      expect(renderComponent(initialProps).getTree())
        .toMatchSnapshot()
    })
    it('when categories is empty', () => {
      expect(renderComponent({
        ...initialProps,
        categories: []
      }).getTree())
        .toMatchSnapshot()
    })
  })
  describe('@lifecycle', () => {
    describe('componentWillMount', () => {
      let renderedComponent
      beforeAll(() => {
        jest.clearAllMocks()
        renderedComponent = renderComponent(initialProps)
      })
      it('should call fetchProducts', () => {
        const { instance } = renderedComponent
        expect(instance.props.fetchProducts).toHaveBeenCalledTimes(1)
      })
      it('should call fetchCategories', () => {
        const { instance } = renderedComponent
        expect(instance.props.fetchCategories).toHaveBeenCalledTimes(1)
      })
    })
  })
})
