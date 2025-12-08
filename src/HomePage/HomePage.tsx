import React from 'react';
import './HomePage.css';
import Landing from './Landing/Landing';
import Projects from './Projects/Projects';

function HomePage() {
  return (
    <div className="HomePage">
      <>
        <div className="glow" style={{top: "40vh", left: "30vw",}}></div>
        <div className="glow" style={{top: "80vh", left: "70vw",}}></div>
        <div className="glow" style={{top: "-10vh", left: "90vw",}}></div>
        <div className="glow" style={{top: "70vh", left: "-8vw",}}></div>
      </>
      <div className="sections">
        <Landing />
        <Projects />
      </div>
    </div>
  );
}

export default HomePage;