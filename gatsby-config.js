/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'PWA/contentful example',
    someData: 'Im the data'
  },
  plugins: [
    // sass
    'gatsby-plugin-sass',
    // material-ui Design system
    'gatsby-theme-material-ui',
    // head handling
    'gatsby-plugin-react-helmet',
    // offline suppport
    {
      resolve: 'gatsby-plugin-offline',
      options: { },
    },
    // web manifest
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'GatsbyJS',
        short_name: 'GatsbyJS',
        start_url: '/',
        background_color: '#f7f0eb',
        theme_color: '#452475',
        display: 'standalone',
        icon: 'src/images/icon.png',
      },
    },
    // contentful pulling content
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    }
  ]
}
