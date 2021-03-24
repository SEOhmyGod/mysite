import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/monkeysee.svg'
// import facebook from '../img/social/facebook.svg'
//import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import linkedin from '../img/social/linkedin.svg'
//import vimeo from '../img/social/vimeo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-primary has-text-primary-invite">
        <div className="content has-text-centered has-background-primary has-text-primary-invert">
          <div className="container has-background-primary has-text-primary-invert">
            <div className="content has-text-centered">
              <a title="twitter" href="https://twitter.com/Difeorleth">
                <img
                  className="fas fa-lg"
                  src={twitter}
                  alt="Difeorleth"
                  style={{ width: '1em', height: '1em' }}
                />
              </a>
              <a title="linkedin" href="https://www.linkedin.com/in/tom-boyle-92345a17">
                <img
                  className="fas fa-lg"
                  src={linkedin}
                  alt="Thomas Boyle"
                  style={{ width: '1em', height: '1em' }}
                />
              </a>
              <a title="ResearchGate" href="https://www.researchgate.net/profile/Thomas_Boyle2">
                <img
                  className="fas fa-lg"
                  src="/img/RGfavicon-32x32.png"
                  alt="Thomas Boyle"
                 style={{ width: '1em', height: '1em',color: 'rgb(242,242,242)' }}
                />
              </a>
          </div>
        </div>
      </div>
      </footer>
    )
  }
}

export default Footer
