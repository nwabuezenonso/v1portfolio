import React from 'react';
import './Projects.css'
import { image} from '../../assets';
import { ContactDeveloper } from '../../components';

const Projects = () => {
  return (
    <div>
      <div className='projects'>
        <div className='project_intro'>
          <h1>My Projects <span role="img" aria-label="project">🤖</span></h1>
          <p>A collection of various projects I've worked on. </p>
        </div>
        <div className='project_card'>
          <div className='project1'>
            <img src= { image } alt=""/>
            <h1 className='project_title'>Voice powered expense tracker</h1>
            <p className='project_body'>A simple voice activated budget calculator used to calculate income and expenses.</p>
            <ul>
              <li>Reactjs</li>
              <li>JavaScript</li>
              <li>Reactjs</li>
              <li>Reactjs</li>
              <li>Reactjs</li>
            </ul>
            <button>Live preview</button>
          </div>
        </div>

        <ContactDeveloper />
      </div>
    </div>
  )
}

export default Projects