import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchCategories } from '../../../actions/categoryAction'

@connect(() => ({

}), { fetchCategories })
export default class CategoryContainer extends Component {
  componentWillMount() {
    this.props.fetchCategories()
  }
  render() {
    return (
      <div>
        <p>this is category</p>
      </div>
    )
  }
}

CategoryContainer.propTypes = {
  fetchCategories: PropTypes.func
}
