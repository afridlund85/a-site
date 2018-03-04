import React from 'react'
import PropTypes from 'prop-types'
import routes from './../../../routes.config'
import List from './List'

const Menu = ({isActive, toggleMenu}) => (
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
    <List routes={routes} toggleMenu={toggleMenu}/>
  </div>
)

Menu.propTypes = {
  isActive: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired
}

export default Menu
