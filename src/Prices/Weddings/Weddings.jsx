import React from 'react'

import { HalfDay, FullDay } from './'

const Weddings = () => (
  <div className="section">
    <div className="container">
      <div className="row">
        <h2>Bröllop</h2>
      </div>
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