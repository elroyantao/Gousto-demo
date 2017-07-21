import * as actions from '../searchTermAction'

describe('searchTerm actions', () => {
  it('setSearchTerm()', () => {
    expect(actions.setSearchTerm('fake search term')).toMatchSnapshot()
  })
  it('clearSearchTerm()', () => {
    expect(actions.clearSearchTerm()).toMatchSnapshot()
  })
})
