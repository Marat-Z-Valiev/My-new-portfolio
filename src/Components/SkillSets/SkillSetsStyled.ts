import styled from "styled-components";

const SkillSetsStyled = styled.div`
	padding: 30px;

	#skillSet {
		display: flex;
		flex-direction: column;
		justify-items: center;
	}

	h1 {
		text-align: center;
		color: #f7fdfade;
	}

	.skills {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-gap: 15px;
		justify-items: center;

		@media (min-width: 1366px) {
			width: 75%;
			width: 800px;
			margin: 0 auto;
		}

		i {
			font-size: 80px;
		}
		img {
			width: 80px;
			height: 80px;
		}
	}
`;

export default SkillSetsStyled;
