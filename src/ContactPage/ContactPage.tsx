import './ContactPage.css';
import Glow from ".././Decorations/Glow";
import { usePageInfo } from "./../PageContext";

function ContactPage() {
    const { setHover } = usePageInfo();
  return (
    <div className="ContactPage">
        <Glow />
        <div className="Box">
            <h2>Wanna ask something ?</h2>
            <h3>I am available at any moment !</h3>
            <div>
                <a href= {"https://discord.com/users/545212305353342986"} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}><img src={`${process.env.PUBLIC_URL}/Img/discord.png`} height="60px" width="60px"></img></a>
                <a href={"mailto: evanmideo@hotmail.com"} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}><img src={`${process.env.PUBLIC_URL}/Img/gmail.png`} height="60px" width="60px"></img></a>
            </div>
        </div>
    </div>
  );
}

export default ContactPage;