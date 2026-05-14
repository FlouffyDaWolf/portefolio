import './ProjectPage.css';
import Glow from ".././Decorations/Glow";
import Recent from './Recent/Recent';
import All from './All/All';

function ProjectPage() {
  return (
    <div className="ProjectPage">
        <Glow />
        <div className="sections">
            <Recent />
            <All />
        </div>
    </div>
  );
}

export default ProjectPage;