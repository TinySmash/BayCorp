"use client";
import { useState } from "react";
import FaqBlock from "./FaqBlock";
import Image from "next/image";

function Faq() {
  const [openedBlock, setOpenedBlock] = useState<number>(0);

  return (
    <section className="w-full h-auto container-page sec-container flex flex-col items-center">
      <h1 className="text-black font-bold text-2xl md:text-3xl xl:text-5xl flex items-center gap-1 self-center mb-6">
        FAQs
      </h1>
      <div className="relative w-full h-full flex items-center justify-between gap-5">
        <Image
          width={50}
          height={50}
          alt="exclamation mark"
          src="/assets/images/faq.svg"
          className="w-[30%] hidden lg:flex max-w-[380px] xl:w-2/5 xl:max-w-[450]"
        ></Image>
        <ul className="w-full lg:w-3/5 overflow-hidden flex flex-col items-center gap-5 list-none">
          <FaqBlock
            isOpened={true}
            question="How to set up IPTV on my device?"
            answer="It is quite simple to connect IPTV. Follow the installation tutorial page , chat with us or send us an email. Our agents will help you to set it up on your device"
          />
          <FaqBlock
            question="How long will it take to receive IPTV login information?"
            answer="We tend to text you within 5 minutes to 1 hour of purchase to coordinate setting up your order"
          />
          <FaqBlock
            question="What devices does IPTV support?"
            answer="Our IPTV server supports all TV boxes: Android, Smart TV, iOS, Windows and Mac OS, Mag Box, Firestick, and all devices can be supported upon request"
          />
          <FaqBlock
            question="What content do they provide?"
            answer="We offer a wide range of European, Spanish, Latin, Irish, British, American and Asian channels, movies and TV shows in 4K / FHD / HD quality"
          />
          {/* <FaqBlock
            question="What Sets Us Apart from Traditional services?"
            answer="HealthX360 stands out by focusing on the root causes of health issues across multiple dimensions—physical, physiological, psychological, and spiritual—ensuring personalized and effective treatment plans that go beyond symptom management"
          /> */}
        </ul>
      </div>
    </section>
  );
}

export default Faq;
