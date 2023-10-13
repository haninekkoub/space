import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

interface RadialeSliderProps {
  max: number;
  min: number;
  id: string;
  value: string;
  onChange?: (value: string) => void;
  setValue?: (value: string) => void;
}

export const RadialSlider = ({
  max,
  min,
  id,
  onChange,
  value,
  setValue,
}: RadialeSliderProps) => {
  const [debugValue, setDebugValue] = useState(Number(value));
  useEffect(() => {
    setDebugValue(Number(value));
  }, [value]);

  const [isDragging, setIsDragging] = useState(false);
  const circleRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: MouseEvent | TouchEvent) => {
    if (isDragging) {
      const circle = circleRef.current;
      if (!circle) {
        return;
      }

      const center_x = circle.offsetWidth / 2 + circle.offsetLeft;
      const center_y = circle.offsetHeight / 2 + circle.offsetTop;

      let pos_x, pos_y;
      if (e instanceof MouseEvent) {
        const parentRect = circle.getBoundingClientRect();
        pos_x = e.clientX - parentRect.left;
        pos_y = e.clientY - parentRect.top;
      } else {
        pos_x = e.touches[0].pageX;
        pos_y = e.touches[0].pageY;
      }

      const delta_y = center_y - pos_y;
      const delta_x = center_x - pos_x;
      let angle = (Math.atan2(delta_y, delta_x) * 180) / Math.PI; // Calculate Angle between circle center and mouse pos
      angle -= 90;
      if (angle < 0) {
        angle = 360 + angle; // Always show angle positive
      }
      angle = Math.round(angle);

      const dot = circle.querySelector(".dot") as HTMLElement;
      if (dot) {
        dot.style.transform = `rotate(${angle}deg)`;
      }

      const debug = document.querySelector(`#${id} .debug`);
      const value = Math.max(
        Math.min(Math.round((angle * (max - min)) / 360) + min, max),
        min
      );

      if (debug) {
        debug.innerHTML = value.toString();
      }
      setDebugValue(value);
      if (onChange) {
        onChange(value.toString());
      }
      if (setValue) {
        setValue(value.toString());
      }
    }
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("touchmove", handleMouseMove);
    document.addEventListener("touchend", handleMouseUp);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchmove", handleMouseMove);
      document.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging]);

  useEffect(() => {
    if (onChange) {
      onChange(debugValue.toString());
    }
  }, [debugValue, onChange]);

  return (
    <motion.div
      id={id}
      className="circle rounded-full relative border border-primary h-[8vw] min-h-[100px] w-[8vw] min-w-[100px] active:border-[#CDCDCF]"
      ref={circleRef}
      onMouseDown={handleMouseDown}
      onTouchStart={handleMouseDown}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1.2, delay: 1.8 }}
    >
      <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-sm font-DisketBold flex flex-col justify-center items-center select-none">
        <motion.div
          className="text-base text-primary opacity-0.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 5.2 }}
        >
          {id}
        </motion.div>
        <div className="debug text-[#CDCDCF] "></div>
      </div>
      <motion.div
        className="dot !md:before:min-w-[5px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 5.2 }}
      >
        <div className="dot-inner "></div>
      </motion.div>
    </motion.div>
  );
};
