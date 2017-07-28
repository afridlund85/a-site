import React from 'react'
import PropTypes from 'prop-types'

const props = {
  handleClick: PropTypes.func.isRequired
}

const NavButton = ({handleClick}) => (
  <button onClick={handleClick}>
    <span className="menu-bar"></span>
    <span className="menu-bar"></span>
    <span className="menu-bar"></span>
  </button>
)

NavButton.propTypes = props

export default NavButton
