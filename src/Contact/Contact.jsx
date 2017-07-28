import React from 'react'
import './contact.scss'

const Contact = () => (
  <div>
    <div className="section">
      <div className="container">
        <h2>Kontakt</h2>
        <div className="row">
          <div className="column">
            <h3>Telefon</h3>
            <p>0703-68 86 05</p>
          </div>
          <div className="column">
            <h3>E-post</h3>
            <p><a href="mailto:info@alexanderhallphotography.com">info@alexanderhallphotography.com</a></p>
          </div>
        </div>
      </div>
    </div>
    <div className="section">
      <div className="container">
        <h2>Social media</h2>
        <div className="row">
          <div className="column">
            <p>
              <a href="https://www.facebook.com/AlexanderHallPhoto" target="_blank">Facebook</a>
            </p>
          </div>
          <div className="column">
            <p>
              <a href="http://instagram.com/kaptenhall" target="_blank">Instagram</a>
            </p>
          </div>
          <div className="column">
            <p>
              <a href="http://alwayspreparedforadventure.tumblr.com/" target="_blank">Tumblr</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Contact
