module.exports = {
  siteMetadata: {
    title: 'SEOhMyGod | Thomas Boyle',
    description:"I'm a Product Manager with a focus on SEO, and it's high time I actually practically apply the knowledge I spend my days encouraging others to use."",
      url: "https://www.seohmygod.me", // No trailing slash allowed!
    image: "/img/dumpsterfire.jpg", // Path to your image you placed in the 'static' folder
    twitterUsername: "@Difeorleth",
    author: "Thomas Boyle",
    language:"en",
    canonical:"https://www.seohmygod.me",
    og:type="website",
og:url="https://metatags.io/",
og:title="SeOhMyGod - Thomas Boyle",
og:description="I'm a Product Manager with a focus on SEO, and it's high time I actually practically apply the knowledge I spend my days encouraging others to use.",
og:image="/img/dumpsterfire.jpg",


twitter:card="summary_large_image",
twitter:url="https://metatags.io/",
twitter:title="SeOhMyGod - Thomas Boyle",
twitter:description="I'm a Product Manager with a focus on SEO, and it's high time I actually practically apply the knowledge I spend my days encouraging others to use.",
twitter:image="/img/dumpsterfire.jpg",

  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'uploads',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
      resolve: 'gatsby-plugin-purgecss', // purges all unused/unreferenced css rules
      options: {
        develop: true, // Activates purging in npm run develop
        purgeOnly: ['/all.sass'], // applies purging only on the bulma css file
      },
    }, // must be after other CSS plugins
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}
