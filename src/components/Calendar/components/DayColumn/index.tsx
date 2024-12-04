import React, { useMemo } from "react";
import { Appointments } from "../..";
import { getFormattedHour } from "../../../../utils/convert";
import {
  AppointmentHour,
  AppointmentLabel,
  AppointmentsCard,
  DayColumnContainer,
  DayHours,
} from "./styles";

// import { Container } from './styles';

type DayColumnProps = {
  appointments: Appointments[];
  currentDate: Date;
};

type PositionProps = {
  startDate: string;
  endDate: string;
};

const DayColumn: React.FC<DayColumnProps> = ({ appointments, currentDate }) => {
  const getPosition = ({ endDate, startDate }: PositionProps) => {
    const startDay = new Date(currentDate).setHours(0, 0, 0, 0);
    const endDay = new Date(currentDate).setHours(23, 59, 59, 999);

    const startAppointment = new Date(startDate).getTime();
    const endAppointment = new Date(endDate).getTime();

    const top = ((startAppointment - startDay) / (endDay - startDay)) * 100;
    const height =
      ((endAppointment - startAppointment) / (endDay - startDay)) * 100;

    return {
      height: Math.abs(height),
      top: Math.abs(top),
    };
  };

  const dayAppointments = useMemo(() => {
    return appointments.filter(
      (appointment) =>
        new Date(appointment.start).toDateString() ===
        currentDate.toDateString()
    );
  }, [appointments, currentDate]);

  return (
    <DayColumnContainer>
      {Array.from({ length: 24 }).map((_, index) => (
        <DayHours key={index}></DayHours>
      ))}

      {dayAppointments.map((appointment) => {
        const { top, height } = getPosition({
          endDate: appointment.end,
          startDate: appointment.start,
        });
        return (
          <AppointmentsCard
            key={`${appointment.start}${top}`}
            height={height}
            top={top}
          >
            <AppointmentLabel>{appointment.label}</AppointmentLabel>

            <AppointmentHour>
              {getFormattedHour(appointment.start)} -{" "}
              {getFormattedHour(appointment.end)}
            </AppointmentHour>
          </AppointmentsCard>
        );
      })}
    </DayColumnContainer>
  );
};

export default DayColumn;
