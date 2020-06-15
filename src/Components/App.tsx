import React from "react";
import {createGlobalStyle} from "styled-components";
import Navigation from "./Navigation/Navigation";
import About from "./About/About";
import Projects from "./Projects/Projects";

const App = () => {
	const GlobalStyle = createGlobalStyle`
	body {
	font-family: "Baloo Chettan 2", cursive;
	background-color: #2891de;
	box-sizing: border-box;
	margin: 0;
	padding: 0;
	}

	.error-message{
		text-align: center;
		color: #ffffff;
		font-size: 1.3rem;
	}
	`;

	return (
		<>
			<GlobalStyle />
			<Navigation />
			<About />
			<Projects />
		</>
	);
};

export default App;
