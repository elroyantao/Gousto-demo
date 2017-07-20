import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

export default class Header extends Component {
  static propTypes = {
    categories: PropTypes.arrayOf(PropTypes.shape({
      box_limit: PropTypes.number,
      hidden: PropTypes.bool,
      id: PropTypes.string,
      is_default: PropTypes.bool,
      recently_added: PropTypes.bool,
      title: PropTypes.string
    }))
  }.isRequired

  static defaultProps = {
    categories: []
  }

  renderNavItem(category) {
    return (
      <NavLink
        to={`/category/${category.id}`}
        key={category.id}
        activeStyle={{
          fontWeight: 'bold',
          color: 'red'
        }}
      >
        {category.title}
      </NavLink>
    )
  }

  render() {
    return (
      <nav>
        {this.props.categories.map(this.renderNavItem)}
      </nav>
    )
  }
}
