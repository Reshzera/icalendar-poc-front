import styled from "styled-components";

export const WeeklyCalendarHoursColumn = styled.div`
  grid-column: 1;
  display: flex;
  flex-direction: column;
`;

export const WeeklyCalendarHours = styled.div`
  padding: 24px 8px;

  min-height: 120px;
  max-height: 120px;

  border-bottom: 1px dashed #555;

  &:last-child {
    border-bottom: none;
  }
`;
