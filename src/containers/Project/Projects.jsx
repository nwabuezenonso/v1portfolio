import React from 'react';
import './Projects.css';
import { Link } from 'react-router-dom';
import { image, image2, image3, image4} from '../../assets';
import { ContactDeveloper } from '../../components';

const project_details = [ 
  {
    "project_image" : image,
    "project_name": "Weather App",
    "project_details": "Installable and lightweight PWA  that  reads weather forecast",
    "project_tags": "ReactJS, CSS, JavaScript",
    "source": 'https://github.com/nwabuezenonso/weather-app-pwa',
    "visit": 'https://fascinating-blancmange-fddc43.netlify.app/',
    "id": 1
  },
  {
    "project_image" : image2,
    "project_name": "A photography website.",
    "project_details": "A photography website. build for a photography brand",
    "project_tags": "ReactJS, CSS",
    "source": 'https://github.com/nwabuezenonso/damanimedia',
    "visit": 'https://damanimedia.netlify.app/',
    "id": 2
  },
  {
    "project_image" : image3,
    "project_name": "Bugety",
    "project_details": "A voice controlled budget tracker app for tracking income and expenses",
    "project_tags": "ReactJS, CSS,  Speechly", 
    "source": 'https://github.com/nwabuezenonso/voice-powered-budget-tracker',
    "visit": 'https://budget-trackerapp.netlify.app/',
    "id": 3
  },
  {
    "project_image" : image4,
    "project_name": "Messenger",
    "project_details": "A messenging platform that allows users to send messages",
    "project_tags": "ReactJS, CSS,  Node, Socket io", 
    "source": 'https://github.com/nwabuezenonso/chat-application',
    "visit": 'https://62664236be3a43461d7f44f9--the-awesome-chukwunonso-site-d6024.netlify.app/',
    "id": 4
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
              <img src= { info.project_image } alt=""/>
              <div className='project_info'>
                <h1 className='project_title'>{info.project_name}</h1>
                <p className='project_body'>{info.project_details}</p>
                <p className='project_tags'>{info.project_tags}</p>
                <Link to={info.visit}><button className='project_btn'>Open site</button></Link>
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