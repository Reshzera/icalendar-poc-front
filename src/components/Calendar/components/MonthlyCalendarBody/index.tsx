import React, { useMemo } from "react";
import {
  CalendarAppointment,
  MonthlyCalendarContainer,
  MonthlyCalendarDay,
  MonthlyCalendarDayIcon,
} from "./styles";
import { getMonthDays } from "../../../../utils/convert";
import { Appointments } from "../..";

// import { Container } from './styles';

type MonthlyCalendarBodyProps = {
  currentDate: Date;
  appointments: Appointments[];
};

const MonthlyCalendarBody: React.FC<MonthlyCalendarBodyProps> = ({
  currentDate,
  appointments,
}) => {
  const daysArray = useMemo(() => {
    return getMonthDays(currentDate);
  }, [currentDate]);

  const appointmentsByDay = useMemo(() => {
    return appointments.reduce((acc, appointment) => {
      const date = new Date(appointment.start);
      const day = date.getDate();

      if (date.getMonth() !== currentDate.getMonth()) {
        return acc;
      }

      if (!acc[day]) {
        acc[day] = [];
      }

      acc[day].push(appointment);

      return acc;
    }, {} as Record<number, Appointments[]>);
  }, [appointments, currentDate]);

  return (
    <MonthlyCalendarContainer>
      {daysArray.map((item) => {
        const isToday = item.date.toDateString() === new Date().toDateString();

        return (
          <MonthlyCalendarDay>
            <MonthlyCalendarDayIcon
              isCurrentMonth={item.type === "current"}
              isToday={isToday}
            >
              {item.day}
            </MonthlyCalendarDayIcon>

            {item.type === "current" &&
              appointmentsByDay[item.day]?.map((appointment) => (
                <CalendarAppointment key={appointment.start}>
                  {appointment.label}
                </CalendarAppointment>
              ))}
          </MonthlyCalendarDay>
        );
      })}
    </MonthlyCalendarContainer>
  );
};

export default MonthlyCalendarBody;
