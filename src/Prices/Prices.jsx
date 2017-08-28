import React from 'react'

import Weddings from './Weddings/'
import Portraits from './Portraits/'
import Business from './Business/'
import Prints from './Prints/'

import './prices.scss'

const Prices = () => {
  return(
    <div className="prices">
      <div className="section header">
        <div className="container">
          <h1>Priser</h1>
        </div>
      </div>
      <Weddings/>
      <Portraits />
      <Business />
      <Prints />
    </div>
  )
}

export default Prices
