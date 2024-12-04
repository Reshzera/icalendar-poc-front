import React from "react";
import { Appointments } from "../..";
import DayColumn from "../DayColumn";
import HoursColumn from "../HoursColumn";
import { DailyCalendarBodyContainer } from "./styles";

// import { Container } from './styles';

type DailyCalendarBodyProps = {
  currentDate: Date;

  appointments: Appointments[];
};

const DailyCalendarBody: React.FC<DailyCalendarBodyProps> = ({
  currentDate,
  appointments,
}) => {
  return (
    <DailyCalendarBodyContainer>
      <HoursColumn />
      <DayColumn
        key={currentDate.getTime()}
        appointments={appointments}
        currentDate={currentDate}
      />
    </DailyCalendarBodyContainer>
  );
};

export default DailyCalendarBody;
