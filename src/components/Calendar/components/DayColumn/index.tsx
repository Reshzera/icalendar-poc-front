import React, { useRef } from "react";
import { DayHours, DayColumnContainer, AppointmentsCard } from "./styles";
import { AppointmentFromApi } from "../../../../services/types/appointment";
import { Appointments } from "../..";

// import { Container } from './styles';

type DayColumnProps = {
  appointments: Appointments[];
};

const DayColumn: React.FC<DayColumnProps> = ({ appointments }) => {
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
