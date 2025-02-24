import { useState } from "react";

import DatePicker from "../lib/components/DatePicker";
import {
  DatePickerMode,
  DisplayedDate,
  SelectedOutsideRange,
} from "../lib/types/datePickerTypes";

import "./styles/font.css";
import "./styles/tailwind.css";

function App() {
  const [mode, setMode] = useState<DatePickerMode>("single");

  const [selectedDate, setSelectedDate] = useState<SelectedOutsideRange>({
    start: null,
    end: null,
  });
  const [displayDate, setDisplayDate] = useState<DisplayedDate>();
  const [dayStartIndex, setDayStartIndex] = useState<number>(0);
  const handleChange = (date: SelectedOutsideRange) => {
    setSelectedDate(date);
  };

  return (
    <div className="h-screen w-screen flex flex-col gap-1 justify-center items-center">
      <div>
        <div className="w-[400px]">
          <div className="flex gap-1 flex-col">
            <div>
              Start: <b>{selectedDate.start?.toDateString() || "none"}</b>
            </div>
            <div>
              End: <b>{selectedDate.end?.toDateString() || "none"}</b>
            </div>
          </div>
          <div>
            Mode: <b>{mode}</b>
          </div>
          <div className="flex flex-col gap-1">
            <button
              className="bg-blue-500 text-white p-2 rounded-md cursor-pointer"
              onClick={() => setMode("single")}
            >
              Single Mode
            </button>
            <button
              className="bg-blue-500 text-white p-2 rounded-md cursor-pointer"
              onClick={() => setMode("range")}
            >
              Range Mode
            </button>
            <button
              className="bg-blue-500 text-white p-2 rounded-md cursor-pointer"
              onClick={() =>
                setDisplayDate({
                  month: 1,
                  year: 2024,
                })
              }
            >
              Change Display Date to 2024
            </button>
            <button
              className="bg-blue-500 text-white p-2 rounded-md cursor-pointer"
              onClick={() => setDisplayDate(undefined)}
            >
              Go to Today
            </button>
            <button
              className="bg-blue-500 text-white p-2 rounded-md cursor-pointer"
              onClick={() => setDayStartIndex(2)}
            >
              Change Day Start Index to 2 (Tuesday) - (Sunday is 0)
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <DatePicker
          mode={mode}
          onChange={handleChange}
          selectedDate={selectedDate}
          displayDate={displayDate}
          dayStartIndex={dayStartIndex}
        />
      </div>
    </div>
  );
}

export default App;
