import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Age {
  years: number;
  days: number;
}

interface CalculProps {
  planetSecInDays: number;
  planetDaysInYear: number;
  planetName: string;
  text: string;
  day: number;
  month: number;
  year: number;
}

export default function Calcul({
  planetSecInDays,
  planetDaysInYear,
  planetName,
  text,
  day,
  month,
  year,
}: CalculProps) {
  const [age, setAge] = useState<Age>({ years: 0, days: 0 });
  const [nextBirthday, setNextBirthday] = useState<Date | null>(null);

  const calculateAge = (): void => {
    const PlanetYearInMilliseconds = planetDaysInYear * planetSecInDays * 1000;
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
    const nextBirthdayYear =
      (Math.floor(ageInYears) + 1 - ageInYears) * PlanetYearInMilliseconds;

    const nextBirthdayPlanetTime = new Date(today.getTime() + nextBirthdayYear);

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
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, transition: { duration: 1 } }}
        exit={{ opacity: 0, transition: { duration: 1 } }}
      >
        <motion.p>{text}</motion.p>
        <p>
          You are {age.years} {planetName} years and {age.days} {planetName}{" "}
          days old.
        </p>

        {nextBirthday && (
          <p>
            Your next birthday on {planetName} is on{" "}
            {nextBirthday.toDateString()}.
          </p>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
