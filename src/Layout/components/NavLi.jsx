import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

const NavLi = ({path, exact, link, sub}) => (
  <li>
    <NavLink to={path} exact={exact}>
      <i className={'fa fa-' + link.icon} aria-hidden="true"></i>
      {link.title}
    </NavLink>
    {sub && (
      <ul>
        {sub
          .filter(route => !!route.link)
          .map((route) => <NavLi key={route.path} {...route} />)
        }
      </ul>
    )}
  </li>
)

NavLi.propTypes = {
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool,
  link: PropTypes.shape({
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  }).isRequired,
  sub: PropTypes.array
}

export default NavLi
