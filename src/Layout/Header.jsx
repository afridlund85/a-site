import React from 'react'
import Nav from './Nav'
import NavButton from './NavButton'

import './header.scss'

const Header = () => {
  return (
    <div id="header">
      <div className="container">
        <h1>
          <a href="/">Alexander Hall Photography</a>
        </h1>
        <NavButton handleClick={() => true} />
        <Nav activeClass={'active'}/>
      </div>
    </div>
  )
}

export default Header
