import React from 'react'
import PropTypes from 'prop-types'
import routes from './../../../routes.config'
import NavLi from './NavLi'
import NavLiWithSub from './NavLiWithSub'

const NavMenu = ({isActive, handleToggle}) => (
  <div
    id="nav-menu"
    className={isActive ? 'slideIn' : 'slideOut'}
  >
    <div className="menu-header">
      <h2>
        Alexander Hall<br/>
        Photography
      </h2>
    </div>
    <ul>
      {routes
        .filter(route => !!route.link)
        .map((route) => {
          return !route.sub
            ? <NavLi key={route.path} handleToggle={handleToggle} {...route} />
            : <NavLiWithSub key={route.path} handleToggle={handleToggle} {...route} />
        })
      }
    </ul>
  </div>
)

NavMenu.propTypes = {
  isActive: PropTypes.bool.isRequired,
  handleToggle: PropTypes.func.isRequired
}

export default NavMenu
