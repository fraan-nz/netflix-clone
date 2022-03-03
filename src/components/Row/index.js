import styled from "styled-components";

export const StyledRow = styled.div`
	color: ${({ theme }) => theme.colors.white};
	margin-inline: 3.5%;

	.row__container {
		display: flex;
		gap: 5px;
		overflow-y: hidden;
		overflow-x: scroll;
		padding-block: 20px;

		&::-webkit-scrollbar {
			display: none;
		}
	}
	.row__image {
		max-height: 100px;
		width: 100%;
		object-fit: contain;
		transition: transform 450ms;

		&:hover {
			transform: scale(1.08);
			opacity: 1;
			cursor: pointer;
		}
	}
	.row__imageLarge {
		max-height: 250px;

		&:hover {
			transform: scale(1.09);
			opacity: 1;
		}
	}
`;
