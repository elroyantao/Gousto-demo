import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './Search.css'

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
      <div className={styles.Search}>
        <input
          type="search"
          className={styles['Search-input']}
          value={searchTerm}
          onChange={this.handleChange}
          placeholder="search product"
        />
      </div>
    )
  }
}
