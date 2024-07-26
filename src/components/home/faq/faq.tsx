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
          className="w-[30%] hidden lg:flex max-w-[380px] xl:w-2/5 xl:max-w-[450px]"
        ></Image>
        <ul className="w-full lg:w-3/5 overflow-hidden flex flex-col items-center gap-5 list-none">
          <FaqBlock
            isOpened={true}
            question="Comment configurer l'IPTV sur mon appareil ?"
            answer="Il est assez simple de connecter l'IPTV. Suivez la page de tutoriel d'installation, discutez avec nous ou envoyez-nous un e-mail. Nos agents vous aideront à le configurer sur votre appareil"
          />
          <FaqBlock
            question="Combien de temps faudra-t-il pour recevoir les informations de connexion IPTV ?"
            answer="Nous avons tendance à vous envoyer un message dans les 5 minutes à 1 heure après l'achat pour coordonner la mise en place de votre commande"
          />
          <FaqBlock
            question="Quels appareils sont compatibles avec l'IPTV ?"
            answer="Notre serveur IPTV prend en charge tous les boîtiers TV : Android, Smart TV, iOS, Windows et Mac OS, Mag Box, Firestick, et tous les appareils peuvent être pris en charge sur demande"
          />
          <FaqBlock
            question="Quel contenu fournissent-ils ?"
            answer="Nous proposons une large gamme de chaînes européennes, espagnoles, latino-américaines, irlandaises, britanniques, américaines et asiatiques, ainsi que des films et des émissions de télévision en qualité 4K / FHD / HD"
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
