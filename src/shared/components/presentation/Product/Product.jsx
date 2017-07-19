import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Product extends Component {
  render() {
    const { product } = this.props
    return (
      <li className="Product">
        <div className="Product-header">{product.title}</div>
        <div className="Product-body">{product.description}</div>
      </li>
    )
  }
}

Product.propTypes = {
  product: PropTypes.object
}
