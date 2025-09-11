import styled from 'styled-components';


export const DashboardContentStyled = styled.div`
	display: grid;
	grid-template-columns: 450px 1fr;
	height: 100%;
`;

export const HabitListStyled = styled.div`
	display: flex;
	justify-content: center;

	& > :first-child {
		width: 450px;
		height: 100vh;
		overflow-y: auto;
	}
`;

export const HabitTrackerStyled = styled.div`
	display: flex;
	justify-content: center;

	& > :first-child {
		width: 450px;
		height: 100vh;
		overflow-y: auto;
	}
`;
