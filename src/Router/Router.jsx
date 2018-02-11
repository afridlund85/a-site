import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// import { TransitionGroup, CSSTransition } from 'react-transition-group'

import routes from './../routes.config.js'
import App from './../Layout'
import ScrollToTop from './ScrollToTop'
import RouteWithSubRoutes from './RouteWithSubRoutes'

const Router = () => (
  <BrowserRouter>
    <Route render={({location}) => (
      <ScrollToTop>
        <App>
          {/* <TransitionGroup id="main">
            <CSSTransition
              key={location.pathname}
              timeout={{enter: 300, exit: 200}}
              classNames="fade"
              appear
            > */}
              <Switch location={location}>
                {
                  routes.map((route, i) => {
                    return !route.sub
                      ? <Route key={i} {...route}  />
                      : <RouteWithSubRoutes key={i} {...route} />
                  })
                }
              </Switch>
            {/* </CSSTransition>
          </TransitionGroup> */}
        </App>
      </ScrollToTop>
    )}/>
  </BrowserRouter>
)

export default Router
