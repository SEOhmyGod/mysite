import React from 'react'
import Layout from '../../components/Layout'
import { Helmet } from 'react-helmet'

export default () => (
  <Layout>
  <Helmet
  {noIndex && <meta name="robots" content="noindex" />}
  />
    <section className="section">
      <div className="container">
        <div className="content">
          <h1>Thank you!</h1>
          <p>I'll get back to you, as soon as I know where your message ends up</p>
        </div>
      </div>
    </section>
  </Layout>
)
