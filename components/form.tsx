import { useEffect, useState } from "react";

interface FormProps {
  setDay: (day: number) => void;
  setMonth: (month: number) => void;
  setYear: (year: number) => void;
}
export default function Form({ setDay, setMonth, setYear }: FormProps) {
  const [day, setDayValue] = useState<number>(1);
  const [month, setMonthValue] = useState<number>(1);
  const [year, setYearValue] = useState<number>(2000);

  useEffect(() => {
    setDay(day);
  }, [day, setDay]);

  useEffect(() => {
    setMonth(month);
  }, [month, setMonth]);

  useEffect(() => {
    setYear(year);
  }, [year, setYear]);

  return (
    <>
      <div className="min-h-[20vh] min-w-[50vw] flex justify-center items-center gap-4 mb-8">
        <label>
          Day:
          <input
            type="number"
            value={day}
            min={1}
            max={31}
            onChange={(e) => setDayValue(parseInt(e.target.value))}
          />
        </label>
        <label>
          Month:
          <input
            type="number"
            value={month}
            min={1}
            max={12}
            onChange={(e) => setMonthValue(parseInt(e.target.value))}
          />
        </label>
        <label>
          Year:
          <input
            type="number"
            value={year}
            onChange={(e) => setYearValue(parseInt(e.target.value))}
          />
        </label>
      </div>
    </>
  );
}
