import testComponentHelper from '../../../../lib/test-helper'
import Header from '../Header'

describe('<Header/>', () => {
  const renderComponent = testComponentHelper(Header)
  it('render in default state', () => {
    expect(renderComponent({}).getTree()).toMatchSnapshot()
  })
})
