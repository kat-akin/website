/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import "./layout.css"

const Layout2 = ({ children }) => (
 
        <div>
          <main>
          {children}</main>
          <footer>
         
          </footer>
        </div>
)

Layout2.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout2
