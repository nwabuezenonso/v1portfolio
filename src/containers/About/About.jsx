import React from 'react';
import "./About.css";
import ""

const About = () => {
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
            <h1>TECHNOLOGIES<span>⚒️</span></h1>
          </div>
          <div className='Technology_stack'>
              <div className='firstStack'>
                <img src='./'></img>
              </div>
              <div className='secondStack'></div>
          </div>
        </div>
      </div>
        

    </div>
  )
}

export default About