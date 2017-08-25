import React from 'react'
import PropTypes from 'prop-types'

const TableRow = ({children}) => (
  <tr>
    <td>{children}</td>
  </tr>
)

TableRow.propTypes = {
  children: PropTypes.node.isRequired
}

export default TableRow
