import React from 'react'
import PropTypes from 'prop-types'

import './../sass/main.scss'

const Main = ({children}) => (
  <div id="main">
    {children}
  </div>
)

Main.propTypes = {
  children: PropTypes.node.isRequired
}

export default Main
