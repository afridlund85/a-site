import React from 'react'
import PropTypes from 'prop-types'

const NavButton = ({handleToggle}) => (
  <div className="nav-button" onClick={handleToggle}>
    <div className="burger">
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
    </div>
  </div>
)

NavButton.propTypes = {
  handleToggle: PropTypes.func.isRequired
}

export default NavButton
