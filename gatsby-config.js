const path  = require('path');

module.exports = {
  siteMetadata: {
    title: `Neruoscience Hypnosis Insitute`,
    description: `Reveal the unseen shackles that stoped from unleasing your full potential`,
    author: `Emanuel Benedic`,
    navArray: ['Home', 'About', 'Articles', 'Products', 'Contact']
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    // {
    //   resolve: gatsby-plugin-sharp,
    //   options: {
    //     useMozJpeg: false,
    //     stripMetadata: true,
    //     defaultQuality: 75,
    //   },
    // },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
