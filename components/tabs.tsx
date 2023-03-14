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
    text: "content about Mercury",
    dayInYear: "88",
    secInDay: "140784",
  },
  {
    name: "Venus",
    color: "#e5c152",
    tab: "Venus",
    text: "content about earth",
    dayInYear: "225",
    secInDay: "243024",
  },
  {
    name: "Earth",
    color: "#1b8bd8",
    tab: "Earth",
    text: "content about Earth",
    dayInYear: "365.24",
    secInDay: "86164",
  },
  {
    name: "Mars",
    color: "#d14c32",
    tab: "Mars",
    text: "content about mars",
    dayInYear: "687",
    secInDay: "86400",
  },
  {
    name: "Jupiter",
    color: "#d1a95c",
    tab: "Jupiter",
    text: "content about jupiter",
    dayInYear: "4333",
    secInDay: "36000",
  },
  {
    name: "Saturn",
    color: "#e4cf9e",
    tab: "Saturn",
    text: "content about Saturn",
    dayInYear: "10759",
    secInDay: "38616",
  },
  {
    name: "Uranus",
    color: "#77b5d1",
    tab: "Uranus",
    text: "content about Uranus",
    dayInYear: "30687",
    secInDay: "61776",
  },
  {
    name: "Neptune",
    color: "#475b8e",
    tab: "Neptune",
    text: "content about Neptune",
    dayInYear: "60190",
    secInDay: "58644",
  },
  {
    name: "Pluto",
    color: "#9d8ea6",
    tab: "Pluto",
    text: "content about Pluto",
    dayInYear: "90560",
    secInDay: "55830",
  },
];

const TabsDemo = ({ day, year, month }: any) => {
  return (
    <Tabs.Root
      className="flex flex-col justify-center items-center"
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
                className="data-[state=active]:shadow-hovred relative "
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
              dayInYear: any;
              secInDay: any;
            },
            i: React.Key | null | undefined
          ) => (
            <Tabs.Content value={planet.tab} className="h-[20vh] w-[50vw] ">
              <div className="h-full w-full flex justify-center items-center">
                <Calcul
                  planetDaysInYear={planet.dayInYear}
                  planetSecInDays={planet.secInDay}
                  day={day}
                  month={month}
                  year={year}
                  planetName={planet.name}
                  text={planet.text}
                />
              </div>
            </Tabs.Content>
          )
        )}
        <Tabs.Content value="choose-planet" className="h-[20vh] w-[50vw]">
          <div className="h-full w-full flex justify-center items-center">
            chose your age
          </div>
        </Tabs.Content>
      </AnimatePresence>
    </Tabs.Root>
  );
};
export default TabsDemo;
