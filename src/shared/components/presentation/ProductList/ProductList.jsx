import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Product from '../Product/Product'

export default class ProductList extends Component {
  render() {
    const { products } = this.props
    return (
      <ul className="ProductList">
        {products.map((product) => <Product product={product} />)}
      </ul>
    )
  }
}

ProductList.propTypes = {
  products: PropTypes.array
}
