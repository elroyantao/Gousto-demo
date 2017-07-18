import React from 'react'
import { Route, Switch } from 'react-router'

import CategoryContainer from '../shared/components/containers/CategoryContainer/CategoryContainer'


export default function getRoutes() {
  return (
    <Switch>
      <Route exact path="/" component={CategoryContainer} />
      <Route path="/category/:categoryName" component={CategoryContainer} />
    </Switch>
  )
}
