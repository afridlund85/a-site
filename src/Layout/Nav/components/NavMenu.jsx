import React from 'react'
import PropTypes from 'prop-types'
import routes from './../../../routes.config'
import NavLi from './NavLi'
import NavLiWithSub from './NavLiWithSub'

const NavMenu = ({isActive, handleToggle}) => (
  <ul
    id="nav-menu"
    className={isActive ? 'slideIn' : 'slideOut'}
  >
    <div>
      <h2>
        Alexander Hall<br/>
        Photography
      </h2>
    </div>
    {routes
      .filter(route => !!route.link)
      .map((route) => {
        return !route.sub
          ? <NavLi key={route.path} handleToggle={handleToggle} {...route} />
          : <NavLiWithSub key={route.path} handleToggle={handleToggle} {...route} />
      })
    }
  </ul>
)

NavMenu.propTypes = {
  isActive: PropTypes.bool.isRequired,
  handleToggle: PropTypes.func.isRequired
}

export default NavMenu
