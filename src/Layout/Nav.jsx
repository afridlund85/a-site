import React from 'react'
import PropTypes from 'prop-types'
import routes from './../routes'
import NavLi from './NavLi'
import './nav.scss'

const props = {
  activeClass: PropTypes.string.isRequired
}

const Nav = ({activeClass}) => (
  <div id="nav" className={activeClass}>
    <h2>Navigation</h2>
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
