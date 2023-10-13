import { AnimatePresence, animate, motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Age {
  years: number;
  days: number;
}

interface CalculProps {
  planetSecInDays: number;
  PlanetYearInMilliseconds: number;
  planetName: string;
  planetColor: any;
  text: string;
  day: number;
  month: number;
  year: number;
}

export default function Calcul({
  planetSecInDays,
  PlanetYearInMilliseconds,
  planetName,
  planetColor,
  text,
  day,
  month,
  year,
}: CalculProps) {
  const container = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.4,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 1,
      },
    },
  };
  const title = {
    initial: {
      color: `${planetColor}`,
    },
  };
  const number = {
    initial: {
      color: `${planetColor}`,
      opacity: 0,
      transition: {
        duration: 0.4,
      },
    },
    animate: {
      opacity: 1,
      transition: {
        delay: 0.4,
        duration: 0.4,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        delay: 0.4,
        duration: 0.4,
      },
    },
  };

  const [age, setAge] = useState<Age>({ years: 0, days: 0 });
  const [nextBirthday, setNextBirthday] = useState<Date | null>(null);

  const calculateAge = (): void => {
    const today = new Date();

    const birthDate = new Date(year, month - 1, day);

    let ageInYears =
      (today.getTime() - birthDate.getTime()) / PlanetYearInMilliseconds;

    let ageInDays =
      (today.getTime() - birthDate.getTime()) / (planetSecInDays * 1000);
    const ageInYearsRounded = parseFloat(ageInYears.toFixed(2));
    const ageInDaysRounded = Math.floor(ageInDays);

    setAge({ years: ageInYearsRounded, days: ageInDaysRounded });

    // Calculate the next planets birthday date
    // const nextBirthdayYear =
    //   (Math.floor(ageInYears) + 1 - ageInYears) * PlanetYearInMilliseconds;
    //  const nextBirthdayPlanetTime = new Date(today.getTime() + nextBirthdayYear);
    const nextBirthdayYear =
      (Math.floor(ageInYears) + 1) * PlanetYearInMilliseconds;
    console.log(nextBirthdayYear);

    const nextBirthdayPlanetTime = new Date(
      birthDate.getTime() + nextBirthdayYear
    );

    setNextBirthday(nextBirthdayPlanetTime);
  };
  useEffect(() => {
    calculateAge();
    const interval = setInterval(() => {
      calculateAge();
    }, planetSecInDays * 1000);
    return () => clearInterval(interval);
  }, [planetSecInDays]);

  return (
    <AnimatePresence>
      <motion.div
        className="flex justify-around items-center gap-5 w-full"
        variants={container}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <motion.div className="flex flex-col gap-2 justify-center items-center font-DisketBold text-white w-[35vw]">
          <motion.h1 variants={title} className="text-[1.375rem]">
            {planetName}
          </motion.h1>
          <p className="text-stretch text-sm">{text}</p>
        </motion.div>
        <div className="flex flex-col gap-4 justify-center items-start min-w-[20vw] font-DisketBold text-[1.125rem] text-white">
          <p className=" ">You are :</p>
          <div className="flex flex-col gap-2 items-end w-full text-bold">
            <p className="text-sm">
              <motion.span variants={number} className="text-[1.125rem] mr-2">
                {age.years}
              </motion.span>
              {planetName} years.
            </p>
            <p className="text-sm">
              <motion.span variants={number} className="text-[1.125rem] mr-2">
                {age.days}
              </motion.span>
              {planetName} days.
            </p>
          </div>
          <p>Next birthday :</p>
          {nextBirthday && (
            <motion.p
              variants={number}
              className="place-self-end text-[1.125rem]"
            >
              {nextBirthday.toDateString()}.
            </motion.p>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
