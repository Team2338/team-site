import "./Subteams.scss";
import ElectricalTeam from "./SubTeams/ElectricalTeam.jsx";
import MarketingTeam from "./SubTeams/MarketingTeam.jsx";
import MechanicalTeam from "./SubTeams/MechanicalTeam.jsx";
import OutreachTeam from "./SubTeams/OutreachTeam.jsx";
import ScoutingTeam from "./SubTeams/ScoutingTeam.jsx";
import SoftwareTeam from "./SubTeams/SoftwareTeam.jsx";
import TeamCaptain from "./SubTeams/TeamCaptain.jsx";
import TeamLeaders from "./SubTeams/TeamLeaders.jsx";
import Intro from "./Subteams-Intro.jsx";

function Subteams() {
    return (
        <>
            <div className="subteam">
                <Intro/>
                <section className="teams">
                    <div className="bo">
                        <TeamCaptain/>
                    </div>
                    <div className="bo">
                        <ElectricalTeam/>
                    </div>
                    <div className="bo">
                        <MarketingTeam/>
                    </div>
                    <div className="bo">
                        <MechanicalTeam/>
                    </div>
                    <div className="bo">
                        <OutreachTeam/>
                    </div>
                    <div className="bo">
                        <ScoutingTeam/>
                    </div>
                    <div className="bo">
                        <SoftwareTeam/>
                    </div>
                    <div className="bo">
                        <TeamLeaders/>
                    </div>
                        
                </section>
            </div>
        </>
    );
}

export default Subteams;