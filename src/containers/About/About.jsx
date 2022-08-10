import React from 'react';
import "./About.css";
import { Link } from 'react-router-dom';
import { ContactDeveloper } from '../../components';

const About = () => {

  const techStack  = [ "Figma","HTML","CSS & SCSS", "JavaScript" ,"Nodejs", "Express.Js","React","Redux","TypeScript","Next.Js", "GraphQL", "Gatsby.js", "Sanity Cms", "GraphCms", "Jest"]
  return (
    <div>
      <div className='About'>
        <div className='AboutTitle'>
          <p>A Bit more</p>
          <h1>About me<span role="img" aria-label="smiley face">🙂</span></h1>
        </div>
        <p className='AboutBody'>
          I'm Chinonso Nwabueze, A software engineer currently based in Nigeria. Who loves writing codes, building user friendly interactions, delivering solutions that drives business growth using modern web technology and turning ideas from thoughts to reality. I specialize in creating functional user interfaces and making the user experience as comfortable as possible.<br/><br/>
          I started my career as a freelance developer where I built project for small business and startups and around that time i started understanding more about frontend developement with React. Right now i am currently building web apps with Nodejs as a Backend and also exploring the Web3 space.<br/><br/>
          When I'm not working I'm either watching movie or Anime 🎬, Playing games with my friends 🎮, Chatting 💬 or Playing basketball 🏀.
        </p>

        <div className='Technologies'>
          <div className='Technology_title'>
            <h1>TECHNOLOGIES<span role="img" aria-label="technologies">⚒️</span></h1>
            <p>Here are some of the design software packages, programming languages and frameworks that I use frequently. I'm always looking forward to learn new things everyday!</p>
          </div>
          <div className='Technology_stack'>
            <div className='Stack'>
              <ul>
                { techStack.map((item, index) => (
                  <>
                    <li>{item}</li>
                  </>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className='experience'>
          <h1>Experiences</h1>
          <p>I have developed problem solving projects in collaboration with developers and clients, ranging from individuals to startups and non-profit organizations. See my <a href='/'>resume</a>  or visit my <a href='https://www.linkedin.com/in/chukwunonso-nwabueze/'>LinkedIn profile</a>  for additional information.</p>
        </div>        

        <ContactDeveloper />
        <Link to="/projects"><button className='portfolioButton'>View Previous Projects</button></Link>
      </div>
        

    </div>
  )
}

export default About