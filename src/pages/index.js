import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Welcome from "../components/Welcome"
import SEO from "../components/seo"

const IndexPage = () => (
  <React.Fragment>
    <Layout>
    <SEO title="Home" />
      <Welcome id="welcome"/>
    </Layout>
  </React.Fragment>

)

export default IndexPage
