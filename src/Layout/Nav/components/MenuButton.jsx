import React from 'react'
import PropTypes from 'prop-types'

const MenuButton = ({toggleMenu}) => (
  <div className="nav-button" onClick={toggleMenu}>
    <div className="burger">
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
    </div>
  </div>
)

MenuButton.propTypes = {
  toggleMenu: PropTypes.func.isRequired
}

export default MenuButton
