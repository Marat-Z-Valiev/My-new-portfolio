import React from "react";
import ContactStyled from "./ContactStyled";

const Contact: React.FC = () => {
	return (
		<ContactStyled>
			<div id="contact">
				<h1>Contact</h1>
				<div className="links">
					<div className="socialLinks">
						<a
							href="https://www.linkedin.com/in/marat-valiev-89352390/"
							target="blank"
						>
							<i className="fab fa-linkedin fa-3x"></i>
						</a>
					</div>
					<div className="socialLinks">
						<a href="https://github.com/Marat-Z-Valiev" target="blank">
							<i className="fab fa-github-square fa-3x"></i>
						</a>
					</div>
				</div>
			</div>
		</ContactStyled>
	);
};

export default Contact;
