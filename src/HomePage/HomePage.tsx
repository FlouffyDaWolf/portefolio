import './HomePage.css';
import Landing from './Landing/Landing';
import Projects from './Projects/Projects';
import Glow from './../Decorations/Glow';

function HomePage() {
  return (
    <div className="HomePage">
      <Glow />
      <div className="sections">
        <Landing />
        <Projects />
      </div>
    </div>
  );
}

export default HomePage;