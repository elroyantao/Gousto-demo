import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Accordion from '../Accordion/Accordion'

export default class Product extends Component {
  static propTypes = {
    product: PropTypes.object.isRequired
  }

  static defaultProps = {
    product: {}
  }

  render() {
    const { product } = this.props
    return (
      <li className="Product">
        <Accordion header={product.title}>
          <div className="Product-body">{product.description}</div>
        </Accordion>
      </li>
    )
  }
}
