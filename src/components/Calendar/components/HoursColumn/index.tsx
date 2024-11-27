import React from "react";
import { WeeklyCalendarHours, WeeklyCalendarHoursColumn } from "./styles";

// import { Container } from './styles';

const HoursColumn: React.FC = () => {
  return (
    <WeeklyCalendarHoursColumn>
      {Array.from({ length: 24 }).map((_, index) => (
        <WeeklyCalendarHours key={index}>
          {String(index).padStart(2, "0")}:00
        </WeeklyCalendarHours>
      ))}
    </WeeklyCalendarHoursColumn>
  );
};

export default HoursColumn;
