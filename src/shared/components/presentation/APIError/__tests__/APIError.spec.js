import testComponentHelper from '../../../../lib/test-helper'
import APIError from '../APIError'

describe('<APIError />', () => {
  const initialState = {
    hasError: false,
    clearError: jest.fn()
  }
  const renderComponent = testComponentHelper(APIError)
  describe('@renders', () => {
    it('in default state', () => {
      expect(renderComponent(initialState).getTree())
        .toMatchSnapshot()
    })
    it('in error state', () => {
      expect(renderComponent({
        ...initialState,
        hasError: true
      }).getTree())
        .toMatchSnapshot()
    })
  })
  describe('@events', () => {
    let renderedComponent
    beforeAll(() => {
      renderedComponent = renderComponent({
        ...initialState,
        hasError: true
      })
    })
    describe('onClick reload button', () => {
      window.location.reload = jest.fn()

      it('should call window.location.reload()', () => {
        const { wrapper } = renderedComponent
        expect(window.location.reload).not.toHaveBeenCalled()
        wrapper.find('.Modal-button--reload').simulate('click')
        expect(window.location.reload).toHaveBeenCalledTimes(1)
      })
    })
    describe('onClick close button', () => {
      it('should call clearError', () => {
        const { instance, wrapper } = renderedComponent
        expect(instance.props.clearError).not.toHaveBeenCalled()
        wrapper.find('.Modal-button--close').simulate('click')
        expect(instance.props.clearError).toHaveBeenCalledTimes(1)
      })
    })
  })
})
