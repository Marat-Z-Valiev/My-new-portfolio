import React from "react";
import Project from "../Project/Project";
import ProjectsStyled from "./ProjectsStyled";

const Projects: React.FC = () => {
	return (
		<ProjectsStyled>
			<div id="projects" className="projects">
				<h2>Projects</h2>
				<div className="projects-list">
					<Project></Project>
				</div>
			</div>
		</ProjectsStyled>
	);
};

export default Projects;
