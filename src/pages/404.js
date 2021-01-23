import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
      <div className="text-container">
        <p className="text">You tried to find a page that doesn't exist</p>
      </div>
  </Layout>
)

export default NotFoundPage
