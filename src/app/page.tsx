import About from "@/components/home/about/About";
import Faq from "@/components/home/faq/faq";
import Hero from "@/components/home/hero/Hero";
import Pricing from "@/components/home/pricing/Pricing";
import SlideShowSection from "@/components/home/slideSection/Section";
import Trending from "@/components/home/trending/Trending";
import { MdWhatsapp } from "react-icons/md";

export default function Home() {
  return (
    <main className="overflow-hidden scrollbar-hidden relative">
      <Hero />
      <SlideShowSection />
      <About />
      <Trending />
      <Pricing />
      <Faq />
      <a
        href="https://api.whatsapp.com/send?phone=33758791697"
        target="_blank"
        className="fixed bottom-6 right-5 xl:right-6 xl:bottom-7 rounded-full p-2 md:p-3 bg-emerald-500"
      >
        <MdWhatsapp className="text-4xl lg:text-5xl text-white" />
      </a>
    </main>
  );
}
