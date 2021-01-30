import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { randColor } from "../components/functions"

let employmentData = [
  {
    title: 'Junior Frontend Developer',
    name: 'Thortful Ltd',
    date: 'June 2019 - Present'
  },
  // {
  //   title: 'Artist',
  //   name: '',
  //   date: '2019 - Present',
  // },
  // {
  //   title: 'Audio Editor',
  //   name: 'Blinkist',
  //   date: '2019 - Present',
  // },
]

function content() {
  return employmentData.map((x) => {
    return (
      <React.Fragment>
        <div className="text-container">
          <p style={{ color: randColor() }} className="text">
            {x.title}
          </p>
          <p style={{ color: randColor() }} className="text">
            {x.name}
          </p>
          <p style={{ color: randColor() }} className="text">
            {x.date}
          </p>
        </div>
      </React.Fragment>
    )
  })
}

const Employment = () => (
  <Layout>
    <SEO title="employment" />
    {content()}
  </Layout>
)

export default Employment
