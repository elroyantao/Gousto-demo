import testComponentHelper from '../../../../lib/test-helper'
import NoItemFound from '../NoItemFound'

describe('<NoItemFound/>', () => {
  const renderComponent = testComponentHelper(NoItemFound)

  describe('@renders', () => {
    it('in default state', () => {
      expect(renderComponent({}).getTree())
        .toMatchSnapshot()
    })
  })
})
