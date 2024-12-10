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
  onAppointmentClick: (appointment: Appointments) => void;
};

const WeeklyCalendarBody: React.FC<WeeklyCalendarBodyProps> = ({
  week,
  appointments,
  onAppointmentClick,
}) => {
  return (
    <WeeklyCalendarBodyContainer>
      <HoursColumn />
      {week.map((date) => (
        <DayColumn
          key={date.getTime()}
          appointments={appointments}
          currentDate={date}
          onAppointmentClick={onAppointmentClick}
        />
      ))}
    </WeeklyCalendarBodyContainer>
  );
};

export default WeeklyCalendarBody;
