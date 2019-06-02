import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from '../components/card';

const IndexPage = () => (
 <Layout>
<div>
<SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="HERO">
    <div className="HEROGROUP">


    <h1>Hi!</h1>
    <p>I'm building this in react</p>
    <p>Hellow World Kat :)</p>

    </div>
    </div>
    <div className="Cards">
    <Link to="/page-2/"><Card 
    title="project 1"
    text="context"/></Link>
    <Card 
    title="project 2"
    text="context"/>
    <Card 
    title="project 3"
    text="context"/>
    </div>
</div>
</Layout>
)

export default IndexPage
