import React from "react";
import Project from "../Project/Project";
import ProjectsStyled from "./ProjectsStyled";
import projects from "../../data/projects";

const Projects: React.FC = () => {
	return (
		<ProjectsStyled>
			<div id="projects" className="projects-list">
				{Object.keys(projects).map((key) => (
					<Project key={key} project={projects[key]} />
				))}
			</div>
		</ProjectsStyled>
	);
};

export default Projects;
