require("dotenv").config()
module.exports = {
  siteMetadata: {
    title: `dagalaxy `,
    description: `Daily stories in your hands.`,
    author: `tretrak`,
    authorUrl: "http://otmantretrak.com",
    siteUrl: `https://www.dagalaxy.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `dagalaxy`,
        short_name: `dagalaxy`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon-512x512.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: "SWAPI",
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: "swapi",
        // Url to query from
        url: "https://dagalaxy-graph-mongo.herokuapp.com",
        //url: "http://localhost:4000/",
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
    `gatsby-plugin-sitemap`,
    "gatsby-plugin-robots-txt",
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-161819054-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
