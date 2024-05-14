import Hero from "@/components/home/hero/Hero";
import SlideShowSection from "@/components/home/slideSection/Section";

export default function Home() {
  return (
    <main className="overflow-hidden scrollbar-hidden">
      <Hero />
      <SlideShowSection />
    </main>
  );
}