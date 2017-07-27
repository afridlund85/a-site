import React from 'react'
import PropTypes from 'prop-types'
import routes from './../routes'
import NavLi from './NavLi'
import './nav.scss'

const props = {
  activeClass: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
}

const Nav = ({activeClass, handleClick}) => (
  <div id="nav" className={activeClass} onClick={handleClick}>
    <ul>
      {routes
        .filter(route => !!route.link)
        .map((route) => <NavLi key={route.path} {...route} />)
      }
    </ul>
  </div>
)

Nav.propTypes = props

export default Nav
