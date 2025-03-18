import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const BannerKiosk = () => {
  const slides = [
    {
      title: "Personnalisation totale",
      description:
        "Chaque entreprise a des besoins uniques : nous adaptons nos solutions pour répondre précisément à vos exigences.",
    },
    {
      title: "Optimisation de la productivité",
      description:
        "Nos services informatiques permettent d’automatiser des tâches, d’améliorer les flux de travail et d’optimiser les performances.",
    },
    {
      title: "Intégration cloud et solutions hybrides",
      description:
        "Mise en place d’infrastructures évolutives et flexibles via le cloud pour faciliter la collaboration et la gestion des ressources.",
    },
    {
      title: "Support technique et maintenance proactive",
      description:
        "Assistance continue et surveillance des systèmes pour minimiser les interruptions et garantir un fonctionnement fluide.",
    },
  ];

  return (
    <div className="banner-kiosk">
      <Swiper
        modules={[Pagination]}
        spaceBetween={10}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="banner-card">
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerKiosk;
