import React, { Component } from 'react'

export default class Home extends Component {
  componentDidMount() {
    console.log('mounted')
  }
  render() {
    console.log(this.props.location);

    return (
      <div>
        <p> this is the home page</p>
      </div>
    )
  }
}
