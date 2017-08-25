import React from 'react'

import Exhibition from './Exhibition'

import './about.scss'
import catImg from './../assets/images/cat1.jpg'
import cubaImg from './../assets/images/cuba.jpg'
import tmp1Img from './../assets/images/tmp1.jpg'
import tmp2Img from './../assets/images/tmp2.jpg'

const About = () => (
  <div className="about">
    <div className="section header">
      <div className="container">
        <h2>Om mig</h2>
      </div>
    </div>
    <div className="section">
      <div className="container">
        <p>Hej och vad kul att du hittat hit!</p>
        <p>Jag började knäppa bilder som en galning när jag, för 10 år sedan, fick min första digitalkamera i studentpresent. Fotograferandet växte snabbt till en stor passion och kameran hängde, då som nu, konstant på min axel. Mitt fotograferande har, allt sedan denna min första kamera, lett mig till en massa äventyr och tusen oförglömliga möten.</p>
        <p>Då jag med tiden fått fler och fler fotouppdrag har fotograferandet successivt övergått från hobby till arbete. Jag innehar sedan 1 januari 2015 F-skattsedel och tänker mig snart kunna försörja mig helt och hållet på fotograferandet. Mest av allt tycker jag om att arbeta i naturligt ljus och brinner för att spegla människor och möten på ett spontant och okonstlat vis.</p>
        <p>Jag är baserad i Växjö men jobbar lite varstans. Kan alltså tänka mig uppdrag i världens alla hörn.</p>
        <p>Hör gärna av dig!</p>
        <p><em>- Alexander</em></p>
      </div>
    </div>
    <div className="section exhibitions">
      <div className="container">
        <h2>Fotoutställningar</h2>
        <div className="row">
          <Exhibition
            title="Kulturnatten i Växjö"
            subtitle="Hemma Hos Oss, 2015"
            image={tmp2Img}>
            Resefotografier från Syd Korea, Filippinerna och Borneo
          </Exhibition>
          <Exhibition
            title="Hasta La Victoria Siempre"
            subtitle="Hemma Hos Oss, 2014"
            image={cubaImg}>
            Resefotografier från Kuba
          </Exhibition>
        </div>
        <div className="row">
          <Exhibition
            title="Möten & Ögonblick"
            subtitle="Hemma Hos Oss, 2013"
            image={tmp1Img}>
            Resefotografier från Indien & Bangladesh
          </Exhibition>
          <Exhibition
            title="Portraits of the Far East"
            subtitle="PM & Vänner, 2011"
            image={catImg}>
            Resefotografier från Sydostasien
          </Exhibition>
        </div>
      </div>
    </div>
  </div>
)

export default About
