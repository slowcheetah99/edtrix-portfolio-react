import { useEffect, useRef } from "react";
import gsap from "gsap";

export function MyWork() {
  return (
    <div className="divider-wrapper">
      <Straight />
      <Reverse />
    </div>
  );
}

function Straight() {
  const firstContainer = useRef(null);
  const secondContainer = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    requestAnimationFrame(animation);
  }, []);

  function animation() {
    if (xPercent <= -100) {
      xPercent = 0;
    }

    gsap.set(firstContainer.current, { xPercent });
    gsap.set(secondContainer.current, { xPercent });

    xPercent += 0.09 * direction;
    requestAnimationFrame(animation);
  }

  return (
    <div className="wrapper">
      <div
        className={`container flex py-2 bg-pink h-fit whitespace-nowrap relative`}
      >
        <div className="slider flex gap-x-4 pr-4" ref={firstContainer}>
          {Array(13)
            .fill(1)
            .map((index) => (
              <p
                className="text-blueDark font-title text-xl"
                key={Math.random() * 10 - index}
              >
                My Work
              </p>
            ))}
        </div>

        <div
          className="slider flex gap-x-4 absolute pr-4 left-full"
          ref={secondContainer}
        >
          {Array(13)
            .fill(1)
            .map((index) => (
              <p
                className="text-blueDark font-title text-xl"
                key={Math.random() * 10 - index}
              >
                My Work
              </p>
            ))}
        </div>
      </div>
    </div>
  );
}

function Reverse() {
  const firstContainer = useRef(null);
  const secondContainer = useRef(null);
  let xPercent = 0;
  let direction = 1;

  useEffect(() => {
    requestAnimationFrame(animation);
  }, []);

  function animation() {
    if (xPercent >= 100) {
      xPercent = 0;
    }

    gsap.set(firstContainer.current, { xPercent });
    gsap.set(secondContainer.current, { xPercent });

    xPercent += 0.09 * direction;
    requestAnimationFrame(animation);
  }

  return (
    <div className="wrapper">
      <div
        className={`container flex py-2 bg-blueDark h-fit whitespace-nowrap relative`}
      >
        <div className="slider flex gap-x-4 pl-4" ref={firstContainer}>
          {Array(13)
            .fill(1)
            .map((index) => (
              <p
                className="text-pink font-title text-xl"
                key={Math.random() * 10 - index}
              >
                My Work
              </p>
            ))}
        </div>

        <div
          className="slider flex gap-x-4 absolute pl-4 right-full"
          ref={secondContainer}
        >
          {Array(13)
            .fill(1)
            .map((index) => (
              <p
                className="text-pink font-title text-xl"
                key={Math.random() * 10 - index}
              >
                My Work
              </p>
            ))}
        </div>
      </div>
    </div>
  );
}
