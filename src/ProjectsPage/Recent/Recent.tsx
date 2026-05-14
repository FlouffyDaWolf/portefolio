import './Recent.css';
import Cards from '../../ProjectCards/Cards';

function Recent() {
  return (
    <div className="Recent">
        <h2>
            Recent projects
        </h2>
        <div className="cards">
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
    </div>
  );
}

export default Recent;