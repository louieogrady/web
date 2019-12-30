import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ pageContext: { project } }) => (
    <div style={{ width: 960, margin: "4rem auto" }}>
      <h1>{project.name}</h1>
      {/* <img src={project.image} alt={project.name} /> */}
      <h3>{project.subInfo}</h3>
      <h3>{project.description}</h3>
    </div>
  )