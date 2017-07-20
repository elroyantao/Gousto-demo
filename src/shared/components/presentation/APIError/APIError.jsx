import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './APIError.css'

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
      <div className={styles.Overlay}>
        <div className={styles.Modal}>
          <div className={styles['Modal-content']}>
            There was an error in the api call
          </div>
          <div className={styles['Modal-action']}>
            <button className={styles['Modal-button--close']} onClick={clearError}>
              Close
            </button>
            <button className={styles['Modal-button--reload']} onClick={this.reloadSite}>
              Reload
            </button>
          </div>
        </div>
      </div>
    )
  }
}
