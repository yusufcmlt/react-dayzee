import { useDatePicker } from "../context/DatePickerContext/useDatePicker";
import { getCalendarGrid } from "../utils/dateHelpers";
import DayNumber from "./DayNumber";

const DayNumbersGrid = () => {
  const { displayDate, startDayIndex } = useDatePicker();

  return (
    <div className="dayzee__day-numbers-grid">
      {getCalendarGrid(displayDate.year, displayDate.month, startDayIndex).map(
        (day, index) => (
          <DayNumber
            key={day ? day.format("YYYY-MM-DD") : `empty-${index}`}
            day={day}
            index={index}
          />
        )
      )}
    </div>
  );
};

export default DayNumbersGrid;
