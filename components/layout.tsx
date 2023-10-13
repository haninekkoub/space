import { motion } from "framer-motion";
import Sun from "./sun";

const container = {};

const fadeFirst = {
  initial: {
    width: "0%",
  },
  animate: {
    width: "120%",
    transition: {
      delay: 0.3,
      duration: 1.5,
    },
  },
};
const fade = {
  initial: {
    width: "0%",
  },
  animate: {
    width: "120%",
    transition: {
      delay: 1,
      duration: 1.5,
    },
  },
};
export default function Layout({ children }: any) {
  return (
    <div className="bg-background h-[100vh] flex justify-center items-center w-full relative ">
      <motion.div
        variants={container}
        initial="initial"
        animate="animate"
        className="h-full w-[76vw] overflow-hidden relative"
      >
        <motion.div
          variants={fade}
          className=" h-[1px]  bg-primary origin-left absolute top-1/2 left-0"
        />
        <motion.div
          variants={fade}
          className=" h-[1px]  bg-primary origin-left rotate-45 absolute top-1/2 left-0"
        />
        <motion.div
          variants={fade}
          className=" h-[1px]  bg-primary origin-left rotate-[22.73deg] absolute top-1/2 left-0"
        />
        <motion.div
          variants={fade}
          className=" h-[1px]  bg-primary origin-left -rotate-45 absolute top-1/2 left-0"
        />
        <motion.div
          variants={fade}
          className=" h-[1px]  bg-primary origin-left -rotate-[22.73deg] absolute top-1/2 left-0 "
        />
        <motion.div
          variants={fadeFirst}
          className=" h-[2px]  bg-primary origin-left rotate-90 absolute top-0 left-0"
        />
        <motion.div
          variants={fadeFirst}
          className=" h-[2px]  bg-primary origin-left rotate-90 absolute top-0 left-[100%]"
        />
      </motion.div>
      <div className="">{children}</div>
      <div className="absolute top-1/2 -translate-y-1/2 left-[3.75vw]">
        <Sun />
      </div>
    </div>
  );
}
