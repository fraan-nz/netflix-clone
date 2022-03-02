import styled from "styled-components";

export const StyledLoginScreen = styled.div`
	width: 100%;
	height: 100vh;
	background: url(./images/loginBg.jpg);
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;

	.loginScreen__gradient {
		width: 100%;
		height: 100vh;
		background-color: rgba(0, 0, 0, 0.4);
		background-image: linear-gradient(
			to top,
			rgba(0, 0, 0, 0.8) 0,
			rgba(0, 0, 0, 0) 60%,
			rgba(0, 0, 0, 0.8) 100%
		);
	}
	.loginScreen__content {
		width: 100%;
		padding: 20px;
		position: absolute;
		top: 30%;
		margin-left: auto;
		margin-right: auto;
		text-align: center;
		color: ${({ theme }) => theme.colors.white};
		z-index: 5;

		h1 {
			font-size: 3.2rem;
			margin-bottom: 20px;
		}
		h2 {
			font-size: 1.6rem;
			font-weight: 400;
			margin-bottom: 30px;
		}
		h3 {
			font-size: 1.3rem;
			font-weight: 400;
			margin-bottom: 20px;
		}

		.logginScreen__input {
			form {
				input {
					height: 60px;
					width: 30%;
					max-width: 600px;
					padding: 10px;
					outline: none;
					border: none;
					border-top-left-radius: 2px;
					border-bottom-left-radius: 2px;
				}
				.loginScreen__inputBtn {
					height: 60px;
					padding: 0px 20px;
					border: none;
					border-top-right-radius: 2px;
					border-bottom-right-radius: 2px;
					color: ${({ theme }) => theme.colors.white};
					background-color: ${({ theme }) => theme.colors.red};
					text-transform: uppercase;
					cursor: pointer;
				}

				@media screen and (max-width: 950px) {
					display: flex;
					flex-direction: column;
					align-items: center;
					gap: 10px;

					input {
						width: 60%;
						border-radius: 2px;
					}
					.loginScreen__inputBtn {
						height: 40px;
						border-radius: 2px;
					}
				}
			}
		}
	}
`;
