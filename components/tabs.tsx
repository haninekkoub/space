import React, { useState } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import Planet from "./Planet";
import Calcul from "./calcul";
import { AnimatePresence, motion } from "framer-motion";

const planets = [
  {
    name: "Mercury",
    color: "#c5c5c5",
    tab: "Mercury",
    text: "The smallest planet in the solar system, located closest to the sun. It has a diameter of approximately 4,880 km and a mass of 3.3 x 10^23 kg. It has a rocky surface and no atmosphere.",
    dayInYear: "88",
    secInDay: "140784",
  },
  {
    name: "Venus",
    color: "#e5c152",
    tab: "Venus",
    text: "The second planet from the sun, known for its thick, toxic atmosphere that traps heat and creates a greenhouse effect. It has a diameter of approximately 12,104 km and a mass of 4.87 x 10^24 kg. It has a rocky surface and is the hottest planet in the solar system.",
    dayInYear: "225",
    secInDay: "243024",
  },
  {
    name: "Earth",
    color: "#1b8bd8",
    tab: "Earth",
    text: "The third planet from the sun, and the only known planet in the universe capable of sustaining life. It has a diameter of approximately 12,742 km and a mass of 5.97 x 10^24 kg. It has a water-rich surface and a protective atmosphere.",
    dayInYear: "365.24",
    secInDay: "86164",
  },
  {
    name: "Mars",
    color: "#d14c32",
    tab: "Mars",
    text: "The fourth planet from the sun, known for its reddish appearance and dusty, rocky terrain. It has a diameter of approximately 6,779 km and a mass of 6.39 x 10^23 kg. It has a thin atmosphere and may have once had liquid water on its surface.",
    dayInYear: "687",
    secInDay: "86400",
  },
  {
    name: "Jupiter",
    color: "#d1a95c",
    tab: "Jupiter",
    text: "The largest planet in the solar system, known for its colorful bands of gas and swirling storms, including the famous Great Red Spot. It has a diameter of approximately 139,822 km and a mass of 1.898 x 10^27 kg. It is a gas giant with no solid surface.",
    dayInYear: "4333",
    secInDay: "36000",
  },
  {
    name: "Saturn",
    color: "#e4cf9e",
    tab: "Saturn",
    text: "The sixth planet from the sun, known for its iconic rings made of ice and rock particles. It has a diameter of approximately 116,460 km and a mass of 5.68 x 10^26 kg. It is also a gas giant with no solid surface.",
    dayInYear: "10759",
    secInDay: "38616",
  },
  {
    name: "Uranus",
    color: "#77b5d1",
    tab: "Uranus",
    text: "The seventh planet from the sun, known for its tilted axis and icy, blue appearance. It has a diameter of approximately 50,724 km and a mass of 8.68 x 10^25 kg. It is an ice giant with a rocky core.",
    dayInYear: "30687",
    secInDay: "61776",
  },
  {
    name: "Neptune",
    color: "#475b8e",
    tab: "Neptune",
    text: "The eighth and farthest planet from the sun, known for its deep blue color and windy atmosphere. It has a diameter of approximately 49,244 km and a mass of 1.02 x 10^26 kg. It is also an ice giant with a rocky core.",
    dayInYear: "60190",
    secInDay: "58644",
  },
  {
    name: "Pluto",
    color: "#9d8ea6",
    tab: "Pluto",
    text: "A dwarf planet located in the Kuiper Belt, a region of icy objects beyond Neptune. It has a diameter of approximately 2,377 km and a mass of 1.31 x 10^22 kg, making it much smaller than the other planets in the solar system. Pluto has a rocky, icy surface and a thin atmosphere, and it has five known moons.",
    dayInYear: "90560",
    secInDay: "55830",
  },
];

const choosePlanet = {
  initial : {
    opacity:0,
  },
  animate : {
    opacity: [0 , 1 , 0.1],
    transition : {
      delay: 5,
      repeat: Infinity,
      duration: 4,

    },
  }
}
const TabsDemo = ({ day, year, month }: any) => {
  return (
    <Tabs.Root
      className="flex flex-col justify-center items-center gap-8 "
      defaultValue="choose-planet"
    >
      <Tabs.List
        aria-label="Manage your account"
        className="flex justify-start items-center gap-10 "
      >
        <Tabs.Trigger
          value="choose-planet"
          key="choose-planet"
          className="hidden"
        >
          Choose your planet
        </Tabs.Trigger>
        {planets.map(
          (
            planet: { name: any; color: any; tab: any; text: any },
            i: React.Key | null | undefined
          ) => (
            <Tabs.Trigger value={planet.tab} key={i}>
              <Planet
                name={planet.name}
                planetColor={planet.color}
             
              />
            </Tabs.Trigger>
          )
        )}
      </Tabs.List>
      <AnimatePresence>
        {planets.map(
          (
            planet: {
              name: any;
              text: any;
              tab: any;
              color : any;
              dayInYear: any;
              secInDay: any;
            },
            i: React.Key | null | undefined
          ) => (
            <Tabs.Content value={planet.tab} className="h-[20vh] w-[70vw]" key={i}>
              <div className="flex justify-center items-center">
                <Calcul
                  planetDaysInYear={planet.dayInYear}
                  planetSecInDays={planet.secInDay}
                  day={day}
                  month={month}
                  year={year}
                  planetName={planet.name}
                  text={planet.text}
                  planetColor={planet.color}
                />
              </div>
            </Tabs.Content>
          )
        )}
        <Tabs.Content value="choose-planet" className="min-h-[20vh] w-[50vw] ">
          <motion.h1 className="h-full w-full flex justify-center items-center pt-10 font-DisketBold text-white" variants={choosePlanet} initial="initial" animate="animate">
            enter you age and chose a planet
          </motion.h1>
        </Tabs.Content>
      </AnimatePresence>
    </Tabs.Root>
  );
};
export default TabsDemo;
