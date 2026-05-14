import './All.css';
import Cards from '../../ProjectCards/Cards';

function All() {
  return (
    <div className="All">
        <h2>
            Every projects
        </h2>
        <div className="cards">
            <div className='item'>
                <Cards image={process.env.PUBLIC_URL + "/Img/Larron.png"} 
                        name='Larron'
                        desc='Play as a racoon and bring chaos in a medieval castle !'
                        tags={["Unity", "C#", "Game", "Mobile", "Chaos"]}
                        link="WIP" />
            </div>
            <div className='item'>
                <Cards image={process.env.PUBLIC_URL + "/Img/AuroraCode.png"} 
                        name="Aurora" 
                        desc="Game engine made from the ground up using C# and the OpenTK graphic library (a C# library port of OpenGL). WIP" 
                        tags={["C#", "Engine", "OpenTK", "WIP"]}
                        link="PRIVATE" />
            </div>
            <div className='item'>
                <Cards image={process.env.PUBLIC_URL + "/Img/acs.png"} 
                        name="ACS" 
                        desc="Tank simulator using the advantages of the Aurora engine for tank crew training and sim fans. WIP" 
                        tags={["C#", "Simulator", "Tanks", "WIP"]}
                        link="PRIVATE" />
            </div>
            <div className='item'>
                <Cards image={process.env.PUBLIC_URL + "/Img/arcade.jpg"} 
                        name="Arcade games" 
                        desc="Games made in assembly on dosbox for arcade like games." 
                        tags={["Assembly NASM", "Game", "Arcade"]}
                        link="https://github.com/Woopsie-Creations/Arcade-Games" />
            </div>
            <div className='item'>
                <Cards image={process.env.PUBLIC_URL + "/Img/PQ.png"} 
                        name="Path Quick" 
                        desc="Quickest path finder algorithm for fast results!" 
                        tags={["C++", "Algorithm", "A*"]}
                        link="https://github.com/algosup/2024-2025-project-3-quickest-path-team-6" />
            </div>
        </div>
    </div>
  );
}

export default All;