import React from "react"
import Layout from "../components/layout"
import Welcome from "../components/Welcome"
import SEO from "../components/seo"

const IndexPage = () => (
  <React.Fragment>
    <Layout>
      <SEO title="Home" />
      <Welcome id="Welcome" />
    </Layout>
  </React.Fragment>
)

export default IndexPage
