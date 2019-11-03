import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import './education.css';

const Education = () => (
  <Layout>
    <SEO title="education" />
    <div className="educationContainer"> 
      {/* <p className="employmentHeader">Software Development</p> */}
      <p className="educationText">Flatiron School, London<br></br>Feb 2019 - May 2019<br></br>Software Engineering Programme</p>
      <p className="educationText">Manchester School of Art<br></br>Sept 2011 - Sept 2012<br></br>MRes Art (AHRC BGP Studentship Award)</p>
      <p className="educationText">Royal Welsh College of Music<br></br>Sept 2005 - May 2009<br></br>BMus Music</p>
      <p className="educationText">School of Sound Recording<br></br>Nov 2017 - Jan 2018<br></br>Audio for Games (Wwise & Unity)</p>
    </div>
  </Layout>
)

export default Education
