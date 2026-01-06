import './Woopsie.css';
import { usePageInfo } from "./../../PageContext";

function Woopsie() {
    const { setHover } = usePageInfo();
  return (
    <div className="Woopsie">
        <h1>And some extra !</h1>
        <div>
            <img src={`${process.env.PUBLIC_URL}/Img/Woopsie.png`}/>
            <h3>
                With friends, we decided to create Woopsie Creations !<br/>
                An indi software development studio, to create games and software of all kinds.
            </h3>
            <button onClick={() => window.location.href = 'https://github.com/Woopsie-Creations'} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>See more</button>
        </div>
    </div>
  );
}

export default Woopsie;