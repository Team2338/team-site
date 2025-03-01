import "../Subteams.scss";

function SoftwareTeam() {
	return (
		<>
			<section className="section softwareCaptain-section">
				<div className="content">
					<div className="right">
						<img
							src=".\SubTeams Photos\Programming_Ico.jpg"
							alt="Software Team"
							className="image-circle"
						/>
					</div>
					<div className="left">
						<h1 className="captain-title">Software</h1>
						<p className="sub-paragraph">
							Our software subteam is responsible for managing all
							programming operations on our team. We are split
							into two primary teams. Our web app team, who are
							responsible for building our yearly scouting app, as
							well as our website. And our robot team who are
							responsible for developing code for our robot, and
							ensuring quality of service through performances at
							competition. Primarily working with electrical to
							identify what we need to control and identify on the
							robot, and scouting on our app side to identify what
							data we need to collect.
						</p>
					</div>
				</div>
			</section>
		</>
	);
}

export default SoftwareTeam;
