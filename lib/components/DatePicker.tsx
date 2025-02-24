import { DatePickerProvider } from "../main";
import { DatePickerConfig } from "../types/datePickerTypes";
import DatePickerView from "./DatePickerView";

type DatePickerProps = DatePickerConfig;

const DatePicker = ({
  onChange,
  mode,
  dayStartIndex,
  selectedDate,
  displayDate,
}: DatePickerProps) => {
  return (
    <DatePickerProvider
      initialStartDayIndex={dayStartIndex}
      onChange={onChange}
      mode={mode}
      selectedDate={selectedDate}
      displayDate={displayDate}
    >
      <DatePickerView />
    </DatePickerProvider>
  );
};

export default DatePicker;
