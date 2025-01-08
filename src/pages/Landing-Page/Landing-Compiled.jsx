import './Landing-Compiled.scss';
import Landing from "./Landings/Landing.jsx";
import Details from "./Details/Details.jsx";
import CurrBot from "./Bot/Current-Bot.jsx";

function FullLanding(props) {
    return (
        <div>
            <Landing />
            <Details />
            <CurrBot /> 
        </div>
    );
}

export default FullLanding;