import MonthSelect from "./MonthSelect";
import YearSelect from "./YearSelect";
import DaySelect from "./DaySelect";
import { useDatePicker } from "../context/DatePickerContext/useDatePicker";

const DatePickerView = () => {
  const { selectedControl } = useDatePicker();

  const renderControl = {
    year: <YearSelect />,
    month: <MonthSelect />,
    day: <DaySelect />,
  };

  return (
    <div className="dayzee__date-picker">{renderControl[selectedControl]}</div>
  );
};

export default DatePickerView;
