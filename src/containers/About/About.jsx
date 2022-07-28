import React from 'react';
import "./About.css";
import { css, figma, git, graphql, html, js, node, react, redux, sass,typescript } from '../../assets'

const About = () => {

  const tech = [ {
    
  }]
  const techStack  = [ css, figma, git, graphql, html, js, node, react, redux, sass,typescript ]
  return (
    <div>
      <div className='About'>
        <div className='AboutTitle'>
          <p>A Bit more</p>
          <h1>About me<span role="img" aria-label="smiley face">🙂</span></h1>
        </div>
        <p className='AboutBody'>
          I'm Chinonso Nwabueze, A software engineer currently based in Nigeria. Who loves turning ideas from thought to reality. <br/>I specialize in creating functional user interfaces and making the user experience as comfortable as possible.<br/><br/>
          I started my career as a freelance developer where I built project for small business and startups and around that time i started understanding more about frontend developement with React. <br/> Right now i am currently building web apps with Nodejs as a Backend and also exploring the Web3 space.<br/><br/>
          When I'm not working I'm either watching movie or Anime 🎬, Playing games with my friends on🎮, Chatting 💬, doing some art work 🎨 or working out at the gym 🏋🏽‍♂️.
        </p>

        <div className='Technologies'>
          <div className='Technology_title'>
            <h1>TECHNOLOGIES<span role="img" aria-label="technologies">⚒️</span></h1>
            <p>Here are some of the design software packages, programming languages and frameworks that I use frequently. I'm always looking forward to learn new things everyday!</p>
          </div>
          <div className='Technology_stack'>
            <div className='Stack'>
              { techStack.map((item, index) => (
                <>
                <div className='stack_background'>
                  <img src={item} alt={index} width="20px" />
                  <span>some text</span>
                </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
        

    </div>
  )
}

export default About