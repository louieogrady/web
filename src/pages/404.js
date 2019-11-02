import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import './404.css';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
      <div className="notFoundContainer">
        <p className="notFoundText">You tried to find a page that doesn't exist</p>
      </div>
  </Layout>
)

export default NotFoundPage
