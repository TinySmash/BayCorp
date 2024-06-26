"use client";
import { useState } from "react";
import FaqBlock from "./FaqBlock";
import Image from "next/image";

function Faq() {
  const [openedBlock, setOpenedBlock] = useState<number>(0);

  return (
    <section className="w-full h-auto min-h-screen container-page sec-container flex flex-col items-center">
      <h1 className="text-black font-bold text-2xl md:text-3xl xl:text-5xl flex items-center gap-1 self-center mb-6">
        FAQs
      </h1>
      <div className="relative w-full h-full flex items-center justify-between gap-5">
        <Image
          width={50}
          height={50}
          alt="exclamation mark"
          src="/assets/images/faq.svg"
          className="w-[30%] hidden lg:flex max-w-[330px]"
        ></Image>
        <ul className="w-full lg:w-3/5 overflow-hidden flex flex-col items-center gap-5 list-none">
          <FaqBlock
            isOpened={true}
            question="What Sets Us Apart from Traditional services?"
            answer="HealthX360 stands out by focusing on the root causes of health issues across multiple dimensions—physical, physiological, psychological, and spiritual—ensuring personalized and effective treatment plans that go beyond symptom management"
          />
          <FaqBlock
            question="What Sets Us Apart from Traditional services?"
            answer="HealthX360 stands out by focusing on the root causes of health issues across multiple dimensions—physical, physiological, psychological, and spiritual—ensuring personalized and effective treatment plans that go beyond symptom management"
          />
          <FaqBlock
            question="What Sets Us Apart from Traditional services?"
            answer="HealthX360 stands out by focusing on the root causes of health issues across multiple dimensions—physical, physiological, psychological, and spiritual—ensuring personalized and effective treatment plans that go beyond symptom management"
          />
          <FaqBlock
            question="What Sets Us Apart from Traditional services?"
            answer="HealthX360 stands out by focusing on the root causes of health issues across multiple dimensions—physical, physiological, psychological, and spiritual—ensuring personalized and effective treatment plans that go beyond symptom management"
          />
          <FaqBlock
            question="What Sets Us Apart from Traditional services?"
            answer="HealthX360 stands out by focusing on the root causes of health issues across multiple dimensions—physical, physiological, psychological, and spiritual—ensuring personalized and effective treatment plans that go beyond symptom management"
          />
        </ul>
      </div>
    </section>
  );
}

export default Faq;
