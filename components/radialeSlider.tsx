import { useState, useRef, useEffect } from "react";

interface ElementWithSize extends Element {
  offsetHeight: number;
  offsetWidth: number;
}

export const RadialeSlider = () => {
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
        pos_x = e.pageX;
        pos_y = e.pageY;
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
  
      const debug = document.querySelector(".debug");
      if (debug) {
        debug.innerHTML = angle + "deg";
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

  return (
    <div>
      <div className="debug text-purple-600 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 text-xl bg-orange-500">0deg</div>
      <div
        className="circle rounded-full relative border h-[180px] w-[180px]"
        ref={circleRef}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
      >
        <div className="dot">
          <div className="dot-inner"></div>
        </div>
      </div>

    </div>
  );
};