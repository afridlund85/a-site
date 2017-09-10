import React from 'react'
import PropTypes from 'prop-types'

const NavButton = ({handleClick}) => (
  <div className="nav-button" onClick={handleClick}>
    <div className="burger">
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
    </div>
  </div>
)

NavButton.propTypes = {
  handleClick: PropTypes.func.isRequired
}

export default NavButton
