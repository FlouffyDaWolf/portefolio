import './TopBar.css';
import Buttons from './Buttons';

function TopBar({id}: {id: number}) {
  return (
    <div className="TopBar">
      <Buttons className={id === 1 ? "Buttons selected" : "Buttons"} id={1} text={"Home"}/>
      <Buttons className={id === 2 ? "Buttons selected" : "Buttons"} id={2} text={"About me"}/>
      <Buttons className={id === 3 ? "Buttons selected" : "Buttons"} id={3} text={"Projects"}/>
      <Buttons className={id === 4 ? "Buttons selected" : "Buttons"} id={4} text={"Contact"}/>
    </div>
  );
}

export default TopBar;