import testComponentHelper from '../../../../lib/test-helper'
import Product from '../Product'

describe('<Product/>', () => {
  const renderComponent = testComponentHelper(Product)
  const initialProps = {
    product: {
      title: 'this is the title',
      description: 'this is the description'
    }
  }
  describe('@renders', () => {
    it('in default state', () => {
      expect(renderComponent(initialProps).getTree())
        .toMatchSnapshot()
    })
    it('with empty product', () => {
      expect(renderComponent({}).getTree())
        .toMatchSnapshot()
    })
  })
})
