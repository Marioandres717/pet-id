// eslint-disable-next-line no-undef
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
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/app/*`] },
    },
  ],
}
