import "../Contact.scss";
import "../../../globals.scss";
import { LocationOnSharp, Mail } from "@mui/icons-material";

function ContactForm() {
	return (
		<section className="contact-form">
			<div className="email details">
				<div className="heading">
					<i className="icon">
						<Mail />
					</i>
					<h3 className="title">Email</h3>
				</div>
				<p className="detail">2338FRC [at] sd308 [dot] org</p>
			</div>
			<div className="location details">
				<div className="heading">
					<i className="icon">
						<LocationOnSharp />
					</i>
					<h3 className="title">Location</h3>
				</div>
				<p className="detail">Oswego, IL</p>
			</div>
		</section>
	);
}

export default ContactForm;
