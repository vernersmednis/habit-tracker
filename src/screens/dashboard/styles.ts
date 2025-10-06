import styled from "styled-components";

export const DashboardContentContainer = styled.div`
  display: grid;
  grid-template-columns: 450px 1fr;
  height: 100vh;
`;

export const HabitListContainer = styled.div`
  display: flex;
  justify-content: center;

  & > :first-child {
    width: 450px;
    height: 100vh;
    overflow-y: auto;
  }
`;

export const HabitTrackerContainer = styled.div`
  display: flex;
  justify-content: center;

  & > :first-child {
    width: 450px;
    height: 100vh;
    overflow-y: auto;
  }
`;
