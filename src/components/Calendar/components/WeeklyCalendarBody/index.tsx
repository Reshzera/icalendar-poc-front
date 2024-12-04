import React from "react";
import { Appointments } from "../..";
import DayColumn from "../DayColumn";
import HoursColumn from "../HoursColumn";
import { WeeklyCalendarBodyContainer } from "./styles";

// import { Container } from './styles';

type WeeklyCalendarBodyProps = {
  currentDate: Date;
  week: Date[];
  appointments: Appointments[];
};

const WeeklyCalendarBody: React.FC<WeeklyCalendarBodyProps> = ({
  week,
  appointments,
}) => {
  return (
    <WeeklyCalendarBodyContainer>
      <HoursColumn />
      {week.map((date) => (
        <DayColumn
          key={date.getTime()}
          appointments={appointments}
          currentDate={date}
        />
      ))}
    </WeeklyCalendarBodyContainer>
  );
};

export default WeeklyCalendarBody;
