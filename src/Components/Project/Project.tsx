import React from "react";
import ProjectStyled from "./ProjectStyled";

interface ProjectProps {
	project: any;
}

const Project: React.FC<ProjectProps> = ({project}) => {
	const {
		name,
		description,
		image,
		websiteLink,
		githubLink,
		backgroundClass,
		position,
	} = project;
	const backgroundColor = backgroundClass === "white" ? "white" : "blue";
	const imagePosition = position === "right" ? "right" : "";
	return (
		<ProjectStyled>
			<div className={`project ${backgroundColor}`}>
				<div className="project-info">
					<img className={imagePosition} src={image} alt="" />
					<div className="project-description">
						<h2>{name}</h2>
						<p className="project-summary">{description}</p>
					</div>
				</div>
				<h2>Technologies</h2>
				<div className="technologies">
					<img src="https://i.ibb.co/qYDMK54/React-js-logo.png" alt="" />
					<img src="https://i.ibb.co/QCN8KZ9/redux.png" alt="" />
					<img src="https://i.ibb.co/Ct9gHzc/typescript.png" alt="" />
				</div>
				<div className="buttons">
					<a href={websiteLink} target="blank">
						Live Preview
					</a>
					<a href={githubLink} target="blank">
						View Github
					</a>
				</div>
			</div>
		</ProjectStyled>
	);
};

export default Project;
