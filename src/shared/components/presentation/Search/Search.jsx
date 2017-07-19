import React, { Component } from 'react'
import PropTypes from 'prop-types'


export default class Search extends Component {
  handleChange = (event) => {
    this.props.setSearchTerm(event.target.value)
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

Search.propTypes = {
  searchTerm: PropTypes.string,
  setSearchTerm: PropTypes.func
}
