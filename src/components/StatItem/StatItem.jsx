import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const StatItem = ({ endValue, label }) => {
  const [count, setCount] = useState(0);
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      const increment = Math.ceil(endValue / 100); // Increment step for smooth counting
      let currentValue = 0;

      const interval = setInterval(() => {
        currentValue += increment;
        if (currentValue >= endValue) {
          setCount(endValue);
          clearInterval(interval);
        } else {
          setCount(currentValue);
        }
      }, 100); // Update every 20ms for smooth animation

      return () => clearInterval(interval); // Cleanup interval on unmount
    }
  }, [inView, endValue]);

  return (
    <div ref={ref} className="text-center">
      <motion.h4
        className="text-mainColor text-xl font-semibold tracking-wide"
        animate={controls}
      >
        {count}+
      </motion.h4>
      <p className="text-gray-400 font-medium text-sm">{label}</p>
    </div>
  );
};

export default StatItem;
