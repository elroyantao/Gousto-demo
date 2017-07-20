import React, { Component } from 'react'
import PropTypes from 'prop-types'

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
      <div className="Accordion">
        <div
          className="Accordion-header"
          onClick={this.handleToggle}
          style={{ cursor: children ? 'pointer' : 'auto' }}
        >
          { header }
        </div>
        <div
          className="Accordion-wrapper"
          ref={(element) => { this.accordionWrapper = element }}
          style={{ maxHeight: expanded ? expandedHeight : 0, overflow: 'hidden' }}
        >
          { children &&
            <div className="Accordion-content">
              {children}
            </div>
          }
        </div>

      </div>
    )
  }
}
