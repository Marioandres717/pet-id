/* eslint-disable no-undef */
module.exports = {
  siteMetadata: {
    title: `Pet Id`,
    description: `CS476 Project, University of Regina. Pet Id Project: Identification for pets using QRCODE`,
    author: `@marioandres717`,
  },
  plugins: [
    "gatsby-plugin-eslint",
    "gatsby-theme-apollo",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Pet Identification",
        short_name: "Pet Id",
        start_url: "/",
        background_color: "#6b37bf",
        theme_color: "#6b37bf",
        display: "standalone",
        icon: "src/images/icon.png",
        icons: [
          {
            src: "src/images/icon.png",
            sizes: "196x196",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "src/images/icon.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
        crossOrigin: "use-credentials",
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        appendScript: require.resolve(`./static/custom-sw-code.js`),
      },
    },
    `gatsby-theme-material-ui`,
  ],
}
