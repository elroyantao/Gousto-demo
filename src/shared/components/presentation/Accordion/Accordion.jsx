import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './Accordion.css'

export default class Accordion extends Component {
  static propTypes = {
    header: PropTypes.string,
    children: PropTypes.node
  }

  constructor(props) {
    super(props)
    this.state = {
      expandedHeight: 0,
      expanded: false
    }
  }

  componentDidMount() {
    this.updateExpandedHeight()
  }

  getContentHeight = () => this.accordionWrapper.scrollHeight

  handleToggle = () => {
    this.setState({
      expanded: !this.state.expanded
    })
  }

  updateExpandedHeight() {
    const newHeight = this.getContentHeight()
    if (newHeight === undefined) {
      return
    }

    if (newHeight !== this.state.expandedHeight) {
      this.setState({ expandedHeight: newHeight })
    }
  }

  render() {
    const { header, children } = this.props
    const { expandedHeight, expanded } = this.state
    return (
      <div className={styles.Accordion}>
        <div
          className={expanded ? styles['Accordion-header--open'] : styles['Accordion-header']}
          onClick={this.handleToggle}
        >
          { header }
        </div>
        <div
          className={styles['Accordion-wrapper']}
          ref={(element) => { this.accordionWrapper = element }}
          style={{ maxHeight: expanded ? expandedHeight : 0 }}
        >
          { children &&
            <div className={styles['Accordion-content']}>
              {children}
            </div>
          }
        </div>

      </div>
    )
  }
}
