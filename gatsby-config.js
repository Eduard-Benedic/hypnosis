const path  = require('path');

module.exports = {
  siteMetadata: {
    title: `Neruoscience Hypnosis Insitute`,
    description: `Reveal the unseen shackles that stoped from unleasing your full potential`,
    author: `Emanuel Benedic`,
    companyName: 'Neurohypnosis Therapy',
    menuLinks: [
      {
        name: 'Home',
        to: '/'
      },
      {
        name: 'Blog',
        to: '/blog/1'
      },
      {
        name: 'About',
        to: '/about'
      },
      {
        name: 'Neurofeedback',
        to: '/neurofeedback'
      },
      {
        name: 'Contact',
        to: '/contact'
      }
    ]
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-scroll-reveal`,
    // {
    //   resolve: `gatsby-source-contentful`,
    //   options: {
    //     spaceId: `f0swv3vglho9`,
    //     accessToken: `7s2L8xHt1gKcqm_VN7E7kRQBPUrhGlIvFYeesAMoD_8`
    //   }
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: path.join(__dirname, `src`, `markdown` ,`pages`),
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: path.join(__dirname, `src`, `markdown`, `blog`),
        name: 'blog',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
            },
          },
        ],
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Default to 100
        contentTypes: [`article`],
        singleTypes: [`homepage`, `aboutpage`, `neurofeedbackpage`],
      },  
    },
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
