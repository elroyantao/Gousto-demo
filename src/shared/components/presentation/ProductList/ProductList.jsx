import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Product from '../Product/Product'

export default class ProductList extends Component {
  static propTypes = {
    products: PropTypes.array
  }

  static defaultProps = {
    products: []
  }

  render() {
    const { products } = this.props
    return (
      <ul className="ProductList">
        {products.map((product) => <Product key={product.id} product={product} />)}
      </ul>
    )
  }
}
