import styled from "styled-components";

const ConactStyled = styled.div`
	#contact {
		background-color: #ffffff;
		width: 100%;
		padding-top: 40px;
		padding-bottom: 40px;
	}
	h1 {
		text-align: center;
	}

	.links {
		display: flex;
		flex-direction: row;
		justify-content: center;

		.socialLinks {
			padding: 10px;
			background: #25242e;
			margin-right: 10px;

			i {
				color: #ffffff;
				transition: color ease-in 0.3s;

				&:hover {
					color: #077793;
				}
			}
		}
	}
`;

export default ConactStyled;
