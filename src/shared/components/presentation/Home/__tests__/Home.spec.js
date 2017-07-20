import testComponentHelper from '../../../../lib/test-helper'
import Home from '../Home'

describe('<Home/>', () => {
  const renderComponent = testComponentHelper(Home)
  describe('@renders', () => {
    it('in default state', () => {
      expect(renderComponent({}).getTree())
        .toMatchSnapshot()
    })
  })
})
