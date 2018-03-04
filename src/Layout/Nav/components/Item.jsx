import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

import Icon from './Icon'

const Item = ({path, exact, link, toggleMenu}) => (
  <li
    onClick={toggleMenu}
    style={link.color ? {backgroundColor: link.color} : {}}
  >
    <NavLink to={path} exact={exact}>
      {link.icon && <Icon icon={link.icon} />}
      {link.title}
    </NavLink>
  </li>
)

Item.propTypes = {
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool,
  link: PropTypes.shape({
    title: PropTypes.string.isRequired,
    icon: PropTypes.string
  }).isRequired,
  toggleMenu: PropTypes.func.isRequired
}

export default Item
