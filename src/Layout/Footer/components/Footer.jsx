import React from 'react'

import '../footer.scss'

const Footer = () => (
  <div id="footer">
    <div className="container">
      <div className="row social">
        <div className="column column-33">
          <a href="https://www.facebook.com/AlexanderHallPhoto" target="_blank">
            <i className="fab fa-facebook fa-lg" aria-hidden="true"></i>
          </a>
        </div>
        <div className="column column-33">
          <a href="http://instagram.com/kaptenhall" target="_blank">
            <i className="fab fa-instagram fa-lg" aria-hidden="true"></i>
          </a>
        </div>
        <div className="column column-33">
          <a href="http://alwayspreparedforadventure.tumblr.com/" target="_blank">
            <i className="fab fa-tumblr-square fa-lg" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
)

export default Footer
