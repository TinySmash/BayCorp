import { FaInstagram, FaXTwitter, FaTiktok } from "react-icons/fa6";
import { MdPhone } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="px-8 py-10 bg-black bg-opacity-85 flex flex-col items-center">
      <div className="w-full flex items-center justify-between">
        <Image
          width={20}
          height={20}
          alt="logo"
          src="/assets/images/logo-shape.svg"
          className="w-7 lg:w-10 h-auto"
        ></Image>
        <h1 className="hidden md:flex text-base text-opacity-50 text-white">
          VOTRE ÉMISSION PRÉFÉRÉE EST À UN CLIC
        </h1>
        <nav className="flex gap-2 text-white">
          <a
            href="https://tiktok.com"
            target="_blank"
            className="w-8 h-8 shadow-md border-black rounded-full flex items-center justify-center bg-antiflash-white"
          >
            <FaTiktok className="text-xl lg:text-2xl" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            className="w-8 h-8 shadow-md border-black rounded-full flex items-center justify-center bg-antiflash-white"
          >
            <FaInstagram className="text-xl lg:text-2xl" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            className="w-8 h-8 shadow-md border-black rounded-full flex items-center justify-center bg-antiflash-white"
          >
            <FaXTwitter className="text-xl lg:text-2xl" />
          </a>
        </nav>
      </div>
      <div className="flex flex-wrap md:flex-nowrap md:justify-between w-full mt-10 ">
        <div className="flex flex-col gap-1 w-full md:w-fit items-start">
          <h3 className="text-white font-medium text-xl lg:text-3xl">
            Envoyez-nous un e-mail
          </h3>
          <h5 className="text-white text-sm lg:text-base">
            teambay@baycorp.digital
          </h5>
          <div className="flex items-center gap-1 mt-4">
            <MdPhone className="p-1 bg-white rounded-full text-black text-2xl lg:text-4xl" />
            <h1 className="text-white lg:text-xl">+33 758-791697</h1>
          </div>
        </div>
        <div className="mt-8 md:mt-0">
          <h3 className="text-white font-medium text-xl lg:text-2xl">
            Méthodes de payement
          </h3>
          <ul className="list-none flex gap-2 mt-1">
            <li className="w-10 h-6 bg-white rounded-sm flex items-center justify-center">
              {" "}
              <Image
                width={15}
                height={15}
                alt="Visa logo"
                src="/assets/images/payment/visa.svg"
                className="w-auto h-[95%]"
              ></Image>{" "}
            </li>
            <li className="w-10 h-6 bg-white rounded-sm flex items-center justify-center">
              {" "}
              <Image
                width={15}
                height={15}
                alt="Mastercard logo"
                src="/assets/images/payment/mastercard.svg"
                className="w-auto h-[95%]"
              ></Image>{" "}
            </li>
            <li className="w-10 h-6 bg-white rounded-sm flex items-center justify-center">
              {" "}
              <Image
                width={15}
                height={15}
                alt="Paypal logo"
                src="/assets/images/payment/paypal.svg"
                className="w-auto h-[90%]"
              ></Image>{" "}
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full flex gap-3 flex-col md:flex-row md:justify-between p-2 md:pt-4 border-t border-white items-center mt-10">
        <h1 className="font-medium text-white text-sm text-center lg:text-base xl:text-lg">
          © Tous droits réservés par Bay IPTV
        </h1>
        <ul className="flex gap-7 list-disc  text-[10px] md:text-sm lg:text-lg mt-5 md:mt-0">
          <li className="list-none text-white hover:text-gray-400">
            <Link href="/terms">Termes et conditions</Link>
          </li>
          <li className="text-white hover:text-gray-400">
            <Link href="/refund-policy">Politique de remboursementy</Link>
          </li>
          <li className="text-white hover:text-gray-400">
            <Link href="/privacy-policy">Politique de confidentialité</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
