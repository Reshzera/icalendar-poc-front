import React, { useCallback, useMemo, useState } from "react";
import { getWeekDates } from "../../utils/convert";
import CalendarHeader from "./components/CalendarHeader";
import MonthlyCalendar from "./components/MonthlyCalendarBody";
import Navigation from "./components/Navigation";
import WeeklyCalendarBody from "./components/WeeklyCalendarBody";
import { CalendarContainer } from "./styles";
import { set } from "zod";

// import { Container } from './styles';

export type CalendarType = "day" | "week" | "month";

export type Appointments = {
  label: string;
  start: string;
  end: string;
};

const defaultDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

type CalendarProps = {
  appointments: Appointments[];
  type: CalendarType;
};

const Calendar: React.FC<CalendarProps> = ({ appointments, type }) => {
  const [selectedType, setSelectedType] = useState<CalendarType>(type);
  const [currentDate, setCurrentDate] = useState(new Date());

  const navigate = useCallback(
    (direction: "next" | "prev") => {
      const newDate = new Date(currentDate);
      const directionValue = direction === "next" ? 1 : -1;

      if (selectedType === "day") {
        newDate.setDate(newDate.getDate() + directionValue);
      }

      if (selectedType === "week") {
        newDate.setDate(newDate.getDate() + 7 * directionValue);
      }

      if (selectedType === "month") {
        newDate.setMonth(newDate.getMonth() + directionValue);
      }

      setCurrentDate(newDate);
    },
    [currentDate, selectedType, setCurrentDate]
  );

  const headerLabels = useMemo(() => {
    if (selectedType === "day") {
      return [
        currentDate.toLocaleDateString("default", {
          weekday: "short",
          day: "numeric",
        }),
      ];
    }

    if (selectedType === "week") {
      const week = getWeekDates(currentDate);

      return week.map((date) =>
        date.toLocaleDateString("default", {
          weekday: "short",
          day: "numeric",
        })
      );
    }

    return defaultDays;
  }, [selectedType, currentDate]);

  const controlHeader = useMemo(() => {
    if (selectedType === "day") {
      return currentDate.toLocaleDateString("default", {
        weekday: "long",
        day: "numeric",
        month: "long",
      });
    }

    if (selectedType === "week") {
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
  }, [currentDate, selectedType]);

  return (
    <>
      <button
        onClick={() => {
          setSelectedType("month");
        }}
      >
        Month
      </button>
      <button
        onClick={() => {
          setSelectedType("week");
        }}
      >
        Week
      </button>
      <CalendarContainer>
        <CalendarHeader labels={headerLabels} selectedType={selectedType} />
        <Navigation label={controlHeader} navigate={navigate} />

        {selectedType === "month" && (
          <MonthlyCalendar
            currentDate={currentDate}
            appointments={appointments}
          />
        )}
        {selectedType === "week" && (
          <WeeklyCalendarBody
            currentDate={currentDate}
            appointments={appointments}
          />
        )}
      </CalendarContainer>
    </>
  );
};

export default Calendar;
