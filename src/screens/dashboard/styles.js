import styled from 'styled-components';

export const DashboardWrapper = styled.div`
	display: grid;
	grid-template-rows: auto 1fr;
	height: 100vh;
	width: 100vw;
`;

export const DashboardContent = styled.div`
	display: grid;
	grid-template-columns: 450px 1fr;
	height: 100%;
`;

export const HabitList = styled.div`
	max-width: 450px;
	width: 100%;
	height: 100vh;
	overflow-y: auto;
`;

export const HabitTracker = styled.div`
	width: 100%;
	height: 100vh;
	overflow-y: auto;
`;
