import React from "react";
import SkillSetsStyled from "./SkillSetsStyled";

const SkillSets: React.FC = () => {
	return (
		<SkillSetsStyled>
			<div id="skillSet">
				<h1>Skill Sets</h1>
				<div className="skills">
					<i className="devicon-html5-plain-wordmark"></i>
					<i className="devicon-css3-plain-wordmark"></i>
					<i className="devicon-javascript-plain"></i>
					<i className="devicon-java-plain-wordmark"></i>
					<i className="devicon-react-original-wordmark"></i>
					<i className="devicon-git-plain-wordmark"></i>
					<i className="devicon-typescript-plain"></i>
					<img src="https://i.ibb.co/XDzR2Lc/responsive-design.png" alt="" />
					<img src="https://i.ibb.co/27b0Qt1/api.png" alt="" />
				</div>
			</div>
		</SkillSetsStyled>
	);
};

export default SkillSets;
