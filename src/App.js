import React from "react";
import { Routes, Route} from 'react-router-dom';
import { Navbar,Footer } from './components';
import { Home, About, Projects } from './containers'

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home /> }/>
          <Route path="about" element={<About />} />
          <Route path="projects" element={< Projects/>} />
          <Route path="contact" element={< Projects/>} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
