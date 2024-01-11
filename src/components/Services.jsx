import { motion } from "framer-motion";

import graphicImg from "../assets/graphic-design.png";
import { branding } from "../utils/utils";
import { useState, useEffect } from "react";
export default function Services() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    function changeIndex() {
      if (index >= branding.length - 1) {
        return setIndex(0);
      }
      return setIndex((curr) => (curr += 1));
    }

    const id = window.setInterval(changeIndex, 5000);
    return () => window.clearInterval(id);
  }, [index]);
  return (
    <section id="services" className="w-full px-24">
      <div
        id="graphic-design"
        className="flex justify-between h-fit items-center py-20"
      >
        <div className="w-1/2 h-full">
          <div className="mb-5 relative">
            <p className="text-blue text-lg text-left mb-1 font-body">
              Services
            </p>
            <h2 className="text-4xl font-extralight text-blueDark font-title">
              Graphic Design
            </h2>

            <div className="absolute -bottom-2 left-0 w-48 h-[1.5px] bg-violet" />
          </div>
          <p className="text-blueDark font-body first-letter:text-blue first-letter:text-6xl first-letter:font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <div className="w-1/2 h-[610px] wrapper">
          <div className="w-full h-full flex relative container flex-col gap-y-[10vh] overflow-y-hidden">
            {branding.map((brand, index) => (
              <div key={brand.id} className="graphic h-full">
                <div className="graphic-body flex h-full overflow-y-hidden">
                  <div className="flex gap-x-1 items-center w-12 rotate-90 justify-self-end">
                    <p className="text-blueDark font-title text-xl">Posters</p>
                    <div className="bg-violet w-12 h-12" />
                  </div>

                  <img
                    src={brand.image}
                    alt={brand.name}
                    className="w-[435.2px] h-full object-center object-cover"
                  />
                </div>
                <div className="graphic-meta px-[10%] mr-4">
                  <motion.div className="flex justify-between w-full mb-2">
                    <p>{index + 1}</p>
                    <p>{brand.name}</p>
                  </motion.div>

                  <div className="relative w-full h-[1.5px] bg-blue/20">
                    <motion.div
                      className="absolute top-0 left-0 w-full h-full bg-blue origin-left"
                      initial={{
                        scaleX: 0,
                      }}
                      animate={{
                        scaleX: 1,
                      }}
                      transition={{
                        duration: 10,
                        ease: "linear",
                      }}
                    />
                  </div>

                  <div className="flex justify-between w-full mb-2">
                    <p>{branding.length}</p>
                    <p>Graphic Metadata</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto h-[1.5px] line-linear my-12" />

      <div
        id="branding"
        className="h-fit flex justify-between flex-row-reverse mt-9 items-center py-20"
      >
        <div className="w-1/2 h-full">
          <div className="mb-5 relative">
            <p className="text-blue text-lg text-left mb-1 font-body">
              Services
            </p>
            <h2 className="text-4xl extralight text-blueDark font-title">
              Branding
            </h2>

            <div className="absolute -bottom-2 left-0 w-48 h-[1.5px] bg-violet" />
          </div>
          <p className="text-blueDark font-body first-letter:text-blue first-letter:text-6xl first-letter:font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <div className="w-1/2 h-full">
          <div className="graphic w-full relative">
            <div className="w-full h-[549px]">
              <img
                src={graphicImg}
                alt="graphic design"
                className="w-[80%] h-full object-center object-cover rounded-md"
              />
            </div>

            <div className="absolute -bottom-8 right-2 flex gap-x-2 items-center rotate-90 w-fit h-1/6 mb-16">
              <p className="text-lg text-violet font-extralight font-title">
                Cards
              </p>

              <div className="w-20 h-[1.5px] bg-violet" />
            </div>
          </div>

          <div className="metadata w-[78%] h-[30%] ml-[2%]">
            <div className="flex justify-between w-full h-fit items-center mb-1">
              <p>1</p>
              <p>Graphic Name</p>
            </div>
            <div className="w-full h-0.5 bg-blueDark/20 mb-1" />
            <div className="flex justify-between w-full h-fit items-center">
              <p className="font-title text-blueDark font-extralight">7</p>
              <p className="font-title text-blueDark font-extralight">
                Graphic Metadata
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
