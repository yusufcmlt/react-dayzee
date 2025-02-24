import { Dayjs } from "dayjs";

export type DatePickerMode = "single" | "range";

export type DisplayedDate = {
  month: number;
  year: number;
};

export type SelectedDate = Dayjs | null;
export type OutsideDate = Date | null;

export type SelectedRange = {
  start: SelectedDate;
  end: SelectedDate;
};

export type SelectedOutsideRange = {
  start: OutsideDate;
  end: OutsideDate;
};

export type OnChange = (date: SelectedOutsideRange) => void;

export type DatePickerConfig = {
  mode?: DatePickerMode;
  dayStartIndex?: number;
  selectedDate?: SelectedOutsideRange;
  onChange?: OnChange;
  displayDate?: DisplayedDate;
};
