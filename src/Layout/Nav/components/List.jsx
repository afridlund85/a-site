import React from 'react'
import PropTypes from 'prop-types'
import ItemContainer from './../containers/ItemContainer'

const List = ({routes, hide, toggleMenu}) => (
  <ul className={hide ? 'hidden' : ''}>
    {routes
      .filter(route => !!route.link)
      .map((route) => <ItemContainer key={route.path} route={route} toggleMenu={toggleMenu}/>)
    }
  </ul>
)

List.propTypes = {
  routes: PropTypes.array.isRequired,
  hide: PropTypes.bool,
  toggleMenu: PropTypes.func.isRequired
}

export default List
