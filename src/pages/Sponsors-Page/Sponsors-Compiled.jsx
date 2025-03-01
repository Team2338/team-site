import "./Sponsors.scss";
import Intro from "./Sponsors-Intro";
import Caterpillar from "./Sponsors/Caterpillar.jsx";
import Molex from "./Sponsors/Molex.jsx";
import CargoHansa from "./Sponsors/CargoHansa.jsx";
import TEConnectivity from "./Sponsors/TEConnectivity.jsx";
import GERB from "./Sponsors/GERB.jsx";
import IFoundation from "./Sponsors/IntuitiveFoundation.jsx";
import Clarity from "./Sponsors/Clarity.jsx";
import SD308 from "./Sponsors/SD308.jsx";

function Sponsors() {
	return (
		<>
			<div className="sponsor">
				<Intro />
				<section className="sponsors">
					<div className="bo">
						<SD308 />
					</div>
					<div className="bo">
						<Caterpillar />
					</div>
					<div className="bo">
						<Molex />
					</div>
					<div className="bo">
						<CargoHansa />
					</div>
					<div className="bo">
						<TEConnectivity />
					</div>
					<div className="bo">
						<GERB />
					</div>
					<div className="bo">
						<IFoundation />
					</div>
					<div className="bo">
						<Clarity />
					</div>
				</section>
			</div>
		</>
	);
}

export default Sponsors;
