import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class APIError extends Component {
  static propTypes = {
    hasError: PropTypes.bool,
    clearError: PropTypes.func
  }

  reloadSite() {
    window.location.reload()
  }

  render() {
    const { hasError, clearError } = this.props
    if (!hasError) return null
    return (
      <div className="Overlay">
        <div className="Modal">
          <div className="Modal-content">
            There was an error in the api call
          </div>
          <div className="Modal-action">
            <button className="Modal-button Modal-button--close" onClick={clearError}>
              Close
            </button>
            <button className="Modal-button Modal-button--reload" onClick={this.reloadSite}>
              Reload
            </button>
          </div>
        </div>
      </div>
    )
  }
}
