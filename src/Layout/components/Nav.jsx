import React from 'react'
import PropTypes from 'prop-types'

import NavMenu from './NavMenu'
import NavButton from './NavButton'

const Nav = ({isActive, handleClick}) => (
  <div id="nav" className="column">
    <div
      id="nav-shadow"
      className={isActive ? 'show' : ''}
      onClick={handleClick}
    ></div>
    <NavMenu isActive={isActive} handleClick={handleClick}/>
    <NavButton handleClick={handleClick}/>
  </div>
)

Nav.propTypes = {
  isActive: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired
}

export default Nav
