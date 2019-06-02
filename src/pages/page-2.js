import React from "react"
import { Link } from "gatsby"

import Layout2 from "../components/layout2"
import SEO from "../components/seo"
// import Card from "../components/card";

const SecondPage = () => (
  <Layout2>
    <SEO title="Page 2 of Kat Akin Design Portfolio" />
    <div className="HERO2">
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <p><b>ayyyyye </b></p>
    <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout2>
)

export default SecondPage
