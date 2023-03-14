import { motion } from "framer-motion";

const moon = {
  initial: {},
  animate: {
    rotate: [0, 360],
    transition: {
      duration: 5,
      ease: "linear",
      repeat: Infinity,
    },
  },
};

export default function Sun() {
  return (
    <div className="relative h-[4.5vw] w-[4.5vw] rounded-full border border-dashed border-[#333942] box-content">
      <div className=" h-[3.5vw] w-[3.5vw] rounded-full bg-[#8D7B4D] origin-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      <motion.div
        className="h-[4.5vw] w-[4.5vw] relative rounded-full box-content"
        variants={moon}
        animate="animate"
      >
        <div className="h-[0.875vw] w-[0.875vw] bg-[#ffd369] rounded-full" />
      </motion.div>
    </div>
  );
}
