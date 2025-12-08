import './Buttons.css';
import { usePageInfo } from "./../PageContext";

function Buttons({ className, id, text }: {className: string, id: number, text: string }) {
    const { ChangePage } = usePageInfo();
    const { setHover } = usePageInfo();
    return (
    <button className={className} id={String(id)} onClick={() => ChangePage(id)} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      {text}
    </button>
  );
}

export default Buttons;