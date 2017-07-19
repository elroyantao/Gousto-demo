import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

@connect((state) => ({
  categories: state.categories
}), {})
export default class CategoryContainer extends Component {
  render() {
    const { categories, match } = this.props
    const selectedCategory = categories && categories.find((category) =>
      category.id === match.params.categoryId
    )
    const name = selectedCategory && selectedCategory.title
    return (
      <div>
        <p>this is category {name}</p>
      </div>
    )
  }
}

CategoryContainer.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    box_limit: PropTypes.number,
    hidden: PropTypes.bool,
    id: PropTypes.string,
    is_default: PropTypes.bool,
    recently_added: PropTypes.bool,
    title: PropTypes.string
  })).isRequired,
  match: PropTypes.object
}
