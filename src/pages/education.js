import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import './education.css';

let education = [
  {
    name: 'Flatiron School, London',
    dates: 'Feb 2019 - May 2019',
    subTitle: 'Software Engineering Programme'
  },
  {
    name: 'Manchester School of Art',
    dates: 'Sept 2011 - Sept 2012',
    subTitle: 'MRes Art (AHRC BGP Studentship Award)'
  },
  {
    name: 'Royal Welsh College of Music',
    dates: 'Sept 2005 - May 2009',
    subTitle: 'BMus Music'
  },
  {
    name: 'School of Sound Recording',
    dates: 'Nov 2017 - Jan 2018',
    subTitle: 'Audio for Games (Wwise & Unity)'
  },
]


let colors = ['white', '#fff4c1', '#b1dcff', '#34ebba', '#ffc1cc', '#c1ccff', '#ffd5c1', '#c1fff4', '#ebba34', '#eb5e34', '#34c1eb' ];

function randColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

const Education = () => (
  <Layout>
    <SEO title="education" />
    <div className="educationContainer"> 
      {education.map((e) => 
        <div>
          <p style={{color: randColor()}} className="educationText">{e.name}</p>
          <p style={{color: randColor()}} className="educationText">{e.dates}</p>
          <p style={{color: randColor()}} className="educationText">{e.subTitle}</p>
          <p style={{marginBottom: '45px'}}></p>
        </div>
        )}
    </div>
  </Layout>
)

export default Education
