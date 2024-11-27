import React from "react";
import { Appointments } from "../..";
import DayColumn from "../DayColumn";
import HoursColumn from "../HoursColumn";
import { WeeklyCalendarBodyContainer } from "./styles";

// import { Container } from './styles';

type WeeklyCalendarBodyProps = {
  currentDate: Date;
  appointments: Appointments[];
};

const WeeklyCalendarBody: React.FC<WeeklyCalendarBodyProps> = ({
  appointments,
}) => {
  return (
    <WeeklyCalendarBodyContainer>
      <HoursColumn />
      {Array.from({ length: 7 }).map((_, index) => (
        <DayColumn key={index} appointments={appointments} />
      ))}
    </WeeklyCalendarBodyContainer>
  );
};

export default WeeklyCalendarBody;
