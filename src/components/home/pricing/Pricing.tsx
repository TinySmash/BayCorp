"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import PricingPlan from "./Plan";

function Pricing() {
  return (
    <section
      className="container-page w-full h-auto sec-container relative text-center"
      id="pricing"
    >
      <h1 className="text-black font-bold text-2xl md:text-3xl xl:text-5xl xl:mt-14 mb-12 lg:mb-20">
        Choisissez votre forfait
      </h1>
      <div className="relative lg:hidden">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            // clickable: true
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          style={{ display: "flex", justifyContent: "center" }}
          className="relative list-none w-full max-w-[320px] md:max-w-[400px] h-auto flex  justify-center flex-nowrap overflow-x-hidden z-10 "
        >
          <SwiperSlide>
            <PricingPlan
              links={[
                "https://baycorp.digital/index.php/step/checkout-3/",
                "https://baycorp.digital/index.php/step/checkout-3-4/",
                "https://baycorp.digital/index.php/step/checkout-3-3/",
              ]}
              name="1 mois"
              price={12}
              features={[
                "+70 000 chaînes, films et séries",
                "Qualité haute définition 4K FHD HD",
                "Pas de coupures",
                "Tous les appareils sont compatibles",
                "Support 24/7",
                "Serveur toujours disponible",
              ]}
            />
          </SwiperSlide>
          <SwiperSlide>
            <PricingPlan
              links={[
                "https://baycorp.digital/index.php/step/checkout-3-2/",
                "https://baycorp.digital/index.php/step/checkout-3-2-3/",
                "https://baycorp.digital/index.php/step/checkout-3-2-3-2/",
              ]}
              name="3 mois"
              price={20}
              features={[
                "+70 000 chaînes, films et séries",
                "Qualité haute définition 4K FHD HD",
                "Pas de coupures",
                "Tous les appareils sont compatibles",
                "Support 24/7",
                "Serveur toujours disponible",
              ]}
            />
          </SwiperSlide>
          <SwiperSlide>
            <PricingPlan
              links={[
                "https://baycorp.digital/index.php/step/checkout-3-2-2/",
                "https://baycorp.digital/index.php/step/checkout-3-2-2-3/",
                "https://baycorp.digital/index.php/step/checkout-3-2-2-4/",
              ]}
              name="6 mois"
              price={30}
              features={[
                "+70 000 chaînes, films et séries",
                "Qualité haute définition 4K FHD HD",
                "Pas de coupures",
                "Tous les appareils sont compatibles",
                "Support 24/7",
                "Serveur toujours disponible",
              ]}
            />
          </SwiperSlide>
          <SwiperSlide>
            <PricingPlan
              links={[
                "https://baycorp.digital/index.php/step/checkout-3-2-2-2/",
                "https://baycorp.digital/index.php/step/checkout-3-2-2-2-2/",
                "https://baycorp.digital/index.php/step/checkout-3-2-2-2-2-2/",
              ]}
              name="12 mois"
              price={45}
              features={[
                "+70 000 chaînes, films et séries",
                "Qualité haute définition 4K FHD HD",
                "Pas de coupures",
                "Tous les appareils sont compatibles",
                "Support 24/7",
                "Serveur toujours disponible",
              ]}
              topSeller={true}
            />
          </SwiperSlide>
          <div className="slider-controler mt-20">
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
      <div className="relative w-full h-auto hidden lg:flex items-center justify-center">
        <PricingPlan
          links={[
            "https://baycorp.digital/index.php/step/checkout-3/",
            "https://baycorp.digital/index.php/step/checkout-3-4/",
            "https://baycorp.digital/index.php/step/checkout-3-3/",
          ]}
          name="1 mois"
          price={12}
          features={[
            "+70 000 chaînes, films et séries",
            "Qualité haute définition 4K FHD HD",
            "Pas de coupures",
            "Tous les appareils sont compatibles",
            "Support 24/7",
            "Serveur toujours disponible",
          ]}
        />
        <PricingPlan
          links={[
            "https://baycorp.digital/index.php/step/checkout-3-2/",
            "https://baycorp.digital/index.php/step/checkout-3-2-3/",
            "https://baycorp.digital/index.php/step/checkout-3-2-3-2/",
          ]}
          name="3 mois"
          price={20}
          features={[
            "+70 000 chaînes, films et séries",
            "Qualité haute définition 4K FHD HD",
            "Pas de coupures",
            "Tous les appareils sont compatibles",
            "Support 24/7",
            "Serveur toujours disponible",
          ]}
        />
        <PricingPlan
          links={[
            "https://baycorp.digital/index.php/step/checkout-3-2-2/",
            "https://baycorp.digital/index.php/step/checkout-3-2-2-3/",
            "https://baycorp.digital/index.php/step/checkout-3-2-2-4/",
          ]}
          name="6 mois"
          price={30}
          features={[
            "+70 000 chaînes, films et séries",
            "Qualité haute définition 4K FHD HD",
            "Pas de coupures",
            "Tous les appareils sont compatibles",
            "Support 24/7",
            "Serveur toujours disponible",
          ]}
        />
        <PricingPlan
          links={[
            "https://baycorp.digital/index.php/step/checkout-3-2-2-2/",
            "https://baycorp.digital/index.php/step/checkout-3-2-2-2-2/",
            "https://baycorp.digital/index.php/step/checkout-3-2-2-2-2-2/",
          ]}
          name="12 mois"
          price={45}
          features={[
            "+70 000 chaînes, films et séries",
            "Qualité haute définition 4K FHD HD",
            "Pas de coupures",
            "Tous les appareils sont compatibles",
            "Support 24/7",
            "Serveur toujours disponible",
          ]}
          topSeller={true}
        />
      </div>
    </section>
  );
}

export default Pricing;
