import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { randColor } from "../components/functions";

export default ({ pageContext: { project } }) => (
  <Layout>
  <SEO title="projects" />
    <div className="text-container">
      <p style={{color: randColor()}} className='text-four'>{project.name}</p>
      {/* <img src={project.image} alt={project.name} /> */}
      <p style={{color: randColor()}} className='text-four'>{project.subInfo}</p>
      <p style={{color: randColor()}} className='text-four'>{project.description}</p>
    </div>
  </Layout>
  )