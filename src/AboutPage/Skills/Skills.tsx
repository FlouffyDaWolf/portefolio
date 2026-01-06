import React from 'react';
import './Skills.css';
import SkillBox from './SkillBox/SkillBox';

function Skills() {
  return (
    <div className="Skills">
      <div className="Languages">
        <h3>
            Programing languages
        </h3>
        <div>
            <SkillBox image={process.env.PUBLIC_URL + "/Img/Languages/Asm.png"} />
            <SkillBox image={process.env.PUBLIC_URL + "/Img/Languages/Csharp.png"} />
            <SkillBox image={process.env.PUBLIC_URL + "/Img/Languages/Cpp.png"} />
            <SkillBox image={process.env.PUBLIC_URL + "/Img/Languages/Html.png"} />
            <SkillBox image={process.env.PUBLIC_URL + "/Img/Languages/Css.png"} />
            <SkillBox image={process.env.PUBLIC_URL + "/Img/Languages/Js.png"} />
            <SkillBox image={process.env.PUBLIC_URL + "/Img/Languages/React.png"} />
            <SkillBox image={process.env.PUBLIC_URL + "/Img/Languages/MDlight.png"} />
        </div>
      </div>
      <div className="Tools">
        <h3>
            Tools
        </h3>
        <div>
            <SkillBox image={process.env.PUBLIC_URL + "/Img/Tools/Unity.png"} />
            <SkillBox image={process.env.PUBLIC_URL + "/Img/Tools/vscode.png"} />
            <SkillBox image={process.env.PUBLIC_URL + "/Img/Tools/vs.png"} />
            <SkillBox image={process.env.PUBLIC_URL + "/Img/Tools/blender.png"} />
            <SkillBox image={process.env.PUBLIC_URL + "/Img/Tools/krita.png"} />
            <SkillBox image={process.env.PUBLIC_URL + "/Img/Tools/aseprite.png"} />
            <SkillBox image={process.env.PUBLIC_URL + "/Img/Tools/trello.png"} />
            <SkillBox image={process.env.PUBLIC_URL + "/Img/Tools/github.png"} />
            <SkillBox image={process.env.PUBLIC_URL + "/Img/Tools/linux.png"} />
            <SkillBox image={process.env.PUBLIC_URL + "/Img/Tools/windows.png"} />
        </div>
      </div>
    </div>
  );
}

export default Skills;