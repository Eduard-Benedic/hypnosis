const path  = require('path');

module.exports = {
  siteMetadata: {
    title: `Neruoscience Hypnosis Insitute`,
    description: `Reveal the unseen shackles that stoped from unleasing your full potential`,
    author: `Emanuel Benedic`,
    companyName: 'Neurohypnosis Therapy',
    menuLinks: [
      {
        name: 'home',
        to: '/'
      },
      {
        name: 'articles',
        to: '/articles/1'
      },
      {
        name: 'about',
        to: '/about'
      },
      {
        name: 'Neurofeedback',
        to: '/neurofeedback'
      },
      {
        name: 'contact',
        to: '/contact'
      }
    ]
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `f0swv3vglho9`,
        accessToken: `7s2L8xHt1gKcqm_VN7E7kRQBPUrhGlIvFYeesAMoD_8`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
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
      }
    }
    
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
