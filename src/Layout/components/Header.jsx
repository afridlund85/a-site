import React from 'react'

import Logo from './Logo'
import NavContainer from '../containers/NavContainer'

import '../sass/header.scss'

const Header = () => (
  <header id="header">
    <Logo/>
    <NavContainer/>
  </header>
)

export default Header
