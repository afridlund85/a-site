import React from 'react'
import { Route } from 'react-router-dom'

const RouteWithSubRoutes = (route) => {
  return (
    <Route path={route.path} render={props => (
      <route.component {...props} sub={route.sub} />
    )}/>
  )
}

export default RouteWithSubRoutes
