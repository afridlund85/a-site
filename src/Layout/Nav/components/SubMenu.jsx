import React from 'react'
import PropTypes from 'prop-types'

import List from './List'
import Icon from './Icon'

const SubMenu = ({link, sub, toggleMainMenu, toggleSubMenu, subMenuHidden}) => (
  <li style={link.color ? {backgroundColor: link.color} : {}}>
    <a href="#" onClick={toggleSubMenu}>
      {link.icon && <Icon icon={link.icon} />}
      {link.title}
      <span
        className={'fa-fw fas fa-angle-'+(subMenuHidden ? 'right' : 'down')}
        aria-hidden="true"
      />
    </a>
    <List
      routes={sub}
      hide={subMenuHidden}
      toggleMenu={toggleMainMenu}
    />
  </li>
)

SubMenu.propTypes = {
  link: PropTypes.shape({
    title: PropTypes.string.isRequired,
    icon: PropTypes.string
  }).isRequired,
  sub: PropTypes.array,
  toggleSubMenu: PropTypes.func.isRequired,
  subMenuHidden: PropTypes.bool.isRequired,
  toggleMainMenu: PropTypes.func.isRequired
}

export default SubMenu
