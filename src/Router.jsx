import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import routes from './routes'
import App from './Layout'
import ScrollToTop from './Layout/containers/ScrollToTop'

const Router = () => (
  <BrowserRouter>
    <Route render={({location}) => (
      <ScrollToTop>
        <App>
          <TransitionGroup className="main">
            <CSSTransition
              key={location.pathname}
              timeout={{enter: 300, exit: 200}}
              classNames="fade"
              appear
            >
              <Switch location={location}>
                {routes.map(({path, exact, component: Component}) => (
                    <Route key={path} path={path} exact={exact} component={Component} />
                ))}
              </Switch>
          </CSSTransition>
          </TransitionGroup>
        </App>
      </ScrollToTop>
    )}/>
  </BrowserRouter>
)

export default Router
