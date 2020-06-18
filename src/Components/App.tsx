import React from "react";
import {createGlobalStyle} from "styled-components";
import Navigation from "./Navigation/Navigation";
import About from "./About/About";
import Projects from "./Projects/Projects";
import SkillSets from "./SkillSets/SkillSets";
import Contact from "./Contact/Contact";

const App = () => {
	const GlobalStyle = createGlobalStyle`
	body {
	font-family: "Baloo Chettan 2", cursive;
	background-color: #2891de;
	box-sizing: border-box;
	margin: 0;
	padding: 0;
	}
	`;

	return (
		<>
			<GlobalStyle />
			<Navigation />
			<About />
			<Projects />
			<SkillSets />
			<Contact />
		</>
	);
};

export default App;
