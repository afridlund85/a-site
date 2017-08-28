import React from 'react'

import { HalfDay, FullDay } from './'

const Business = () => (
  <div className="section">
    <div className="container">
      <h2>Företags-, event-, industri- och reklam-fotografering</h2>
      <p>1 500 kr/h</p>
      <div className="row">
        <div className="column">
          <HalfDay/>
        </div>
        <div className="column">
          <FullDay/>
        </div>
      </div>
      <div className="row">
        <div className="column">
          <p>Fri användningsrätt i all form av marknadsföring under obegränsad tid. För längre uppdrag/samarbeten, kontakta mig för offert.</p>
          <p>Vill du inreda ditt företag med mina fotografier kontakta mig för mer info och priser.</p>
        </div>
      </div>
    </div>
  </div>
)

export default Business
