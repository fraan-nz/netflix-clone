import styled from "styled-components";

export const StyledSignUpScreen = styled.div`
	width: 100%;
	max-width: 450px;
	padding: 70px;
	position: absolute;
	top: 30%;
	left: 50%;
	transform: translateX(-50%);
	text-align: center;
	border-radius: 2px;
	background: rgba(0, 0, 0, 0.7);
	color: ${({ theme }) => theme.colors.white};

	form {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 15px;
		h1 {
			text-align: left;
			margin-bottom: 15px;
		}
		input {
			height: 40px;
			padding: 10px;
			outline: none;
			border: none;
			border-radius: 2px;
		}
		button {
			padding: 16px 20px;
			font-size: 1rem;
			border: none;
			outline: none;
			border-radius: 2px;
			color: ${({ theme }) => theme.colors.white};
			background-color: ${({ theme }) => theme.colors.red};
			margin-top: 15px;
			cursor: pointer;
		}
		h4 {
			text-align: left;

			span {
				color: gray;
			}
			.signUp__link {
				color: ${({ theme }) => theme.colors.white};

				&:hover {
					cursor: pointer;
					text-decoration: underline;
				}
			}
		}
	}
`;
