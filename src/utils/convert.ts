export function getWeekDates(date: Date): Date[] {
  const weekDates: Date[] = [];
  const dayOfWeek = date.getDay();

  const startOfWeek = new Date(date);
  startOfWeek.setDate(date.getDate() - dayOfWeek);

  Array.from({ length: 7 }).forEach((_, index) => {
    const newDate = new Date(startOfWeek);
    newDate.setDate(startOfWeek.getDate() + index);
    weekDates.push(newDate);
  });

  return weekDates;
}

interface Day {
  type: "previous" | "current" | "next";
  day: number;
  date: Date;
}

export function getMonthDays(currentDate: Date): Day[] {
  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();

  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay();

  const lastDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    daysInMonth
  ).getDay();

  const daysInPrevMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    0
  ).getDate();
  const daysOfThePastMonth: Day[] = Array.from(
    { length: firstDayOfMonth },
    (_, index) => {
      const day = daysInPrevMonth - firstDayOfMonth + index + 1;
      return {
        type: "previous",
        day,
        date: new Date(
          currentDate.getFullYear(),
          currentDate.getMonth() - 1,
          day
        ),
      };
    }
  );

  const daysOfTheCurrentMonth: Day[] = Array.from(
    { length: daysInMonth },
    (_, index) => {
      return {
        type: "current",
        day: index + 1,
        date: new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          index + 1
        ),
      };
    }
  );

  const daysOfTheNextMonth: Day[] = Array.from(
    { length: 6 - lastDayOfMonth },
    (_, index) => {
      const day = index + 1;
      return {
        type: "next",
        day,
        date: new Date(
          currentDate.getFullYear(),
          currentDate.getMonth() + 1,
          day
        ),
      };
    }
  );

  return daysOfThePastMonth.concat(daysOfTheCurrentMonth, daysOfTheNextMonth);
}

export function getFormattedHour(date: Date | string): string {
  const hour = typeof date === "string" ? new Date(date) : date;

  return hour.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
  });
}
