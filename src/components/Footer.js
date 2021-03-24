import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/monkeysee.svg'
import twitter from '../img/social/twitter.svg'
import linkedin from '../img/social/linkedin.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-primary has-text-primary-invite">
        <div className="content has-text-centered row">
          <a title="twitter" href="https://twitter.com/Difeorleth">
            <img
              className="fas fa-lg block"
              src={twitter}
              alt="Difeorleth"
              style={{ width: '2em', height: '2em'}}
            />
          </a>
          <a title="linkedin" href="https://www.linkedin.com/in/tom-boyle-92345a17">
            <img
              className="fas fa-lg block"
              src={linkedin}
              alt="Thomas Boyle"
              style={{ width: '2em', height: '2em' }}
            />
          </a>
          <a title="ResearchGate" href="https://www.researchgate.net/profile/Thomas_Boyle2">
            <img
              className="fas fa-lg block"
              src="/img/RGfavicon-32x32.png"
              alt="Thomas Boyle"
             style={{ width: '2em', height: '2em',color: 'rgb(242,242,242)'}}
            />
          </a>
      </div>
      </footer>
    )
  }
}

export default Footer
