import testComponentHelper from '../../../../lib/test-helper'
import Header from '../Header'

describe('<Header/>', () => {
  const renderComponent = testComponentHelper(Header)
  const initialProps = {
    categories: [
      {
        id: '1',
        title: 'one'
      },
      {
        id: 2,
        title: 'two'
      }
    ]
  }
  describe('@renders', () => {
    it('in default state', () => {
      expect(renderComponent(initialProps).getTree())
        .toMatchSnapshot()
    })
    it('with empty categories', () => {
      expect(renderComponent({}).getTree())
        .toMatchSnapshot()
    })
  })
})
