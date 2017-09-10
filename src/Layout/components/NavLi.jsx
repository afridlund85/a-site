import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

const NavLi = ({path, exact, link}) => (
  <li>
    <NavLink to={path} exact={exact}>
      <i className={'fa fa-' + link.icon} aria-hidden="true"></i>
      {link.title}
    </NavLink>
  </li>
)

NavLi.propTypes = {
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool,
  link: PropTypes.shape({
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  }).isRequired
}

export default NavLi
