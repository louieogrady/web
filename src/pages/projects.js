import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import './projects.css';

let colors = ['white', '#34ebba', '#ffc1cc'];

function randColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}


export default ({ pageContext: { allProjects } }) => (
  <Layout>
    <SEO title="projects" />
    <div className="projContainer">
        {allProjects.map(project => (
            <Link to={`/projects/${project.name}`}>
              {/* <img src={project.image} alt={project.name} /> */}
              <p style={{color: randColor()}} id="projText">{project.name}</p>
            </Link>
        ))}
    </div>
  </Layout>
);