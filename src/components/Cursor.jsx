import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const cursorSize = 24;
export function Cursor() {
  const mouse = { x: useMotionValue(0), y: useMotionValue(0) };
  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  useEffect(() => {
    function updatePos(e) {
      const { clientX, clientY } = e;
      mouse.x.set(clientX - cursorSize / 2);
      mouse.y.set(clientY - cursorSize / 2);
    }
    window.addEventListener("mousemove", updatePos);

    return () => window.removeEventListener("mousemove", updatePos);
  }, []);
  return (
    <motion.div
      className="w-6 h-6 bg-none rounded-full bg-blue bg-blend-difference fixed border-2 border-background pointer-events-none"
      style={{
        left: smoothMouse.x,
        top: smoothMouse.y,
        zIndex: 9999,
      }}
    />
  );
}
