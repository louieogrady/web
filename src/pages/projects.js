import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Link } from "gatsby";
import { randColor, onMouseOut, onMouseOver, slug } from "../components/functions";

export default ({ pageContext: { allProjects } }) => (
  <Layout>
    <SEO title="projects"/>
    <div className="text-container">
        {allProjects.map((project, i) => (
            <Link key={slug(project.name)+"-"+i} className="text-two" to={`/projects/${slug(project.name)}`}>
              <p className="text-two" style={{color: randColor(), marginBottom: '8px'}} onMouseOut={event => onMouseOut(event)} onMouseEnter={event => onMouseOver(event)}>{project.name}</p>
            </Link>
        ))}
    </div>
  </Layout>
)