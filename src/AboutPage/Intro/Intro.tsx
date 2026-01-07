import React from 'react';
import './Intro.css';

function Intro() {
  return (
    <div className="Intro">
      <div className="Images" style={{height: "fit-content", width: "fit-content", padding: "10px", display: "grid"}}>
        <img src={`${process.env.PUBLIC_URL}/Img/Flouffy.jpg`} alt="feur"></img>
        <img src={`${process.env.PUBLIC_URL}/Img/moi.jpg`} alt="feur"></img>
      </div>
      <div className="Text" style={{height: "fit-content", width: "38vw", transform: "translateY(30px)"}}>
        <div style={{height: "fit-content", margin: "0"}}>
          <h1>I'm <span>Evan</span><br/> alias <span>Flouffy</span></h1>
          <h3>
            I'm a <span>software developer</span> looking for <span>new horizons</span><br/><br/>
            <span>Discovering</span> and <span>creating</span> are my <span>everyday hobbies</span>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Intro;