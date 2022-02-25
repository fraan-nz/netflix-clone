import styled from "styled-components";

export const StyledBanner = styled.header`
	width: 100%;
	min-width: 350px;
	min-height: 448px;
	background-size: cover;
	background-position: center;
	object-fit: contain;
	position: relative;

	.banner__container {
		height: 190px;
		margin-left: 3.5%;
		padding-top: 140px;
	}

	.banner__title {
		font-size: 3rem;
		font-weight: 800;
		padding-bottom: 0.3rem;
		color: #fff;
	}

	.banner__button {
		cursor: pointer;
		color: #fff;
		outline: none;
		border: none;
		font-weight: 700;
		border-radius: 0.2vw;
		padding-inline: 2rem;
		margin-right: 1rem;
		padding-block: 0.5rem;
		background-color: rgba(51, 51, 51, 0.5);

		&:hover {
			color: #000;
			background-color: #e6e6e6;
			transition: all 0.2s;
		}
	}

	.banner__description {
		width: 20rem;
		max-width: 360px;
		height: 80px;
		color: #fff;
		line-height: 1.3;
		padding-top: 1rem;
		font-size: 0.8rem;
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