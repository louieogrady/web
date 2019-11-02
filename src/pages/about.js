import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import './about.css';

const SecondPage = () => (
  <Layout>
    <SEO title="about" />
    <div className="aboutTextContainer"> 
      <p className="aboutText">I am a software developer and artist based in London.
      I am passionate about writing code to create innovative user experiences. I have several years experience working as a sound artist where 
      I delivered commissioned work from initial proposal stage to practical installation</p>
    </div>
  </Layout>
)

export default SecondPage
