import { createContext } from "react";
import { Dayjs } from "dayjs";
import {
  DatePickerMode,
  DisplayedDate,
  SelectedRange,
} from "../../types/datePickerTypes";

export interface DatePickerContextType {
  mode: DatePickerMode;
  displayDate: DisplayedDate;
  startDayIndex: number;
  selectedDate: SelectedRange;
  selectDate: (date: Dayjs) => void;
  updateRange: (range: SelectedRange) => void;
  hoverDate: Dayjs | null;
  setHoverDate: (date: Dayjs | null) => void;
  selectMonth: (month: number) => void;
  selectYear: (year: number) => void;
  selectedControl: "year" | "month" | "day";
  setSelectedControl: (control: "year" | "month" | "day") => void;
  yearGroup: { min: number; max: number };
  setYearGroup: (yearGroup: { min: number; max: number }) => void;
}

export const DatePickerContext = createContext<
  DatePickerContextType | undefined
>(undefined);
