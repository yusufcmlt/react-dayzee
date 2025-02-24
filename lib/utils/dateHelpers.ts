import { SelectedOutsideRange, SelectedRange } from "../types/datePickerTypes";
import dayjs from "./dayjs";

const getDateWithYearMonth = (year: number, month: number) => {
  return dayjs(`${year}-${month + 1}`);
};

export const daysOfWeek = () => {
  const days = Array.from({ length: 7 }, (_, i) =>
    dayjs().day(i).format("dddd")
  );
  return days;
};

export const daysOfWeekShort = () => {
  const days = Array.from({ length: 7 }, (_, i) =>
    dayjs().day(i).format("ddd")
  );
  return days;
};

export const months = () => {
  const months = Array.from({ length: 12 }, (_, i) =>
    dayjs().month(i).format("MMMM")
  );
  return months;
};

export const monthsShort = () => {
  Array.from({ length: 12 }, (_, i) => dayjs().month(i).format("MMM"));
  return months;
};
export const getDaysInMonth = (year: number, month: number): number => {
  return getDateWithYearMonth(year, month).daysInMonth();
};

export const getFirstDayOfMonth = (year: number, month: number): number => {
  return dayjs(`${year}-${month + 1}`)
    .startOf("month")
    .day();
};

export const getCalendarGrid = (
  year: number,
  month: number,
  startDayIndex: number
): (dayjs.Dayjs | undefined)[] => {
  const firstDay = dayjs(`${year}-${month + 1}`).startOf("month");
  const daysInMonth = firstDay.daysInMonth();
  const offset = (firstDay.day() - startDayIndex + 7) % 7;

  return [
    ...Array(offset).fill(undefined), // Empty slots for previous days
    ...Array.from({ length: daysInMonth }, (_, i) => firstDay.add(i, "day")), // Actual days
    ...Array(42 - daysInMonth - offset).fill(undefined), // Empty slots for next days
  ];
};

export const getSelectedRange = (start: dayjs.Dayjs, end: dayjs.Dayjs) => {
  if (start.isAfter(end)) {
    return { start: end, end: start };
  }
  return { start, end };
};

export const isInRange = (date: dayjs.Dayjs, range: SelectedRange) => {
  return date.isAfter(range.start) && date.isBefore(range.end);
};

export const isToday = (date: dayjs.Dayjs) => {
  return date.isSame(dayjs(), "day");
};

export const outsideRangeToSelectedRange = (
  range: SelectedOutsideRange
): SelectedRange => {
  return {
    start: range.start ? dayjs(range.start) : null,
    end: range.end ? dayjs(range.end) : null,
  };
};

export const selectedRangeToOutsideRange = (
  range: SelectedRange
): SelectedOutsideRange => {
  return {
    start: range.start ? range.start.toDate() : null,
    end: range.end ? range.end.toDate() : null,
  };
};
