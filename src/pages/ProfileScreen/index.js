import styled from "styled-components";

export const StyledProfileScreen = styled.div`
	height: 100vh;
	background-color: ${({ theme }) => theme.colors.black};
	color: ${({ theme }) => theme.colors.white};

	.profileScreen__content {
		display: flex;
		flex-direction: column;
		width: 50%;
		margin-left: auto;
		margin-right: auto;
		padding-top: 8%;
		max-width: 800px;

		h1 {
			font-size: 3.7rem;
			font-weight: 400;
			border-bottom: 1px solid #282c2d;
			margin-bottom: 20px;
			letter-spacing: 1px;
		}

		.profileScreen__info {
			display: flex;

			img {
				height: 100px;
			}

			.profileScreen__details {
				color: ${({ theme }) => theme.colors.white};
				flex: 1;
				margin-left: 25px;

				h2 {
					background-color: gray;
					padding: 15px;
					font-size: 0.9rem;
					padding-left: 20px;
					border-radius: 2px;
				}

				.profileScreen__plans {
					h3 {
						border-bottom: 1px solid #282c2d;
						padding-bottom: 10px;
						margin-top: 20px;
					}
					.profileScreen__signOut {
						width: 100%;
						margin-top: 5%;
						padding: 10px 20px;
						font-size: 1rem;
						color: ${({ theme }) => theme.colors.white};
						background-color: ${({ theme }) => theme.colors.red};
						font-weight: 500;
						border: none;
						border-radius: 2px;
						cursor: pointer;
					}
				}
			}
		}
	}
`;
