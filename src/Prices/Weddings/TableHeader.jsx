import React from 'react'
import PropTypes from 'prop-types'

const TableHeader = ({title}) => (
  <thead>
    <tr>
      <th>{title}</th>
    </tr>
  </thead>
)

TableHeader.propTypes = {
  title: PropTypes.string.isRequired
}

export default TableHeader
