import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'


import Header from '../../containers/Header/Header'
import { fetchCategories } from '../../../actions/categoryAction'
import { fetchProducts } from '../../../actions/productAction'
// import getRoutes from '../../../routes'
import CategoryContainer from '../CategoryContainer/CategoryContainer'
import Home from '../../presentation/Home/Home'

@connect((state) => ({
  categories: state.categories
}), { fetchCategories, fetchProducts })
export default class MainConatiner extends Component {
  componentWillMount() {
    const { fetchCategories, fetchProducts } = this.props
    fetchCategories()
    fetchProducts()
  }
  render() {
    const { categories } = this.props
    return (
      <Router>
        <div>
          <Header categories={categories} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/category/:categoryId" component={CategoryContainer} />
          </Switch>
        </div>
      </Router>
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
  fetchCategories: PropTypes.func.isRequired,
  fetchProducts: PropTypes.func.isRequired
}
