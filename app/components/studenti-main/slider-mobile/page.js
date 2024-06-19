"use client"
import React from "react";
import styles from "./slider.mobile.module.scss";
import { motion } from "framer-motion";
import PersonImg from "../../../../public/static/about/person-about/person-about-1.webp"

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Keyboard,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

const persons = [
  {
    id: 1,
    personName: "ÎPS VLADIMIR",
    personDescription:
      "Mitropolit al Chişinăului şi al Întregii Moldove Rector al Academiei de Teologie Ortodoxă din Moldova",
    personImage: "/static/about/person-about/person-about-1.webp",
  },
  {
    id: 2,
    personName: "Arhim. Nectarie (GHERMAN)",
    personDescription:
      "Prorector pentru studii",
    personImage: "/static/about/person-about/person-about-2.webp",
  },
  {
    id: 3,
    personName: "Nicolae Ionichi",
    personDescription:
      "Prorector pentru management instituțional",
    personImage: "/static/about/person-about/person-about-3.webp",
  },
  {
     id: 4,
    personName: "Ierom. Macarie (Crudu)",
    personDescription:
      "Decan al Facultății de Teologie Ortodoxă",
    personImage: "/static/about/person-about/person-about-4.webp",
  },
];

export default function SliderMobile() {
  const [isHover, setIsHover] = React.useState(false);
  const [onButton, setOnButton] = React.useState(null);

   const pagination = {
     clickable: false,
     type: "fraction",
     renderFraction: function (currentClass, totalClass) {
       return (
         '<span class="' +
         currentClass +
         '"></span>' +
         " / " +
         '<span class="' +
         totalClass +
         '"></span>'
       );
     },
   };

  return (
    <div className={styles.publications__posts}>
      <div className={styles.posts__gallery}>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          centeredSlides={false}
          slidesPerGroupSkip={1}
          grabCursor={true}
          keyboard={{
            enabled: true,
          }}
          scrollbar={true}
          navigation={true}
          pagination={pagination}
          modules={[Keyboard, Scrollbar, Navigation, Pagination]}
          className="mt-0 posts h-[660rem] w-full relative bg-transparent"
        >
          {persons.map((person) => (
            <SwiperSlide key={person.id}>
              <div className={styles.publications__post__item}>
                <motion.img
                  src={person.personImage}
                  width="100%"
                  height="100%"
                  className={styles.post__image}
                  onHoverEnd={() => setIsHover(false)}
                ></motion.img>
                <div className={styles.item__description}>
                  <p className={styles.description__name}>{person.personName}</p>
                  <p className={styles.description__text}>
                    {person.personDescription}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
          {/* <div className={styles.navigate__counter}>
            <span className={styles.counter__all_items}>0{persons.length}</span>
            <span className="text-[#CF4A47] text-[14rem] font-bold mx-[4rem]">
              /
            </span>
            <span className={styles.counter__current_item}> 04</span>
          </div> */}
        </Swiper>
      </div>
    </div>
  );
}
