import { useState, ReactNode, useEffect } from "react";
import dayjs from "../../utils/dayjs";
import {
  DatePickerMode,
  DisplayedDate,
  SelectedOutsideRange,
  SelectedRange,
} from "../../types/datePickerTypes";
import { DatePickerContext } from "./DatePickerContext";
import { Dayjs } from "dayjs";

import "../../styles/variables.css";
import "../../styles/styles.css";
import {
  outsideRangeToSelectedRange,
  selectedRangeToOutsideRange,
} from "../../utils/dateHelpers";

interface DatePickerProviderProps {
  children: ReactNode;
  mode?: DatePickerMode;
  initialStartDayIndex?: number;
  selectedDate?: SelectedOutsideRange;
  onChange?: (date: SelectedOutsideRange) => void;
  displayDate?: DisplayedDate;
}

export const DatePickerProvider = ({
  children,
  mode = "single",
  initialStartDayIndex = 0,
  displayDate,
  selectedDate,
  onChange,
}: DatePickerProviderProps) => {
  const [localMode, setLocalMode] = useState<DatePickerMode>(mode);
  const [startDayIndex, setDayStartIndex] = useState(initialStartDayIndex);
  const [localDisplayDate, setLocalDisplayDate] = useState<DisplayedDate>(
    displayDate ?? {
      month: dayjs().month(),
      year: dayjs().year(),
    }
  );
  const [localSelectedDate, setLocalSelectedDate] = useState<SelectedRange>(
    selectedDate
      ? outsideRangeToSelectedRange(selectedDate)
      : { start: null, end: null }
  );
  const [hoverDate, setHoverDate] = useState<Dayjs | null>(null);
  const [selectedControl, setSelectedControl] = useState<
    "year" | "month" | "day"
  >("day");
  const [yearGroup, setYearGroup] = useState<{ min: number; max: number }>({
    min: Math.floor(localDisplayDate.year / 10) * 10,
    max: Math.floor(localDisplayDate.year / 10) * 10 + 9,
  });

  useEffect(() => {
    setLocalMode(mode);
    setLocalSelectedDate({ start: null, end: null });
  }, [mode]);

  useEffect(() => {
    setLocalSelectedDate(
      selectedDate
        ? outsideRangeToSelectedRange(selectedDate)
        : { start: null, end: null }
    );
  }, [selectedDate]);

  useEffect(() => {
    setDayStartIndex(initialStartDayIndex);
  }, [initialStartDayIndex]);

  useEffect(() => {
    setLocalDisplayDate(
      displayDate ?? {
        month: dayjs().month(),
        year: dayjs().year(),
      }
    );
  }, [displayDate]);

  const selectDate = (date: Dayjs) => {
    setLocalSelectedDate({ start: date, end: date });
    if (onChange) {
      onChange(selectedRangeToOutsideRange({ start: date, end: date }));
    }
  };

  const updateRange = (range: SelectedRange) => {
    setLocalSelectedDate(range);
    if (onChange) {
      onChange(selectedRangeToOutsideRange(range));
    }
  };

  const selectMonth = (month: number) => {
    setLocalDisplayDate((prev) => ({
      ...prev,
      month,
    }));
  };

  const selectYear = (year: number) => {
    setLocalDisplayDate((prev) => ({
      ...prev,
      year,
    }));
  };

  return (
    <DatePickerContext.Provider
      value={{
        mode: localMode,
        displayDate: localDisplayDate,
        startDayIndex,
        selectedDate: localSelectedDate,
        selectDate,
        updateRange,
        hoverDate,
        setHoverDate,
        selectMonth,
        selectYear,
        selectedControl,
        setSelectedControl,
        yearGroup,
        setYearGroup,
      }}
    >
      {children}
    </DatePickerContext.Provider>
  );
};
