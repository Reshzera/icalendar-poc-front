import React from "react";
import DayColumn from "../DayColumn";
import HoursColumn from "../HoursColumn";
import { WeeklyCalendarBodyContainer } from "./styles";
import { AppointmentFromApi } from "../../../../services/types/appointment";
import { Appointments } from "../..";

// import { Container } from './styles';

type WeeklyCalendarBodyProps = {
  currentDate: Date;
  appointments: Appointments[];
};

const WeeklyCalendarBody: React.FC<WeeklyCalendarBodyProps> = ({
  currentDate,
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
