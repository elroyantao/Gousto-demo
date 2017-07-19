import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import ProductList from '../../presentation/ProductList/ProductList'
import Search from '../../presentation/Search/Search'
import NoItemFound from '../../presentation/NoItemFound/NoItemFound'

import { setSearchTerm, clearSearchTerm } from '../../../actions/searchTermAction'

@connect((state) => ({
  categories: state.categories,
  products: state.products,
  searchTerm: state.searchTerm
}), { setSearchTerm, clearSearchTerm })
export default class CategoryContainer extends Component {

  componentWillUpdate({ match: { params: { categoryId: newCategoryId } } }) {
    const { match: { params: { categoryId } }, clearSearchTerm } = this.props
    if (categoryId !== newCategoryId) clearSearchTerm()
  }

  filterProducts() {
    const { match, products, searchTerm } = this.props
    const search = searchTerm.toLowerCase()

    return products.filter((product) => {
      return this.matchSearch(product, search) &&
        product.categories.some((category) => {
          return category.id === match.params.categoryId
        })
    })
  }

  matchSearch(product, search) {
    return product.title.toLowerCase().includes(search)
      || product.description.toLowerCase().includes(search)
      || search === ''
  }

  render() {
    const products = this.filterProducts()
    const { categories, match, searchTerm, setSearchTerm } = this.props
    const selectedCategory = categories && categories.find((category) =>
      category.id === match.params.categoryId
    )
    const name = selectedCategory && selectedCategory.title
    return (
      <div>
        <p>this is category {name}</p>
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        { products.length ?
          <ProductList products={products} /> :
          <NoItemFound />
        }
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
  products: PropTypes.array,
  setSearchTerm: PropTypes.func,
  clearSearchTerm: PropTypes.func,
  searchTerm: PropTypes.string
}
