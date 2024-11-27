import styled from "styled-components";

export const WeeklyCalendarBodyContainer = styled.div`
  display: grid;
  grid-template-columns: 100px repeat(7, 1fr);
  grid-template-rows: 1fr;

  position: relative;
`;
