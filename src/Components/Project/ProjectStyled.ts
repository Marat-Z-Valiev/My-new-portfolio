import styled from "styled-components";

const ProjectStyled = styled.div`
	.white {
		clip-path: polygon(0 0%, 100% 4%, 100% 96%, 0% 100%);
		background-color: #ffffff;
	}

	.blue {
		clip-path: polygon(0 8%, 100% 4%, 100% 96%, 0% 100%);
		background-color: #2891de;
	}

	.project {
		padding-top: 50px;
		padding-bottom: 50px;

		.project-info {
			display: flex;
			justify-content: space-evenly;

			@media (max-width: 996px) {
				flex-direction: column;
			}

			.right {
				order: 2;
			}

			img {
				box-shadow: none;
				margin-left: 15px;
				width: 100%;
				height: auto;
				box-shadow: 10px 7px 52px -1px rgba(0, 0, 0, 0.37);

				@media (max-width: 996px) {
					order: 1;
					width: 90%;
					margin: 0 auto;
				}

				@media (min-width: 1366px) {
					width: 75%;
					width: 800px;
					margin: 0 auto;
				}
			}
		}
		.project-description {
			display: flex;
			flex-direction: column;
			justify-content: space-evenly;
			align-items: center;
			justify-content: end;

			h2 {
				font-size: 1.8rem;
			}

			.project-summary {
				padding: 15px;
				font-size: 1.3rem;
			}
		}
		.technologies {
			display: flex;
			justify-content: center;

			img {
				width: 80px;
				height: 80px;
				margin-right: 15px;
			}
		}

		.buttons {
			display: flex;
			justify-content: center;
			width: 100%;
			margin-top: 40px;

			a {
				width: 100%;
				max-width: 200px;
				padding: 15px;
				margin-right: 15px;
				color: #25242e;
				text-decoration: none;
				text-transform: uppercase;
				text-align: center;
				background-color: #549657;
				color: white;
				transition: background-color ease-in 0.3s;

				@media (min-width: 320px) and (max-width: 425px) {
					max-width: 100px;
				}

				&:hover {
					background-color: #3d7140;
				}
			}
		}
	}
`;

export default ProjectStyled;
