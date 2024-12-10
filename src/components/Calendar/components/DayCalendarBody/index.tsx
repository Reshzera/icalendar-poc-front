import React from "react";
import { Appointments } from "../..";
import DayColumn from "../DayColumn";
import HoursColumn from "../HoursColumn";
import { DailyCalendarBodyContainer } from "./styles";

// import { Container } from './styles';

type DailyCalendarBodyProps = {
  currentDate: Date;
  onAppointmentClick: (appointment: Appointments) => void;
  appointments: Appointments[];
};

const DailyCalendarBody: React.FC<DailyCalendarBodyProps> = ({
  currentDate,
  appointments,
  onAppointmentClick,
}) => {
  return (
    <DailyCalendarBodyContainer>
      <HoursColumn />
      <DayColumn
        onAppointmentClick={onAppointmentClick}
        key={currentDate.getTime()}
        appointments={appointments}
        currentDate={currentDate}
      />
    </DailyCalendarBodyContainer>
  );
};

export default DailyCalendarBody;
