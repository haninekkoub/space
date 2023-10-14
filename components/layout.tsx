import { motion } from "framer-motion";
import Sun from "./sun";

const container = {};

const fadeFirst = {
  initial: {
    width: "0%",
  },
  animate: {
    width: "100vh",
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
    width: "150%",
    transition: {
      delay: 1,
      duration: 1.5,
    },
  },
};
const mobile = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 2,
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
        className="h-full w-[85vw] md:w-[76vw] overflow-hidden relative"
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
          className=" h-[2px] bg-primary origin-left rotate-90 absolute top-0 left-[100%]"
        />
      </motion.div>
      <div className="sm:block  hidden">{children}</div>
      <motion.div
        variants={mobile}
        initial="initial"
        animate="animate"
        className="sm:hidden absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 font-DisketBold text-white  text-center"
      >
        Our mobile version is lost in space, but we&apos;re not going to let
        that stop us. We&apos;re still developing it, and we&apos;re hoping to
        launch it soon. In the meantime, why don&apos;t you check out our
        desktop site?
      </motion.div>
      <div className="absolute top-1/2 -translate-y-1/2 left-[15px] sm:left-[3.75vw] ">
        <Sun />
      </div>
    </div>
  );
}
