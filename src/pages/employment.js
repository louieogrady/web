import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import './employment.css';

const SecondPage = () => (
  <Layout>
    <SEO title="employment" />
    <div className="employmentContainer"> 
      {/* <p className="employmentHeader">Software Development</p> */}
      <p className="employmentText">Thortful Ltd<br></br>June 2019 - Present<br></br>Junior Frontend Developer</p>
    </div>
  </Layout>
)

export default SecondPage
