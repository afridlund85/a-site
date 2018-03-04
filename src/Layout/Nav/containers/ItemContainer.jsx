import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Item from './../components/Item'
import SubMenuContainer from './SubMenuContainer'

class ItemContainer extends Component {
  constructor(props) {
    super(props)
  }
  render(){
    let route = this.props.route,
      toggleMenu = this.props.toggleMenu
    return !route.sub
      ? <Item toggleMenu={toggleMenu} {...route}/>
      : <SubMenuContainer toggleMainMenu={toggleMenu} route={route} />
  }
}

ItemContainer.propTypes = {
  route: PropTypes.shape({
    path: PropTypes.string.isRequired,
    exact: PropTypes.bool,
    link: PropTypes.shape({
      title: PropTypes.string.isRequired,
      icon: PropTypes.string
    }).isRequired
  }),
  toggleMenu: PropTypes.func.isRequired
}

export default ItemContainer
