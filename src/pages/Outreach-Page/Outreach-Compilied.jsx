import './Outreach.scss';
import Intro from "./Outreach-Intro";
import AboutOutreach from "./Outreach-Details/AboutOutreach";
import UpcomingEvents from "./Outreach-Details/UpcomingEvents";
import Projects from "./Outreach-Details/Projects";

function Outreach(props) {
    return (
        <div className="outreach">
            <Intro/>
            <div className="content">
                <AboutOutreach/>
                <UpcomingEvents/>
                <Projects/>
            </div>
        </div>
    );
}

export default Outreach;