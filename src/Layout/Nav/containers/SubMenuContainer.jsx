import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SubMenu from './../components/SubMenu'

class SubMenuContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false
    }
    this.toggleSubMenu = this.toggleSubMenu.bind(this)
  }
  toggleSubMenu(e) {
    e.preventDefault()
    this.setState({
      show: !this.state.show
    })
  }
  render(){
    return <SubMenu
      toggleMainMenu={this.props.toggleMainMenu}
      toggleSubMenu={this.toggleSubMenu}
      subMenuHidden={!this.state.show}
      {...this.props.route}
    />
  }
}

SubMenuContainer.propTypes = {
  route: PropTypes.shape({
    path: PropTypes.string.isRequired,
    exact: PropTypes.bool,
    link: PropTypes.shape({
      title: PropTypes.string.isRequired,
      icon: PropTypes.string
    }).isRequired
  }),
  toggleMainMenu: PropTypes.func.isRequired
}

export default SubMenuContainer
