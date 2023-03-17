import { ChangeEvent, useEffect, useState } from "react";
import { RadialeSlider } from "./radialeSlider";

interface FormProps {
  setDay: (day: number) => void;
  setMonth: (month: number) => void;
  setYear: (year: number) => void;
}
export default function Form({ setDay, setMonth, setYear }: FormProps) {
  const [day, setDayValue] = useState<number>(1);
  const [month, setMonthValue] = useState<number>(1);
  const [year, setYearValue] = useState<number>(2000);
  const [inputValueDay, setInputValueDay] = useState("19");
  const [inputValueMonth, setInputValueMonth] = useState("2");
  const [inputValueYear, setInputValueYear] = useState("1999");

 
  useEffect(() => {
    setDay(day);
    const parsedDay = parseInt(inputValueDay);
    setDayValue(parsedDay);
  }, [day, setDay, inputValueDay, setDayValue]);
  
  useEffect(() => {
    setMonth(month);
    const parsedMonth = parseInt(inputValueMonth);
    setMonthValue(parsedMonth);
  }, [month, inputValueMonth, setMonth, setMonthValue]);
  
  useEffect(() => {
    setYear(year);
    const yearValue = parseInt(inputValueYear);
    setYearValue(yearValue);
  }, [year, setYear, inputValueYear, setYearValue]);


  return (
    <div className=" flex gap-8 justify-center items-center min-h-[20vh] ">

      <div className="flex flex-col justify-center items-center gap-4">
        <div className="relative">
          <RadialeSlider
          max="31"
          min="1"
          id="day"
          inputValue={inputValueDay}
          setInputValue={setInputValueDay}
          />
          </div>
          <input type="text" value={day} onChange={(e) => setDayValue(parseInt(e.target.value))}/>
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="relative">
          <RadialeSlider
          max="12"
          min="1"
          id="month"
          inputValue={inputValueMonth}
          setInputValue={setInputValueMonth}
          />
        </div>
        <input type="text" value={month} onChange={(e) => setMonthValue(parseInt(e.target.value))}/>
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="relative">
          <RadialeSlider
            max="2023"
            min="1970"
            id="year"
            inputValue={inputValueYear}
            setInputValue={setInputValueYear}
          />
        </div>
        <input type="text" value={year}  onChange={(e) => setYearValue(parseInt(e.target.value))}/>
      </div>
    </div>
  );
}

