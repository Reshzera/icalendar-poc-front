import styled from "styled-components";

type CalendarHeaderDayProps = {
  isMonthView: boolean;
};

export const CalendarHeaderContainer = styled.header<CalendarHeaderDayProps>`
  display: flex;
  min-width: max-content;
  padding-left: ${({ isMonthView }) => (isMonthView ? "0" : "100px")};

  position: sticky;
  top: 0;
  background-color: #101010;
  z-index: 1;
`;

export const CalendarHeaderDay = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  font-size: 1rem;
  font-weight: 600;
  color: #f5f5f5;
  background-color: #333;
  border-right: 1px solid #444;
  white-space: nowrap;
  &:last-child {
    border-right: none;
  }
`;
