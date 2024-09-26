import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';
import Projects from './Components/Projects/Projects';
import Navbar from './Components/Navbar/Navbar';
import IndividualProjects from './Components/IndividualProject/IndividualProject';
import './styles.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />}/>
          {/* <Route path="/contact" element={<Contact />}/> */}
          <Route path="/projects/:projectId" element={<IndividualProjects />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
