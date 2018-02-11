import React from 'react'
import PropTypes from 'prop-types'

import NavMenu from './NavMenu'
import NavButton from './NavButton'

const Nav = ({isActive, handleToggle}) => (
  <div id="nav" className="column">
    <div
      id="nav-shadow"
      className={isActive ? 'show' : ''}
      onClick={handleToggle}
    ></div>
    <NavMenu isActive={isActive} handleToggle={handleToggle}/>
    <NavButton handleToggle={handleToggle}/>
  </div>
)

Nav.propTypes = {
  isActive: PropTypes.bool.isRequired,
  handleToggle: PropTypes.func.isRequired
}

export default Nav
