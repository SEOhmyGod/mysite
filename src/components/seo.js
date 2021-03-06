import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"
const SEO = ({ title, description, image, article }) => {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(query)
  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
    defaultImage,
    twitterUsername,
  } = site.siteMetadata
  const seo = {
    title: "SeOhMyGod | Thomas Boyle" || "SeOhMyGod | Thomas Boyle",
    description: "I'm a Product Manager with a focus on SEO, and it's high time I actually practically apply the knowledge I spend my days encouraging others to use" || defaultDescription,
    image: `${siteUrl}${"/img/dumpsterfire.jpg" || "/img/dumpsterfire.jpg"}`,
    url: `${siteUrl}${pathname}`,
    twitterUsername: "@Difeorleth"
  }
  return (
    <Helmet title={seo.title} titleTemplate={titleTemplate}>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      {seo.url && <meta property="og:url" content={seo.url} />}
      {(article ? true : null) && <meta property="og:type" content="article" />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.image && <meta property="og:image" content={seo.image} />}
      <meta name="twitter:card" content="summary_large_image" />
      {twitterUsername && (
        <meta name="twitter:creator" content={twitterUsername} />
      )}
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
      {seo.image && <meta name="twitter:image" content={seo.image} />}
    </Helmet>
  )
}
export default SEO
SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
}
SEO.defaultProps = {
  title: 'SEOhMyGod | Thomas Boyle',
  description: "I'm a Product Manager with a focus on SEO, and it's high time I actually practically apply the knowledge I spend my days encouraging others to use.",
  image:  'img/dumpsterfire.jpg',
  article: false,
}
const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        titleTemplate: title
        siteUrl: url
        defaultImage: image
        twitterUsername: twitterUsername
      }
    }
  }
`
