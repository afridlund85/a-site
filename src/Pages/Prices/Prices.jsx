import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'

import './prices.scss'

const Prices = ({sub}) =>  (
  <div className="prices">
    {sub.map(route => (
        <Route
          key={route.path}
          path={route.path}
          render={props => <route.component {...props} />}
        />
    ))}
  </div>
)

Prices.propTypes = {
  sub: PropTypes.array.isRequired
}

export default Prices
