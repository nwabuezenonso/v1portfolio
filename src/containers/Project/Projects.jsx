import React from 'react';
import './Projects.css';
import { Link } from 'react-router-dom';
import { image, image2} from '../../assets';
import { ContactDeveloper } from '../../components';

const project_details = [ 
  {
    "project_image" : image,
    "project_name": "Weather App",
    "project_details": "A Platform that provides weather data in any location",
    "project_tags": "ReactJS, CSS, JavaScript",
    "id": 1
  },
  {
    "project_image" : image2,
    "project_name": "An website build for a photography brand",
    "project_details": "A simple voice activated budget calculator used to calculate income and expenses.",
    "project_tags": "ReactJS, CSS",
    "id": 2
  },
  // {
  //   "project_name": "Voice powered expense tracker",
  //   "project_details": "A simple voice activated budget calculator used to calculate income and expenses.",
  //   "project_tags": ["React", "Node", "HTML"],
  //   "id": 3
  // }
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
              <img src= { info.project_image } alt=""/>
              <div className='project_info'>
                <h1 className='project_title'>{info.project_name}</h1>
                <p className='project_body'>{info.project_details}</p>
                <p className='project_tags'>{info.project_tags}</p>
                <Link to="/about"><button className='project_btn'>Open site</button></Link>
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