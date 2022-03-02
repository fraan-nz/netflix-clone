import styled from "styled-components";

export const StyledNavBar = styled.nav`
	width: 100%;
	height: 68px;
	padding: 0 3.5%;
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	top: 0;
	z-index: 10;
	transition: all 0.5s ease;
	background-color: ${({ theme, bg }) =>
		bg === false ? "transparent" : theme.colors.black};

	.nav__container {
		width: 100%;
		display: flex;
		justify-content: space-between;
	}

	.nav__logo {
		height: 25px;
		width: 92.5px;
		margin-top: 5px;
		cursor: pointer;
	}

	.nav__avatar {
		height: 32px;
		width: 32px;
		border-radius: 5px;
		cursor: pointer;
	}

	.nav__button {
		color: ${({ theme }) => theme.colors.white};
		font-size: 1rem;
		padding: 7px 17px;
		background-color: ${({ theme }) => theme.colors.red};
		font-weight: 400;
		border: none;
		border-radius: 2px;
		cursor: pointer;
	}
`;
