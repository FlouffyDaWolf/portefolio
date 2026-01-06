import './AboutPage.css';
import Intro from './Intro/Intro';
import Description from './Description/Description';
import Skills from './Skills/Skills';
import Woopsie from './WoopsieCreations/Woopsie';
import Glow from './../Decorations/Glow';

function AboutPage() {
  return (
    <div className="AboutPage">
        <Glow />
        <div className="sections">
            <Intro />
            <Description />
            <Skills />
            <Woopsie />
        </div>
    </div>
  );
}

export default AboutPage;