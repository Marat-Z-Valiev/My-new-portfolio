import React from "react";
import {createGlobalStyle} from "styled-components";
import NavBar from "./NavBar/NavBar";

const App = () => {
	const GlobalStyle = createGlobalStyle`
	body {
	font-family: "Baloo Chettan 2", cursive;
	background-color: #0c6cb4;
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
			<GlobalStyle>
				<NavBar></NavBar>
			</GlobalStyle>
		</>
	);
};

export default App;
