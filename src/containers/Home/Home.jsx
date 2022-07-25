import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className='intro'>
      <div className='intro_text'>
        <p>Hi, i’m <span>Chinonso Nwabueze.</span></p>
        <h1>Software Engineer</h1>
        <p>currently based in Nigeria. I create code based innovation and solve problems using web technologies. I am currently exploring blockchain technologies</p>
       <div id='resume'>
          <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 0V3H1L4 6L7 3H5V0H3ZM0 7V8H8V7H0Z" fill="black"/></svg><a href='/'>Resume</a><br/>
          <div></div>
       </div>
        <button>About</button>
      </div>
    </div>
  )
}

export default Home