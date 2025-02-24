import ChevronLeft from "../assets/ChevronLeft";
import ChevronRight from "../assets/ChevronRight";
import { useDatePicker } from "../context/DatePickerContext/useDatePicker";
import dayjs from "../utils/dayjs";

interface NavigationButtonProps {
  direction: "prev" | "next";
  type?: "month" | "year" | "yearGroup";
}

const NavigationButton = ({
  direction,
  type = "month",
}: NavigationButtonProps) => {
  const { displayDate, selectMonth, selectYear, setYearGroup, yearGroup } =
    useDatePicker();

  const handleClick = () => {
    if (type === "yearGroup") {
      const yearDiff = direction === "prev" ? -10 : 10;
      const newYear = yearGroup.min + yearDiff;
      setYearGroup({
        min: Math.floor(newYear / 10) * 10,
        max: Math.floor(newYear / 10) * 10 + 9,
      });
      return;
    }

    const currentDate = dayjs().year(displayDate.year).month(displayDate.month);
    const newDate =
      direction === "prev"
        ? currentDate.subtract(1, type === "month" ? "month" : "year")
        : currentDate.add(1, type === "month" ? "month" : "year");

    if (type === "month") {
      selectMonth(newDate.month());
      if (newDate.year() !== displayDate.year) {
        selectYear(newDate.year());
      }
    } else {
      selectYear(newDate.year());
    }
  };

  return (
    <button
      onClick={handleClick}
      className="dayzee__navigation-button"
      aria-label={`${direction === "prev" ? "Previous" : "Next"} month`}
    >
      {direction === "prev" ? <ChevronLeft /> : <ChevronRight />}
    </button>
  );
};

export default NavigationButton;
