import * as actions from '../errorAction'

describe('error actions', () => {
  it('resetApiError()', () => {
    expect(actions.resetApiError()).toMatchSnapshot()
  })
})
