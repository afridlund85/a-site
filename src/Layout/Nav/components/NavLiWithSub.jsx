import React from 'react'
import PropTypes from 'prop-types'
import NavLi from './NavLi'

const NavLiWithSub = ({link, sub, handleToggle}) => (
  <li>
    <a href="">
      {link.icon && <span className={'fa-fw ' + link.icon} aria-hidden="true"></span>}
      {link.title}
      <span className={'fa-fw fas fa-angle-down'} aria-hidden="true"></span>
    </a>
    <ul>
      {sub
        .filter(route => !!route.link)
        .map((route) => <NavLi key={route.path} handleToggle={handleToggle} {...route} />)
      }
    </ul>
  </li>
)

NavLiWithSub.propTypes = {
  link: PropTypes.shape({
    title: PropTypes.string.isRequired,
    icon: PropTypes.string
  }).isRequired,
  sub: PropTypes.array,
  handleToggle: PropTypes.func.isRequired
}

export default NavLiWithSub
