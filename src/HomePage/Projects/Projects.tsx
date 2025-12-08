import './Projects.css';
import { usePageInfo } from "./../../PageContext";
import Cards from './Cards/Cards';

function Projects() {
  const { ChangePage } = usePageInfo();
  const { setHover } = usePageInfo();
  return (
    <div className="Projects">
      <h1>Recent projects</h1>
      <div className='ProjectList'>
        <Cards image={process.env.PUBLIC_URL + "/Img/AuroraCode.png"} name="Aurora" desc="Game engine made from the ground up using C# and the OpenTK graphic library (a C# library port of OpenGL). WIP" tags={["C#", "Engine", "OpenTK", "WIP"]}/>
        <Cards image={process.env.PUBLIC_URL + "/Img/acs.png"} name="ACS" desc="Tank simulator using the advantages of the Aurora engine for tank crew training and sim fans. WIP" tags={["C#", "Simulator", "Tanks", "WIP"]}/>
        <Cards image={process.env.PUBLIC_URL + "/Img/arcade.jpg"} name="Arcade games" desc="Games made in assembly on dosbox for arcade like games." tags={["Assembly NASM", "Game", "Arcade"]}/>
      </div>
      <button onClick={() => ChangePage(3)} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>See more</button>
    </div>
  );
}

export default Projects;