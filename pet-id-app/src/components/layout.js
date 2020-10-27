import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { IdentityContextProvider } from "react-netlify-identity-widget"
import { ApolloProvider } from "@apollo/client"

import client from "../gatsby-theme-apollo/client"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    // eslint-disable-next-line no-undef
    <IdentityContextProvider url={`${process.env.GATSBY_NETLIFY_URL}`}>
      <ApolloProvider client={client}>
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <div>
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.com">Gatsby</a>
          </footer>
        </div>
      </ApolloProvider>
    </IdentityContextProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
