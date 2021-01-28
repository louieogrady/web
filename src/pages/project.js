import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { randColor } from "../components/functions"

function importAll(r) {
  let images = {}
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item)
  })
  return images
}

const images = importAll(
  require.context("../images/project-images", false, /\.(png|jpe?g|svg)$/)
)

export default ({ pageContext: { project } }) => (
  <Layout className="project">
    <SEO title="projects" />
    {project ? (
      <div className="text-container">
        <p style={{ color: randColor() }} className="text-four">
          {project.name ? project.name : null}
        </p>
        <p style={{ color: randColor() }} className="text-four">
          {project.subInfo}
        </p>
        {project.link ? (
          <a
            style={{ color: randColor() }}
            className="text-four"
            target="_blank"
            href={project.link}
          >
            {project.link}
          </a>
        ) : null}
        <p style={{ color: randColor() }} className="text-four">
          {project.description}
        </p>
        {project.photos ? (
          <img src={images[project.photos]} alt={project.name} />
        ) : null}
        {project.video ? (
          <div>
            <iframe
              src={project.video + "?byline=0&portrait=0&title=0"}
              id="video"
              width="640"
              height="360"
              frameborder="0"
              border="0"
              cellspacing="0"
              allowfullscreen
            ></iframe>
          </div>
        ) : null}
      </div>
    ) : null}
  </Layout>
)
