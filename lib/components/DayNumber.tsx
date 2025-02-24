import { Dayjs } from "dayjs";
import { useDatePicker } from "../context/DatePickerContext/useDatePicker";
import { getSelectedRange, isInRange, isToday } from "../utils/dateHelpers";
import classNames from "classnames";

interface DayNumberProps {
  day: Dayjs | undefined;
  index: number;
  onClick?: (day: Dayjs) => void;
}

const DayNumber = ({ day, index }: DayNumberProps) => {
  const {
    updateRange,
    selectedDate,
    mode,
    selectDate,
    hoverDate,
    setHoverDate,
  } = useDatePicker();

  if (!day) {
    return (
      <div className="dayzee__day-empty" key={`empty-${index}`}>
        <>&nbsp;</>
      </div>
    );
  }

  const handleClick = () => {
    if (mode === "single") {
      selectDate(day);
    } else if (mode === "range") {
      if (selectedDate.end || !selectedDate.start) {
        updateRange({ start: day, end: null });
      } else {
        updateRange(getSelectedRange(selectedDate.start, day));
      }
    }
  };

  const handleHover = () => {
    setHoverDate(day);
  };

  const handleHoverLeave = () => {
    setHoverDate(null);
  };

  const isSelected =
    day?.isSame(selectedDate.start, "day") ||
    day?.isSame(selectedDate.end, "day");

  const isStartOfRange =
    mode === "range" &&
    selectedDate.start &&
    day?.isSame(selectedDate.start, "day");

  const isEndOfRange =
    mode === "range" &&
    selectedDate.end &&
    day?.isSame(selectedDate.end, "day");

  const isInHoverRange =
    mode === "range" &&
    hoverDate &&
    selectedDate.start &&
    !selectedDate.end &&
    isInRange(day, getSelectedRange(selectedDate.start, hoverDate));

  const isInSelectedRange =
    selectedDate.start &&
    selectedDate.end &&
    isInRange(day, { start: selectedDate.start, end: selectedDate.end });

  const today = isToday(day);

  return (
    <div
      key={day ? day.format("YYYY-MM-DD") : `empty-${index}`}
      className={classNames("dayzee__day-number", {
        "dayzee__day-number--today": today,
        "dayzee__day-number--selected": isSelected,
        "dayzee__day-number--in-hover-range": isInHoverRange,
        "dayzee__day-number--in-selected-range": isInSelectedRange,
        "dayzee__day-number--start-of-range": isStartOfRange,
        "dayzee__day-number--end-of-range": isEndOfRange,
      })}
      onClick={handleClick}
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverLeave}
    >
      {day.format("D")}
    </div>
  );
};

export default DayNumber;
