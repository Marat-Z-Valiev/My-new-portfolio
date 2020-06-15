import styled from "styled-components";

const NavStyled = styled.div`
	header {
		position: absolute;
		top: 0;
		width: 100%;
		background-color: transparent;
		box-shadow: none;
		padding-top: 15px;
		padding-bottom: 15px;
		transition: 0.2s background-color ease-in-out, 0.2s box-shadow ease-in-out,
			0.2s padding-top ease-in-out, 0.2s padding-bottom ease-in-out;
	}

	.fixed {
		position: fixed;
		z-index: 100;
		box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
			0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
		background-color: #1175c0;
		padding-top: 0;
		padding-bottom: 0;
	}

	.menu {
		display: flex;
		justify-content: space-around;
		align-items: center;
		height: 60px;
		z-index: 5;
		margin-top: 0;

		.links {
			display: flex;
			width: 500px;
			justify-content: space-around;

			@media (min-width: 320px) and (max-width: 425px) {
				margin-left: -40px;
				flex-direction: column;
				text-align: center;
				padding: 15px 5px;
				transform: translateX(-120%);
				transition: transform 0.5s ease-out;
				background-color: #1175c0;
				width: 100vw;

				li {
					justify-content: space-between;
				}
			}
		}

		.toggle {
			display: none;
		}

		h1 {
			font-size: 2.3rem;
		}

		li {
			list-style: none;
			font-size: 1.3rem;
		}
		a {
			text-decoration: none;
			color: #ffffff;

			&:hover {
				color: #11ee1c;
				text-decoration: underline;
				cursor: pointer;
			}
		}
		a.active {
			color: #11ee1c;
		}

		@media (min-width: 320px) and (max-width: 425px) {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			flex-wrap: wrap;
			height: 100px;

			.open {
				transform: translateX(0);
			}

			.toggle {
				display: block;

				button {
					background: transparent;
					border: none;
					color: #ffffff;
					margin-right: 60px;
				}
			}
		}
	}
`;

export default NavStyled;
