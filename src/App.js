import React from "react";
import { Routes, Route} from 'react-router-dom';
import { Navbar,Footer } from './components';
import { Home } from './containers'

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home /> }/>
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
