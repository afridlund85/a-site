import React from 'react'
import PropTypes from 'prop-types'

const TableFooter = ({title}) => (
  <tfoot>
    <tr>
      <td>{title}</td>
    </tr>
  </tfoot>
)

TableFooter.propTypes = {
  title: PropTypes.string.isRequired
}

export default TableFooter
