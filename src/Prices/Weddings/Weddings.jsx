import React from 'react'

import { HalfDay, FullDay } from './'

const Weddings = () => (
  <div className="section">
    <div className="container">
      <h2>Bröllop</h2>
      <div className="row">
        <div className="column">
          <HalfDay/>
        </div>
        <div className="column">
          <FullDay/>
        </div>
      </div>
    </div>
  </div>
)

export default Weddings
