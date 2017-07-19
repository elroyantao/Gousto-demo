import React from 'react'
import { Route, Switch } from 'react-router'

import CategoryContainer from './components/containers/CategoryContainer/CategoryContainer'
import Home from './components/presentation/Home/Home'



export default function getRoutes({ location }) {
  return (
    <Switch location={location}>
      <Route exact path="/" component={Home} />
      <Route path="/category/:categoryId" component={CategoryContainer} />
    </Switch>
  )
}
