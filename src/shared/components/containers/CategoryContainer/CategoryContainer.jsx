import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import ProductList from '../../presentation/ProductList/ProductList'

@connect((state) => ({
  categories: state.categories,
  products: state.products
}), {})
export default class CategoryContainer extends Component {
  filterProducts() {
    const { match, products } = this.props
    return products.filter((product) => {
      return product.categories.some((category) => {
        return category.id === match.params.categoryId
      })
    })
  }

  render() {
    const products = this.filterProducts()
    const { categories, match } = this.props
    const selectedCategory = categories && categories.find((category) =>
      category.id === match.params.categoryId
    )
    const name = selectedCategory && selectedCategory.title
    return (
      <div>
        <p>this is category {name}</p>
        <ProductList products={products} />
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
  match: PropTypes.object,
  products: PropTypes.array
}
