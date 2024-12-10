import React, { useCallback, useMemo, useState } from "react";
import { getWeekDates } from "../../utils/convert";
import CalendarHeader from "./components/CalendarHeader";
import MonthlyCalendar from "./components/MonthlyCalendarBody";
import Navigation from "./components/Navigation";
import WeeklyCalendarBody from "./components/WeeklyCalendarBody";
import { CalendarContainer } from "./styles";
import DailyCalendarBody from "./components/DayCalendarBody";

// import { Container } from './styles';

export type CalendarType = "day" | "week" | "month";

export type Appointments = {
  id: string;
  label: string;
  start: string;
  end: string;
};

const defaultDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

type CalendarProps = {
  appointments: Appointments[];
  type: CalendarType;
  onAppointmentClick?: (appointment: Appointments) => void;
};

const Calendar: React.FC<CalendarProps> = ({
  appointments,
  type,
  onAppointmentClick = () => {},
}) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const navigate = useCallback(
    (direction: "next" | "prev") => {
      const newDate = new Date(currentDate);
      const directionValue = direction === "next" ? 1 : -1;

      if (type === "day") {
        newDate.setDate(newDate.getDate() + directionValue);
      }

      if (type === "week") {
        newDate.setDate(newDate.getDate() + 7 * directionValue);
      }

      if (type === "month") {
        newDate.setMonth(newDate.getMonth() + directionValue);
      }

      setCurrentDate(newDate);
    },
    [currentDate, type, setCurrentDate]
  );
  const week = getWeekDates(currentDate);

  const headerLabels = useMemo(() => {
    if (type === "day") {
      return [
        currentDate.toLocaleDateString("default", {
          weekday: "short",
          day: "numeric",
        }),
      ];
    }

    if (type === "week") {
      return week.map((date) =>
        date.toLocaleDateString("default", {
          weekday: "short",
          day: "numeric",
        })
      );
    }

    return defaultDays;
  }, [type, currentDate]);

  const controlHeader = useMemo(() => {
    if (type === "day") {
      return currentDate.toLocaleDateString("default", {
        weekday: "long",
        day: "numeric",
        month: "long",
      });
    }

    if (type === "week") {
      const week = getWeekDates(currentDate);

      const firstWeekDay = week[0].toLocaleDateString("default", {
        month: "long",
        day: "numeric",
      });
      const lastWeekDay = week[6].toLocaleDateString("default", {
        month: "long",
        day: "numeric",
      });

      return `${firstWeekDay} - ${lastWeekDay}`;
    }

    return currentDate.toLocaleDateString("default", {
      month: "long",
      year: "numeric",
    });
  }, [currentDate, type]);

  return (
    <CalendarContainer>
      <CalendarHeader labels={headerLabels} selectedType={type} />
      <Navigation label={controlHeader} navigate={navigate} />

      {type === "month" && (
        <MonthlyCalendar
          currentDate={currentDate}
          appointments={appointments}
          onAppointmentClick={onAppointmentClick}
        />
      )}
      {type === "week" && (
        <WeeklyCalendarBody
          week={week}
          currentDate={currentDate}
          appointments={appointments}
          onAppointmentClick={onAppointmentClick}
        />
      )}
      {type === "day" && (
        <DailyCalendarBody
          currentDate={currentDate}
          appointments={appointments}
          onAppointmentClick={onAppointmentClick}
        />
      )}
    </CalendarContainer>
  );
};

export default Calendar;
