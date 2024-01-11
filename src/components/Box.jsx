import { motion } from "framer-motion";
const variants = {
  initial: { rotate: 0 },
  loop: { rotate: 360 },
};

const controls = {
  loop: Infinity,
};

export default function Box() {
  return (
    <motion.div
      animate={{
        rotate: 360,
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
      }}
      controls={controls}
      className="w-20 h-20 bg-blue"
    />
  );
}
