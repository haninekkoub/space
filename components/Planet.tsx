import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Planet({ name, planetColor }: any) {
  const section = {
    initial: {
      color: "#7F8493",
    },
    hover: {
      color: planetColor,
      transition: {
        duration: 0.5,
      },
    },
  };
  const container = {
    initial: {
      borderColor: "#222831",
    },
    animate: {
      boxShadow: "0px 0px 10px 1px #7F8493",
      borderColor: "#A8AAAC",
      transition: {
        delay: 4,
        duration: 2,
      },
    },
    hover: {
      boxShadow: `0px 0px 15px 1px ${planetColor}`,
      borderColor: `${planetColor}`,
      transition: {
        delay: 0,
        duration: 0,
      },
    },
  };
  const circle = {
    initial: {
      pathLength: 0,
      stroke: "#363C45",
    },

    animate: {
      pathLength: 1,
      transition: {
        delay: 2.5,
        duration: 1.5,
      },
    },
  };

  const box = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 1.5,
        delay: 2.5,
      },
    },
  };

  const diagonal = {
    initial: {
      width: "0px",
    },
    animate: {
      width: "100%",
      transition: {
        delay: 2,
        type: "spring",
        stiffness: 20,
      },
    },
  };
  const title = {
    initial: {
      y: "20px",
      opacity: 0,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 4,
        type: "spring",
        stiffness: 20,
      },
    },
  };

  return (
    <motion.div
      className="flex flex-col justify-center gap-2 items-center -mt-[2vw] w-[6vw] "
      variants={section}
      initial="initial"
      animate="animate"
      whileHover="hover"
      exit="exit"
    >
      <motion.div
        className="relative h-[4vw] w-[4vw] rounded-full border"
        variants={container}
      >
        <motion.svg
          width="3vw"
          height="3vw"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          <motion.circle cx="30" cy="30" r="25" variants={circle} />
        </motion.svg>

        <motion.div
          className="h-[2.5vw] w-[2.5vw] border-[1px] border-primary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          variants={box}
        />
        <motion.div
          className=" h-[1px] bg-primary rotate-45 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
          variants={diagonal}
        />
        <motion.div
          className=" h-[1px] bg-primary -rotate-45 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
          variants={diagonal}
        />
      </motion.div>
      <div className="overflow-hidden">
        <motion.p
          variants={title}
          className="font-DisketBold text-[calc(1700vw/1440)] overflow-hidden"
        >
          {name}
        </motion.p>
      </div>
    </motion.div>
  );
}
