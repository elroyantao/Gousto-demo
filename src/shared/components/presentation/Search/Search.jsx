import React, { Component } from 'react'
import PropTypes from 'prop-types'


export default class Search extends Component {
  static propTypes = {
    searchTerm: PropTypes.string.isRequired,
    onSearch: PropTypes.func.isRequired
  }

  static defaultProps = {
    searchTerm: ''
  }

  handleChange = (event) => {
    this.props.onSearch(event.target.value)
  }
  render() {
    const { searchTerm } = this.props
    return (
      <div>
        <input
          type="search"
          value={searchTerm}
          onChange={this.handleChange}
        />
      </div>
    )
  }
}
