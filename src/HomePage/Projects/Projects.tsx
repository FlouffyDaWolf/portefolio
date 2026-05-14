import './Projects.css';
import { usePageInfo } from "./../../PageContext";
import Cards from '../../ProjectCards/Cards';

function Projects() {
  const { ChangePage } = usePageInfo();
  const { setHover } = usePageInfo();
  return (
    <div className="Projects">
      <h1>Recent projects</h1>
      <div className='ProjectList'>
        <Cards image={process.env.PUBLIC_URL + "/Img/Larron.png"} 
                name='Larron'
                desc='Play as a racoon and bring chaos in a medieval castle !'
                tags={["Unity", "C#", "Game", "Mobile", "Chaos"]}
                link="WIP" />
        <Cards image={process.env.PUBLIC_URL + "/Img/AuroraCode.png"} 
                name="Aurora" 
                desc="Game engine made from the ground up using C# and the OpenTK graphic library (a C# library port of OpenGL). WIP" 
                tags={["C#", "Engine", "OpenTK", "WIP"]}
                link="PRIVATE" />
      </div>
      <button onClick={() => ChangePage(3)} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>See more</button>
    </div>
  );
}

export default Projects;