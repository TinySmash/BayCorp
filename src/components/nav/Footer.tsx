import { FaInstagram, FaXTwitter, FaTiktok } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="px-8 py-10 bg-black bg-opacity-85 flex flex-col items-center">
      <div className="w-full flex items-center justify-between">
        <h1 className="font-bold text-xl md:text-2xl xl:text-3xl text-primary">
          Bay<span className="text-third">Corp</span>
        </h1>
        <h1 className="hidden md:flex text-base text-opacity-50 text-white">
          YOUR FAVOURITE SHOW IS ONE CLICK AWAY
        </h1>
        <nav className="flex gap-2 text-white">
          <a
            href="https://tiktok.com/@webt5002"
            target="_blank"
            className="w-8 h-8 shadow-md border-black rounded-full flex items-center justify-center bg-antiflash-white"
          >
            <FaTiktok className="text-xl" />
          </a>
          <a
            href="https://www.instagram.com/webt5002"
            target="_blank"
            className="w-8 h-8 shadow-md border-black rounded-full flex items-center justify-center bg-antiflash-white"
          >
            <FaInstagram className="text-xl" />
          </a>
          <a
            href="https://twitter.com/webt5002"
            target="_blank"
            className="w-8 h-8 shadow-md border-black rounded-full flex items-center justify-center bg-antiflash-white"
          >
            <FaXTwitter className="text-xl" />
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
