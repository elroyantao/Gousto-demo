import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { fetchCategories } from '../../../actions/categoryAction'

@connect((state) => ({
  categories: state.categories || []
}), { fetchCategories })
export default class MainConatiner extends Component {
  componentWillMount() {
    this.props.fetchCategories()
  }
  render() {
    const { categories } = this.props
    return (
      <div>
        <ul>
          <li key="1">
            <span>{'title'}</span>
            <span>{'box_limit'}</span>
            <span>{'hidden'}</span>
            <span>{'recently_added'}</span>
            <span>{'is_default'}</span>
          </li>
          {
            categories.map((category) => (
              <li key={category.id}>
                <span>{category.title}</span>
                <span>{category.box_limit}</span>
                <span>{category.hidden ? 'true' : 'false' }</span>
                <span>{category.recently_added ? 'true' : 'false' }</span>
                <span>{category.is_default ? 'true' : 'false' }</span>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}

MainConatiner.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    box_limit: PropTypes.number,
    hidden: PropTypes.bool,
    id: PropTypes.string,
    is_default: PropTypes.bool,
    recently_added: PropTypes.bool,
    title: PropTypes.string
  })).isRequired,
  fetchCategories: PropTypes.func.isRequired
}
