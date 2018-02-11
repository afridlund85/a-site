import React, { Component } from 'react'

import Nav from '../components/Nav'
import './../nav.scss'

class NavContainer extends Component {
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
  render(){
    return <Nav isActive={this.state.show} handleToggle={this.handleToggle}/>
  }
}

export default NavContainer
