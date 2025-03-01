import "../Sponsors.scss";

function Clarity() {
	return (
		<section className="section">
			<div className="content">
				<div className="right">
					<img
						src="/sponsors/Clarity.png"
						alt=""
						className="image-circle"
					/>
				</div>
				<div className="left gray-part">
					<h1 className="captain-title">Clarity</h1>
					<p className="sub-paragraph">
						Clarity is a mission-first software and data engineering
						platform supporting the DoD, IC and Federal Agency
						communities dedicated to enabling the future of warfare
						and national security. To learn more about Clarity,
						visit their{" "}
						<a
							href="https://clarityinnovates.com/"
							target="_blank"
							rel="noreferrer"
						>
							website.
						</a>
						.
					</p>
				</div>
			</div>
		</section>
	);
}

export default Clarity;
