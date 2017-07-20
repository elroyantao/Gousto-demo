import testComponentHelper from '../../../../lib/test-helper'
import ProductList from '../ProductList'

describe('<ProductList/>', () => {
  const renderComponent = testComponentHelper(ProductList)
  const initialProps = {
    products: [
      { id: '1' },
      { id: '2' },
      { id: '3' },
      { id: '4' }
    ]
  }
  describe('@renders', () => {
    it('in default state', () => {
      expect(renderComponent(initialProps).getTree())
        .toMatchSnapshot()
    })
    it('with empty products', () => {
      expect(renderComponent({}).getTree())
        .toMatchSnapshot()
    })
  })
})
