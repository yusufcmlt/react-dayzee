import { useDatePicker } from "../context/DatePickerContext/useDatePicker";
import dayjs from "../utils/dayjs";
import classNames from "classnames";
import NavigationButton from "./NavigationButton";
const YearSelect = () => {
  const { displayDate, selectYear, setSelectedControl, yearGroup } =
    useDatePicker();

  const handleYearChange = (year: number) => {
    selectYear(year);
    setSelectedControl("month");
  };

  const years = Array.from(
    { length: yearGroup.max - yearGroup.min + 1 },
    (_, i) => yearGroup.min + i
  );

  const isCurrentYear = (year: number) => year === dayjs().year();
  const isSelectedYear = (year: number) => year === displayDate.year;

  return (
    <div className="dayzee__year-select">
      <div className="dayzee__year-select__header-container">
        <NavigationButton direction="prev" type="yearGroup" />
        <button className="dayzee__year-select__header">
          {yearGroup.min} - {yearGroup.max}
        </button>
        <NavigationButton direction="next" type="yearGroup" />
      </div>
      <div className="dayzee__year-select__years">
        {years.map((year) => (
          <button
            className={classNames("dayzee__year-select__year", {
              "dayzee__year-select__year--current": isCurrentYear(year),
              "dayzee__year-select__year--selected": isSelectedYear(year),
            })}
            key={year}
            onClick={() => handleYearChange(year)}
          >
            {year}
          </button>
        ))}
      </div>
    </div>
  );
};

export default YearSelect;
