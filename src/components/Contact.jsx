export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full h-[100vh] flex justify-center items-center flex-col overflow-hidden mb-12"
    >
      <div className="mb-5">
        <p className="text-blue font-body text-lg text-center mb-1">Ping</p>
        <h2 className="text-4xl text-center font-title font-extralight text-blueDark">
          Let&apos;s Talk
        </h2>
      </div>
      <p className="max-w-prose text-center text-blueDark font-body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>

      <form className="w-1/2 h-fit">
        <input
          type="text"
          placeholder="Name"
          className="w-full h-16 px-4 py-2 border-b-[1.5px] border-blueDark/80 mb-4 placeholder:font-title placeholder:text-blueDark/50 bg-background"
          required
          aria-required
        />

        <input
          type="text"
          placeholder="Email"
          className="w-full h-16 px-4 py-2 border-b-[1.5px] border-blueDark/80 mb-4 placeholder:font-title placeholder:text-blueDark/50 bg-background"
          required
          aria-required
        />

        <textarea
          className="w-full h-40 px-4 py-2 border-b-[1.5px] border-blueDark/80 placeholder:font-title placeholder:text-blueDark/50 bg-background"
          placeholder="Message"
          required
          aria-required
        ></textarea>

        <button
          type="submit"
          className="flex gap-x-3 px-5 py-3 bg-blueDark rounded-full items-center mt-4 mx-auto"
        >
          <span className="w-3 h-3 bg-background rounded-full"></span>
          <span className="text-background font-body">Submit</span>
        </button>
      </form>
    </section>
  );
}
