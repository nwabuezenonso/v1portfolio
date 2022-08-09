import React from 'react';
import './Projects.css';
import { Link } from 'react-router-dom';
import { image} from '../../assets';
import { ContactDeveloper } from '../../components';

const project_details = [ 
  {
    "project_name": "Voice powered expense tracker",
    "project_details": "A simple voice activated budget calculator used to calculate income and expenses.",
    "project_tags": ["React", "Node", "HTML"],
    "id": 1
  },
  {
    "project_name": "Voice powered expense tracker",
    "project_details": "A simple voice activated budget calculator used to calculate income and expenses.",
    "project_tags": ["React", "Node", "HTML"],
    "id": 2
  },
  {
    "project_name": "Voice powered expense tracker",
    "project_details": "A simple voice activated budget calculator used to calculate income and expenses.",
    "project_tags": ["React", "Node", "HTML"],
    "id": 3
  },
  {
    "project_name": "Voice powered expense tracker",
    "project_details": "A simple voice activated budget calculator used to calculate income and expenses.",
    "project_tags": ["React", "Node", "HTML"],
    "id": 4
  },
  {
    "title": "Adding another data",
    "details": "just adding another set of dta",
    "category": "work",
    "id": 5
  },
  {
    "title": "something that i have to do ",
    "details": "I need to water the plant",
    "category": "todos",
    "id": 6
  },
]



const Projects = () => {
  return (
    <div>
      <div className='projects'>
        <div className='project_intro'>
          <h1>My Projects <span role="img" aria-label="project"></span></h1>
          <p>A collection of various projects I've worked on. </p>
        </div>
        <div className='project_section'>
          {project_details.map((info, index) => (
            <div className='project1'>
              <img src= { image } alt=""/>
              <div className='project_info'>
                <h1 className='project_title'>{info.project_name}</h1>
                <p className='project_body'>{info.project_details}</p>
                <ul className='project_tags'>
                  <li>React</li>
                  <li>JavaScript</li>
                  <li>HTML</li>
                  <li>CSS</li>
                </ul>
                <Link to="/about"><button className='portfolioButton'>View Previous Projects</button></Link>
              </div>
            </div>
          ))}
        </div>

        <ContactDeveloper />
        <Link to="/contact"><button className='portfolioButton'> Contact Me</button></Link>
      </div>
    </div>
  )
}

export default Projects