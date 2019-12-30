import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

export default ({ pageContext: { allProjects } }) => (
  <Layout>
    <SEO title="projects" />
    <div>
        {allProjects.map(project => (
          <p>
            <Link to={`/projects/${project.name}`}>
              {/* <img src={project.image} alt={project.name} /> */}
              <p>{project.name}</p>
            </Link>
          </p>
        ))}
    </div>
  </Layout>
);