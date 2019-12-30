import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ pageContext: { allProjects } }) => (
  <div style={{ width: 960, margin: '4rem auto' }}>
    <ul style={{ padding: 0 }}>
      {allProjects.map(project => (
        <li>
          <Link to={`/projects/${project.name}`}>
            {/* <img src={pokemon.sprites.front_default} alt={pokemon.name} /> */}
            <p>{pokemon.name}</p>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);