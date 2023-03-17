import { useState, useRef, useEffect } from "react";

interface ElementWithSize extends Element {
  offsetHeight: number;
  offsetWidth: number;
}
interface RadialeSliderProps {
  max: string;
  min: string;
  id: string;
  inputValue: string;
  onChange?: (value: string) => void;
  setInputValue?: (value: string) => void;
}

export const RadialeSlider = ({   
  max,
  min,
  id,
  onChange,
  inputValue,
  setInputValue, 
}: RadialeSliderProps) => {
    const [debugValue, setDebugValue] = useState(Number(inputValue));
    useEffect(() => {
      setDebugValue(Number(inputValue));
    }, [inputValue]);
  
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
      const debugValue = Math.max(Math.min(Math.floor((angle * parseInt(min)* parseInt(max)) / 360) + 1, parseInt(max)), parseInt(min));
      if (debug) {
        debug.innerHTML = debugValue.toString();
      }
      setDebugValue(debugValue);
      if (onChange) {
        onChange(debugValue.toString());
      }
      if (setInputValue) {
        setInputValue(debugValue.toString());
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
      <div
        id={id}
        className="circle rounded-full relative border border-primary h-[8vw] w-[8vw]"
        ref={circleRef}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
      >
        <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-sm font-DisketBold flex flex-col justify-center items-center select-none">
          <div className="text-base text-primary opacity-0.5">{id}</div>
          <div className="debug text-[#CDCDCF] ">1</div>
        </div>
        <div className="dot">
          <div className="dot-inner"></div>
        </div>
      </div>
      

  );
};

