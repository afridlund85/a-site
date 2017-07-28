import React, { Component } from 'react'
import Nav from './Nav'
import NavButton from './NavButton'

import './header.scss'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false
    }
    this.handleToggle = this.handleToggle.bind(this)
  }
  handleToggle() {
    this.setState({
      show: !this.state.show
    })
  }
  render() {
    let activeClass = this.state.show ? 'active' : ''
    return (
      <div id="header">
        <div className="container">
          <h1>
            <a href="/">A. Hall Photography</a>
          </h1>
          <NavButton handleClick={this.handleToggle} />
          <Nav activeClass={activeClass} handleClick={this.handleToggle}/>
        </div>
      </div>
    )
  }
}

export default Header
