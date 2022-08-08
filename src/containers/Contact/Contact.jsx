import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

const Contact = () => {
  return (
    <div>
      <div className='contact'>
        <div className='heading'>
          <p>Collaborations are welcome</p>
          <h1>Let's Work Together <span role="img" aria-label="Let's Work Together">🤝</span></h1>
        </div>
        <div className='content'>
          <p>You can reach out to me via Email or any of the social media icon below <br/> you can stay in touch with me on Twitter, Github and Linkedin where I post my works.</p>
        </div>
        <Link to="about"><button className='portfolioButton'>Contact Me</button></Link>
      </div>
    </div>
  )
}

export default Contact