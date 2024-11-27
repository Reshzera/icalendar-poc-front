import React, { useRef } from "react";
import { Appointments } from "../..";
import { AppointmentsCard, DayColumnContainer, DayHours } from "./styles";

// import { Container } from './styles';

type DayColumnProps = {
  appointments: Appointments[];
};

const DayColumn: React.FC<DayColumnProps> = ({}) => {
  const columnRef = useRef<HTMLDivElement>(null);

  return (
    <DayColumnContainer ref={columnRef}>
      {Array.from({ length: 24 }).map((_, index) => (
        <DayHours key={index}></DayHours>
      ))}

      <AppointmentsCard>Appointments</AppointmentsCard>
    </DayColumnContainer>
  );
};

export default DayColumn;
