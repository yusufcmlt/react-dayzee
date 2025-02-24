import { daysOfWeekShort } from "../utils/dateHelpers";
import { useDatePicker } from "../context/DatePickerContext/useDatePicker";

const DaysList = () => {
  const { startDayIndex } = useDatePicker();

  return (
    <div className="dayzee__days-list">
      {[
        ...daysOfWeekShort().slice(startDayIndex),
        ...daysOfWeekShort().slice(0, startDayIndex),
      ].map((day) => (
        <div key={day} className="dayzee__days-day">
          {day}
        </div>
      ))}
    </div>
  );
};

export default DaysList;
