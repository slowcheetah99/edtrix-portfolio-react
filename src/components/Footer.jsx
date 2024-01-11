export default function Footer() {
  return (
    <footer className="w-full flex h-fit px-8 py-4 bg-dark justify-between">
      <div className="socials flex gap-x-8 text-white">
        <a
          href="www.twitter.com"
          target="_blank"
          className="text-background font-title"
        >
          Twitter
        </a>
        <a
          href="www.facebook.com"
          target="_blank"
          className="text-background font-title"
        >
          Facebook
        </a>
        <a
          href="www.linkedin.com"
          target="_blank"
          className="text-background font-title"
        >
          LinkedIn
        </a>
      </div>

      <p className="text-background font-title">&copy; Edtrix Concepts</p>

      <div className="flex gap-x-2 text-white">
        <span className="font-title text-background">
          Coded and designed by
        </span>
        <span className="text-violetLight font-title font-bold">rGaroner</span>
      </div>
    </footer>
  );
}
