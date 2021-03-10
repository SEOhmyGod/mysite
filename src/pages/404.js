import React from 'react'
import Layout from '../components/Layout'
import { Helmet } from 'react-helmet'

const NotFoundPage = () => (
  <Layout>
  <div>
  <Helmet
  <meta name="robots" content="noindex" />
  />
  </div>
    <div>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </Layout>
)

export default NotFoundPage
