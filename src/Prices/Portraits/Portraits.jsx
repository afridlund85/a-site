import React from 'react'

import { Family, Portrait } from './'

const Portraits = () => (
  <div className="section">
    <div className="container">
      <div className="row">
        <div className="column">
          <Family/>
        </div>
        <div className="column">
          <Portrait/>
        </div>
      </div>
    </div>
  </div>
)

export default Portraits
