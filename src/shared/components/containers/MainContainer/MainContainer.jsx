import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'

import Header from '../../presentation/Header/Header'
import CategoryContainer from '../CategoryContainer/CategoryContainer'
import Home from '../../presentation/Home/Home'
import APIError from '../../presentation/APIError/APIError'

import { fetchCategories } from '../../../actions/categoryAction'
import { fetchProducts } from '../../../actions/productAction'
import { resetApiError } from '../../../actions/errorAction'

@connect((state) => ({
  categories: state.categories,
  apiError: state.apiError
}), { fetchCategories, fetchProducts, resetApiError })
export default class MainContainer extends Component {
  static propTypes = {
    categories: PropTypes.arrayOf(PropTypes.shape({
      box_limit: PropTypes.number,
      hidden: PropTypes.bool,
      id: PropTypes.string,
      is_default: PropTypes.bool,
      recently_added: PropTypes.bool,
      title: PropTypes.string
    })),
    apiError: PropTypes.bool,
    fetchCategories: PropTypes.func,
    fetchProducts: PropTypes.func,
    resetApiError: PropTypes.func
  }

  static defaultProps = {
    categories: []
  }

  componentWillMount() {
    const { fetchCategories, fetchProducts } = this.props
    fetchCategories()
    fetchProducts()
  }
  render() {
    const { categories, apiError, resetApiError } = this.props
    return (
      <Router>
        <div>
          <Header categories={categories} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/category/:categoryId" component={CategoryContainer} />
          </Switch>
          <APIError hasError={apiError} clearError={resetApiError} />
        </div>
      </Router>
    )
  }
}
