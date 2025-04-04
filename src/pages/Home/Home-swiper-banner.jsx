import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const BannerKiosk = () => {
  const slides = [
    {
      title: "Développement Web sur Mesure",
      description:
        "Nous concevons et développons des sites web modernes, performants et évolutifs, parfaitement adaptés à vos besoins. Que ce soit un site vitrine, un e-commerce ou une application web, nous utilisons les dernières technologies pour garantir une expérience utilisateur optimale et une sécurité renforcée.",
    },
    {
      title: "Hébergement Web et Maintenance",
      description:
        "Nous proposons des solutions d’hébergement sécurisées et performantes pour assurer la disponibilité et la rapidité de votre site ou application. Notre service inclut des mises à jour régulières, des sauvegardes automatiques et une surveillance proactive pour prévenir toute interruption de service.",
    },
    {
      title: "Intégration cloud et solutions hybrides",
      description:
        "Optimisez votre infrastructure avec des solutions cloud flexibles et sécurisées. Nous vous accompagnons dans la migration de vos services vers le cloud, l’intégration d’environnements hybrides et la gestion de vos ressources numériques pour une collaboration fluide et une meilleure productivité.",
    },
    {
      title: "Support technique et maintenance proactive",
      description:
        "Bénéficiez d’un support technique réactif et d’une maintenance continue pour garantir le bon fonctionnement de vos systèmes informatiques. Nos experts surveillent et anticipent les éventuels problèmes pour minimiser les interruptions et assurer la pérennité de vos infrastructures.",
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
