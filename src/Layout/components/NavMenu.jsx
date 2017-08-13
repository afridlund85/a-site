import React from 'react'
import PropTypes from 'prop-types'
import routes from './../../routes'
import NavLi from './NavLi'
import './../SASS/nav.scss'

const NavMenu = ({isActive, handleClick}) => (
  <ul
    id="nav-menu"
    className={isActive ? 'slideIn' : 'slideOut'}
    onClick={handleClick}
  >
    {routes
      .filter(route => !!route.link)
      .map((route) => <NavLi key={route.path} {...route} />)
    }
  </ul>
)

NavMenu.propTypes = {
  isActive: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired
}

export default NavMenu
