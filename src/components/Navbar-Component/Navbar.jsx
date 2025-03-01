import "./Navbar.scss";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";

function Navbar(props) {
	const [showNav, setShowNav] = React.useState(false);

	const toggleNav = () => {
		setShowNav(!showNav);
	};

	return (
		<div>
			<nav className="navbar desktopNav">
				<ul>
					<li>
						<a href="/" className="logo-nav">
							<img
								src="/2338-logo.svg"
								alt="2338 Logo"
								width="80"
								height="80"
							/>
						</a>
					</li>
					<li>
						<a href="/" className="title-nav">
							<h1>Gear It Forward</h1>
						</a>
					</li>
				</ul>
				<ul>
					<li className="nav-links">
						<a href="/subteams">Subteams</a>
					</li>
					<li className="nav-links">
						<a href="/outreach">Outreach</a>
					</li>
					<li className="nav-links">
						<a href="/robots">Robots</a>
					</li>
					<li className="nav-links">
						<a href="/resources">Resources</a>
					</li>
					<li className="nav-links">
						<a href="/sponsors">Sponsors</a>
					</li>
					<li className="nav-links">
						<a href="/contact">Contact</a>
					</li>
				</ul>
			</nav>
			<nav className="navbar mobileNav">
				<ul>
					<li>
						<a href="/" className="logo-nav">
							<img
								src="/2338-logo.svg"
								alt="2338 Logo"
								width="80"
								height="80"
							/>
						</a>
					</li>
					<li>
						<a href="/" className="title-nav">
							<h1>Gear It Forward</h1>
						</a>
					</li>
				</ul>
				<MenuIcon onClick={toggleNav} />
			</nav>
			<div className={`nav-elements ${showNav ? "active" : null}`}>
				<CloseIcon onClick={toggleNav} />
				<a href="/subteams">Subteams</a>
				<a href="/outreach">Outreach</a>
				<a href="/robots">Robots</a>
				<a href="/resources">Resources</a>
				<a href="/sponsors">Sponsors</a>
				<a href="/contact">Contact</a>
			</div>
		</div>
	);
}

export default Navbar;
