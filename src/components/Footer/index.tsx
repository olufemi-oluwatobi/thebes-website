// Footer.tsx
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-primary px-[5%] pb-12 min-h-[400px] mt-48  text-center flex justify-between items-end">
      <div className="text-6xl font-semibold text-brown">Thebes.</div>
      <div className="flex text-left  ">
        <nav className="flex gap-4 flex-col text-purple-800">
          <Link href="/twitter">
            <div className="text-brown font-bold">TWITTER</div>
          </Link>
          <Link href="/instagram">
            <div className="text-brown font-bold">INSTAGRAM</div>
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
