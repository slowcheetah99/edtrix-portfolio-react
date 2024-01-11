import { motion } from "framer-motion";
import heroImg from "../assets/hero-img.png";

export default function Hero() {
  return (
    <header className="grid grid-cols-1 md:grid-cols-2">
      <div className="w-full h-[100vh] px-8 flex flex-col items-start justify-center bg-gradient-to-br from-[#2E03FF] to-[#9523C8]">
        <h1 className="text-5xl mb-4 font-title text-background uppercase">
          Edtrix Concepts
        </h1>
        <div className="w-full flex">
          <span className="text-background text-xl inline-block bg-blend-difference font-body">
            We craft timeless designs for brands with respect for the past, an
            eye for the future, but grounded in the present
          </span>
        </div>
      </div>
      <div className="w-full h-full relative">
        <img
          src={heroImg}
          alt=""
          className="absolute top-0 left-0 w-full h-full object-center object-cover"
          style={{
            filter: "url(#noise)",
          }}
        />
      </div>

      {/* filters */}
      <svg>
        <filter id="noise">
          <motion.feTurbulence
            baseFrequency="0.02"
            result="NOISE"
            numOctaves="1"
            id="turbulence"
            animate={{
              baseFrequency: [0.0225, 0.0235, 0.0245, 0.0235, 0.0225, 0.0215],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
          />
          <feDisplacementMap in="SourceGraphic" in2="NOISE" scale="20" />
        </filter>
      </svg>
    </header>
  );
}
