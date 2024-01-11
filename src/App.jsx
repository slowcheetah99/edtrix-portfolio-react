import { useRef } from "react";
// import LocomotiveScroll from "locomotive-scroll";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

import Hero from "./components/hero";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { MyWork } from "./components/MyWork";
import { Ping } from "./components/Ping";
import { Cursor } from "./components/Cursor";
import grain from "./assets/grain.png";

export default function App() {
  const scrollRef = useRef(null);
  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
      }}
      containerRef={scrollRef}
    >
      <Cursor />
      <div
        className="bg-[#F1EFE9] overflow-x-hidden"
        data-scroll-container
        data-scroll-section
        ref={scrollRef}
      >
        <div
          className="grain-background bg-repeat h-[300%] -left-[100%] pointer-events-none fixed -top-[100%] w-[300%] will-change-transform"
          style={{
            backgroundImage: `url(${grain})`,
            opacity: 0.035,
            zIndex: 999,
          }}
        />
        <Hero />
        <About />
        <MyWork />
        <Services />
        <Ping />
        <Contact />
        <Footer />
      </div>
    </LocomotiveScrollProvider>
  );
}
