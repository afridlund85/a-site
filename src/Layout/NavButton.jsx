import React from 'react'
import PropTypes from 'prop-types'

const props = {
  handleClick: PropTypes.func.isRequired
}

const NavButton = ({handleClick}) => (
  <button onClick={handleClick}></button>
)

NavButton.propTypes = props

export default NavButton
