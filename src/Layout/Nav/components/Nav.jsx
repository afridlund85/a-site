import React from 'react'
import PropTypes from 'prop-types'

import Menu from './Menu'
import MenuButton from './MenuButton'

const Nav = ({isActive, toggleMenu}) => (
  <div id="nav" className="column">
    <div
      id="nav-shadow"
      className={isActive ? 'show' : ''}
      onClick={toggleMenu}
    ></div>
    <Menu isActive={isActive} toggleMenu={toggleMenu}/>
    <MenuButton toggleMenu={toggleMenu}/>
  </div>
)

Nav.propTypes = {
  isActive: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired
}

export default Nav
