import styled from "styled-components";

export const StyledBanner = styled.header`
	width: 100%;
	min-width: 350px;
	min-height: 80vh;
	background-size: cover;
	background-position: center top;
	object-fit: cover;
	position: relative;

	.banner__container {
		max-width: 600px;
		margin-left: 3.5%;
		padding-top: 30vh;
	}

	.banner__title {
		font-size: 4rem;
		font-weight: 800;
		padding-bottom: 0.3rem;
		color: ${({ theme }) => theme.colors.white};
		text-shadow: 1px 1px 3px rgba(51, 51, 51, 0.8);
	}

	.banner__button {
		cursor: pointer;
		color: #fff;
		outline: none;
		border: none;
		font-size: 1.4rem;
		font-weight: 700;
		border-radius: 0.2vw;
		padding-inline: 2rem;
		margin-right: 1rem;
		padding-block: 0.5rem;
		background-color: rgba(51, 51, 51, 0.8);

		&:hover {
			color: #000;
			background-color: #e6e6e6;
			transition: all 0.2s;
		}
	}

	.banner__description {
		color: ${({ theme }) => theme.colors.white};
		line-height: 1.3;
		padding-top: 1rem;
		font-size: 1.6rem;
		text-shadow: 1px 1px 3px rgba(51, 51, 51, 0.8);
	}

	.banner--fadeBottom {
		width: 100%;
		height: 7.4rem;
		background-image: linear-gradient(
			180deg,
			transparent,
			rgba(37, 37, 37, 0.6),
			#141414
		);
		position: absolute;
		left: 0;
		bottom: 0;
		z-index: 1;
	}
`;
