import React from 'react';
import './Intro.css';

function Intro() {
  return (
    <div className="Intro">
      <div className="Box" style={{height: "fit-content", width: "fit-content", padding: "10px", display: "grid"}}>
        <img src={`${process.env.PUBLIC_URL}/Img/Flouffy.jpg`} alt="feur"></img>
        <img src={`${process.env.PUBLIC_URL}/Img/moi.jpg`} alt="feur"></img>
      </div>
      <div style={{height: "38vh", width: "38vw"}}>
        <h1 style={{margin: "0"}}>
          <h1>I'm <span>Evan</span>, alias <span>Flouffy</span></h1>
          <h2>A <span>software developper</span> that<br/>
            <span>can do more</span>
          </h2>
          
        </h1>
      </div>
    </div>
  );
}

export default Intro;