import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import routes from './routes'
import App from './Layout'
import ScrollToTop from './Layout/containers/ScrollToTop'

const Router = () => (
  <BrowserRouter>
    <ScrollToTop>
      <App>
        <Switch>
          {routes.map(({path, exact, component: Component}) => (
            <Route key={path} path={path} exact={exact} render={(props) => (
                <Component {...props}/>
            )} />
          ))}
        </Switch>
      </App>
    </ScrollToTop>
  </BrowserRouter>
)

export default Router
