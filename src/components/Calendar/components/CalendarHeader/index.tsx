import React from "react";
import { CalendarHeaderContainer, CalendarHeaderDay } from "./styles";

type CalendarHeaderProps = {
  labels: string[];
  selectedType: "day" | "week" | "month";
};

const CalendarHeader: React.FC<CalendarHeaderProps> = ({
  labels,
  selectedType,
}) => {
  return (
    <CalendarHeaderContainer isMonthView={selectedType === "month"}>
      {labels.map((label, index) => (
        <CalendarHeaderDay key={index}>{label}</CalendarHeaderDay>
      ))}
    </CalendarHeaderContainer>
  );
};

export default CalendarHeader;
