import { ChangeEvent, useEffect, useState } from "react";
import { RadialSlider } from "./radialeSlider";
import { motion } from "framer-motion";

interface FormProps {
  setDay: (day: number) => void;
  setMonth: (month: number) => void;
  setYear: (year: number) => void;
}
const l = `calc(4rem + 8vw)`;
const r = `calc(-4rem - 8vw)`;

export default function Form({ setDay, setMonth, setYear }: FormProps) {
  const [day, setDayValue] = useState<number>(19);
  const [month, setMonthValue] = useState<number>(2);
  const [year, setYearValue] = useState<number>(1999);
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
    <motion.div className=" flex gap-16 justify-center items-center h-[40vh]  ">
      <motion.div
        className="flex flex-col justify-center items-center gap-4"
        initial={{ x: l }}
        animate={{ x: 0 }}
        transition={{ duration: 1.5, delay: 3 }}
      >
        <div className="relative">
          <RadialSlider
            max={31}
            min={1}
            id="day"
            value={inputValueDay}
            setValue={setInputValueDay}
          />
        </div>
        <input
          type="text"
          value={day}
          onChange={(e) => setDayValue(parseInt(e.target.value))}
          className=" border-b-2 border-secondary bg-transparent text-[#CDCDCF] text-xl font-semibold w-[5vw] tracking-wider text-center pb-2 hidden"
        />
      </motion.div>
      <motion.div className="flex flex-col justify-center items-center gap-4">
        <div className="relative">
          <RadialSlider
            max={12}
            min={1}
            id="month"
            value={inputValueMonth}
            setValue={setInputValueMonth}
          />
        </div>
        <input
          type="text"
          value={month}
          onChange={(e) => setMonthValue(parseInt(e.target.value))}
          className=" border-b-2 border-secondary bg-transparent text-[#CDCDCF] text-xl font-semibold w-[5vw] tracking-wider text-center pb-2 hidden"
        />
      </motion.div>
      <motion.div
        className="flex flex-col justify-center items-center gap-4"
        initial={{ x: r }}
        animate={{ x: 0 }}
        transition={{ duration: 1.5, delay: 3 }}
      >
        <div className="relative">
          <RadialSlider
            max={2023}
            min={1970}
            id="year"
            value={inputValueYear}
            setValue={setInputValueYear}
          />
        </div>
        <input
          type="text"
          value={year}
          onChange={(e) => setYearValue(parseInt(e.target.value))}
          className=" border-b-2 border-secondary bg-transparent text-[#CDCDCF] text-xl font-semibold w-[5vw] tracking-wider text-center pb-2 hidden"
        />
      </motion.div>
    </motion.div>
  );
}
