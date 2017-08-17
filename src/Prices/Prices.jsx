import React from 'react'

import Weddings from './Weddings/'

import './prices.scss'

const Prices = () => {
  return(
    <div className="prices">
      <div className="section">
        <div className="container">
          <h1>Priser</h1>
          <em>Alla priser är inklusive moms.</em>
        </div>
      </div>
      <Weddings/>
    </div>
  )
}

export default Prices
