import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/monkeysee.svg'
// import facebook from '../img/social/facebook.svg'
//import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
//import vimeo from '../img/social/vimeo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-primary has-text-primary-invite">

      
      <div className="content has-text-centered has-background-primary has-text-primary-invert">
        <div className="container has-background-primary has-text-primary-invert">
          <div style={{ maxWidth: '200vw' }} className="columns">
            <div className="column is-4">
              <section className="menu">
                <ul className="menu-list">
                  <li>
                    <Link to="/" className="navbar-item">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link className="navbar-item" to="/about">
                      About
                    </Link>
                  </li>
                  <li>
                    <a
                      className="navbar-item"
                      href="/admin/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Admin
                    </a>
                  </li>
                </ul>
              </section>
            </div>
            <div className="column is-4">
              <section>
                <ul className="menu-list">
                  <li>
                    <Link className="navbar-item" to="/blog">
                      Latest Stories
                    </Link>
                  </li>
                  <li>
                    <Link className="navbar-item" to="/contact">
                      Contact
                    </Link>
                  </li>
                </ul>
              </section>
            </div>
              <div className="column is-4">
              <section>
                <div className="content has-text-centered">
                  <ul className="menu-list">
                  <li>
                    <a title="twitter" href="https://twitter.com/Difeorleth">
        <img
          className="fas fa-lg"
          src={twitter}
          alt="Difeorleth"
          style={{ width: '1em', height: '1em' }}
        />
      </a>
                  </li>
                  <li>
                    <a title="ResearchGate" href="https://www.researchgate.net/profile/Thomas_Boyle2">
        <img
          className="fas fa-lg"
          src="/img/RGfavicon-32x32.png"
          alt="Thomas Boyle"
         style={{ width: '1em', height: '1em',color: 'rgb(242,242,242)' }}
        />
      </a>
                  </li>
                </ul>
      
      
      </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      </footer>
    )
  }
}

export default Footer
