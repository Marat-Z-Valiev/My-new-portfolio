import React from "react";
import AboutStyled from "./AboutStyled";
import portfolioImage from "../../images/portfolio.jpg";

const About: React.FC = () => {
	return (
		<>
			<AboutStyled>
				<img src={portfolioImage} alt="" />
				<h2>Marat Valiev</h2>
				<h2>Web Developer</h2>
			</AboutStyled>
		</>
	);
};

export default About;
