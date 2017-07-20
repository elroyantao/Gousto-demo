import testComponentHelper from '../../../../lib/test-helper'
import Search from '../Search'

describe('<Search/>', () => {
  const renderComponent = testComponentHelper(Search)
  const initialProps = {
    searchTerm: 'fake term',
    onSearch: jest.fn()
  }

  describe('@renders', () => {
    it('in default state', () => {
      expect(renderComponent(initialProps).getTree())
        .toMatchSnapshot()
    })
    it('with empty searchTerm', () => {
      expect(renderComponent({
        ...initialProps,
        searchTerm: ''
      }).getTree())
        .toMatchSnapshot()
    })
  })

  describe('@events', () => {
    describe('onChange imput', () => {
      it('should call onSearch', () => {
        const changeEvent = { target: { value: 'changed search' } }
        const { wrapper, instance } = renderComponent(initialProps)
        expect(instance.props.onSearch).not.toHaveBeenCalled()
        wrapper.find('input').simulate('change', changeEvent)
        expect(instance.props.onSearch).toHaveBeenCalledTimes(1)
        expect(instance.props.onSearch).toHaveBeenLastCalledWith(changeEvent.target.value)
      })
    })
  })
})
