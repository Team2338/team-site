import './Landing-Compiled.scss';
import Landing from "./Landing/Landing";
import Details from "./Details/Details";
//import CurrBot from "./CurrBot/CurrBot";

function FullLanding(props) {
    return (
        <div>
            <Landing />
            <Details />
            {/* <CurrBot /> */}
        </div>
    );
}

export default FullLanding;