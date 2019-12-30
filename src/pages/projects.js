import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import './projects.css';

export default ({ pageContext: { allProjects } }) => (
  <Layout>
    <SEO title="projects" />
    <div className="projContainer">
        {allProjects.map(project => (
            <Link to={`/projects/${project.name}`}>
              {/* <img src={project.image} alt={project.name} /> */}
              <p className="projText">{project.name}</p>
            </Link>
        ))}
    </div>
  </Layout>
);