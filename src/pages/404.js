import React from 'react'
import Layout from '../components/Layout'
import { Helmet } from 'react-helmet'

const NotFoundPage = () => (
  <Layout>
    <div>
      <h1>I once was lost, but now... nope, still gone</h1>
      <p>No existo, lo siento</p>
      <img
        src="/img/dumpsterfiregif.gif"
        alt="Hunk a Hunk a Burnin' Love"
      />
    </div>
  </Layout>
)

export default NotFoundPage
