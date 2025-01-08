import "./Sponsors.scss";
import Intro from "./Sponsors-Intro";
import Caterpillar from "./Sponsors/Caterpillar.jsx";
import Molex from "./Sponsors/Molex.jsx";
import CargoHansa from "./Sponsors/CargoHansa.jsx";
import TEConnectivity from "./Sponsors/TEConnectivity.jsx";
import GERB from "./Sponsors/GERB.jsx";
import IFoundation from "./Sponsors/IntuitiveFoundation.jsx";

function Sponsors() {
    return (
        <>
            <div className="subteam">
                <Intro/>
                <section className="sponsors">
                    <div className="bo">
                        <Caterpillar/>
                    </div>
                    <div className="bo">
                        <Molex/>
                    </div>
                    <div className="bo">
                        <CargoHansa/>
                    </div>
                    <div className="bo"> 
                        <TEConnectivity/>
                    </div>
                    <div className="bo">
                        <GERB/>
                    </div>
                    <div className="bo">
                        <IFoundation/>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Sponsors;