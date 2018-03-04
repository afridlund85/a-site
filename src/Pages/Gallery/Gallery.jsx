import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'

import './gallery.scss'

const Gallery = ({sub}) =>  (
  <div>
    {sub.map(route => (
        <Route
          key={route.path}
          path={route.path}
          render={props => <route.component {...props} />}
        />
    ))}
  </div>
)

Gallery.propTypes = {
  sub: PropTypes.array.isRequired
}

export default Gallery
