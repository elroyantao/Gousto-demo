import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import MainConatiner from '../shared/components/containers/MainContainer/MainContainer'

export default class App extends Component {
  render() {
    return (
      <Router>
        <MainConatiner />
      </Router>
    )
  }
}
