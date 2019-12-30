import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import './project.css';

export default ({ pageContext: { project } }) => (
  <Layout>
  <SEO title="projects" />
    <div>
      <p className='projT'>{project.name}</p>
      {/* <img src={project.image} alt={project.name} /> */}
      <p className='projT2'>{project.subInfo}</p>
      <p className='projT3'>{project.description}</p>
    </div>
  </Layout>
  )