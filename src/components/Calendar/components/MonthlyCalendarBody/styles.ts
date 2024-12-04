import styled, { css } from "styled-components";

export const MonthlyCalendarContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-auto-rows: 1fr;
`;

export const MonthlyCalendarDay = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: flex-end;

  padding: 8px;
  border: 1px solid #555;

  min-height: 100px;
  max-height: 120px;

  overflow-y: auto;
`;

type MonthlyCalendarDayIcon = {
  isToday: boolean;
  isCurrentMonth: boolean;
};

export const MonthlyCalendarDayIcon = styled.div<MonthlyCalendarDayIcon>`
  position: sticky;
  top: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  max-width: max-content;
  margin-bottom: auto;

  opacity: ${({ isCurrentMonth }) => (isCurrentMonth ? 1 : 0.3)};
  background-color: #101010;

  aspect-ratio: 1/1;

  border-radius: 50%;
  padding: 0.25rem;

  ${({ isToday }) =>
    isToday &&
    css`
      background-color: #f44336;
      color: #fff;
    `};
`;

export const CalendarAppointment = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 0.75rem;

  padding: 0.3rem;
  border-radius: 1rem;
  background-color: #4287f5;
  width: 100%;

  text-align: center;

  margin-top: 0.5rem;

  transition: all ease-in-out 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;
