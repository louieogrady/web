import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { randColor } from "../components/functions";
class About extends React.Component {


  render() {
    return (
      <Layout>
        <SEO title="about" />
        <div className="text-container">
          <p style={{ color: randColor() }} className="text-two">
            I am a software developer and artist based in London.
            I am passionate about writing code to create innovative user experiences. I have several years experience working as a sound artist where
            I have delivered commissioned work from initial proposal stage to practical installation</p>
        </div>
      </Layout>
    )
  }
}

export default About;