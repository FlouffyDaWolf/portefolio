import React from 'react';
import './SkillBox.css';

function SkillBox({image}: {image: string}) {
  return (
    <div className="SkillBox">
      <img src={image}>
      </img>
    </div>
  );
}

export default SkillBox;