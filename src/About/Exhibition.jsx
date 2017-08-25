import React from 'react'
import PropTypes from 'prop-types'

const Exhibition = ({title, subtitle, children, image}) => (
  <div className="column">
    <img src={image} alt={title}/>
    <div className="exhibition">
      <h3>
        {title}
        <em>- {subtitle}</em>
      </h3>
      <p>{children}</p>
    </div>
  </div>
)

Exhibition.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  image: PropTypes.string.isRequired
}

export default Exhibition
