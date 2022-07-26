import React from "react";
import { Routes, Route} from 'react-router-dom';
import { Navbar,Footer } from './components';
import { Home } from './containers'

function App() {
  return (
    <div className="App">
      <div className="background">
        <Navbar/>
        {/* <Routes>
          <Route path="/" element={<Home /> }/>
        </Routes> */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
