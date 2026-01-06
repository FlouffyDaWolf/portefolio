import React from 'react';
import './Glow.css';

function Glow() {
  return (
    <div className='Glow'>
        <div className="glow" style={{top: "40vh", left: "30vw",}}></div>
        <div className="glow" style={{top: "80vh", left: "70vw",}}></div>
        <div className="glow" style={{top: "-10vh", left: "90vw",}}></div>
        <div className="glow" style={{top: "70vh", left: "-8vw",}}></div>
    </div>
  );
}

export default Glow;