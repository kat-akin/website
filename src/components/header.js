import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
<div className="Header">
  <div className="HeaderGroup">
    <Link to="/">Home</Link>
    <Link to="/buy"><button>Contact</button></Link>
  </div>
</div>
)

export default Header
