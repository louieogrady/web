import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import './projects.css';

let colors = ['white', '#fff4c1', '#b1dcff', '#34ebba', '#ffc1cc', '#c1ccff', '#ffd5c1', '#c1fff4', '#ebba34', '#eb5e34', '#34c1eb' ];

function randColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function onMouseOver(event) {
  const el = event.target;
  el.style.color = colors[Math.floor(Math.random() * colors.length)];
}


export default ({ pageContext: { allProjects } }) => (
  <Layout>
    <SEO title="projects" />
    <div className="projContainer">
        {allProjects.map(project => (
            <Link to={`/projects/${project.name}`}>
              {/* <img src={project.image} alt={project.name} /> */}
              <p style={{color: randColor(), marginBottom: '8px'}} onMouseEnter={event => onMouseOver(event)} id="projText">{project.name}</p>
            </Link>
        ))}
    </div>
  </Layout>
);