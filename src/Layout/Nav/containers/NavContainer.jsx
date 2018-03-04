import React, { Component } from 'react'

import Nav from '../components/Nav'
import './../nav.scss'

class NavContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false
    }
    this.toggleMenu = this.toggleMenu.bind(this)
  }
  toggleMenu() {
    this.setState({
      show: !this.state.show
    })
  }
  render(){
    return <Nav isActive={this.state.show} toggleMenu={this.toggleMenu}/>
  }
}

export default NavContainer
