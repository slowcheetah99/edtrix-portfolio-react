export default function About() {
  return (
    <section
      id="about"
      className="w-full h-[70vh] flex justify-center items-center flex-col mb-20"
    >
      <div className="mb-5">
        <p className="text-blue text-lg text-center mb-1 font-body">About Me</p>
        <h2 className="text-4xl text-center font-title text-blueDark">
          Short Bio
        </h2>
      </div>
      <p className="max-w-prose text-center font-body text-blueDark">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </section>
  );
}
