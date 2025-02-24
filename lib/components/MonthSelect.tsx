import { useDatePicker } from "../context/DatePickerContext/useDatePicker";
import { months } from "../utils/dateHelpers";
import dayjs from "../utils/dayjs";
import classNames from "classnames";
import NavigationButton from "./NavigationButton";
import ChevronDown from "../assets/ChevronDown";
const MonthSelect = () => {
  const { displayDate, selectMonth, setSelectedControl } = useDatePicker();

  const handleMonthChange = (month: number) => {
    selectMonth(month);
    setSelectedControl("day");
  };

  const handleControlChange = () => {
    setSelectedControl("year");
  };

  const isCurrentMonth = (index: number) =>
    index === dayjs().month() && displayDate.year === dayjs().year();
  const isSelectedMonth = (index: number) => index === displayDate.month;

  return (
    <div className="dayzee__month-select">
      <div className="dayzee__month-select__header-container">
        <NavigationButton direction="prev" type="year" />
        <button
          className="dayzee__month-select__header"
          onClick={handleControlChange}
        >
          {displayDate.year}
          <ChevronDown />
        </button>
        <NavigationButton direction="next" type="year" />
      </div>
      <div className="dayzee__month-select__months">
        {months().map((month, index) => (
          <button
            className={classNames("dayzee__month-select__month", {
              "dayzee__month-select__month--current": isCurrentMonth(index),
              "dayzee__month-select__month--selected": isSelectedMonth(index),
            })}
            key={month}
            onClick={() => handleMonthChange(index)}
          >
            {month}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MonthSelect;
