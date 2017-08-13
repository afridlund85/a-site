import React from 'react'

import Logo from './Logo'
import NavContainer from '../containers/NavContainer'

import '../sass/header.scss'

const Header = () => (
  <header id="header">
    <div className="container">
      <div className="row">
        <Logo/>
        <NavContainer/>
      </div>
    </div>
  </header>
)

export default Header
