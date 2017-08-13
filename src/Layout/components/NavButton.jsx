import React from 'react'
import PropTypes from 'prop-types'

const NavButton = ({handleClick}) => (
  <button className="nav-button" onClick={handleClick}>
    <span className="bar"></span>
    <span className="bar"></span>
    <span className="bar"></span>
  </button>
)

NavButton.propTypes = {
  handleClick: PropTypes.func.isRequired
}

export default NavButton
