import { useDatePicker } from "../context/DatePickerContext/useDatePicker";
import DayNumbersGrid from "./DayNumbersGrid";
import { months } from "../utils/dateHelpers";
import DaysList from "./DaysList";
import NavigationButton from "./NavigationButton";
import ChevronDown from "../assets/ChevronDown";

const DaySelect = () => {
  const { displayDate, setSelectedControl } = useDatePicker();

  const handleControlChange = () => {
    setSelectedControl("month");
  };

  return (
    <div className="dayzee__day-select">
      <div className="dayzee__day-select__header-container">
        <NavigationButton direction="prev" type="month" />
        <button
          className="dayzee__day-select__header"
          onClick={handleControlChange}
        >
          {months()[displayDate.month]} {displayDate.year}
          <ChevronDown />
        </button>
        <NavigationButton direction="next" type="month" />
      </div>
      <DaysList />
      <DayNumbersGrid />
    </div>
  );
};

export default DaySelect;
