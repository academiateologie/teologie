"use client";
import React from "react";
import styles from "./desktop.public.module.scss";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { collection } from "../../../db";
import { CldImage } from "next-cloudinary";

export default function SliderMobile() {
  const [activeIdx, setActiveIdx] = React.useState(null);

  React.useEffect(() => {
    const addNewClassName = () => {
      let element = document.querySelector(
        ".desktop_public_posts__gallery__UNQnC .swiper-pagination-current"
      );
      return element.classList.add("content-none");
    };

    const removeNewClassName = () => {
      let element = document.querySelector(
        ".desktop_public_posts__gallery__UNQnC .swiper-pagination-current"
      );
      return element.classList.remove("content-none");
    };

    if (activeIdx > 8) {
      console.log("activeIdx is true");
      addNewClassName();
    } else {
      console.log("activeIdx is false");
      removeNewClassName();
    }
  }, [activeIdx]);

  const pagination = {
    clickable: false,
    type: "fraction",
  };

  return (
    <motion.div
      className={styles.publications__posts}
      initial={{ opacity: 0 }}
      animate={{ opacity: collection.length > 0 ? 1 : 0 }}
      transition={{ duration: 1 }}
    >
      <div className={styles.posts__gallery}>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          navigation={true}
          pagination={pagination}
          modules={[Navigation, Pagination]}
          className={"mt-0 posts h-[400rem] w-full relative bg-transparent"}
          onSlideChange={(swiperCore) => {
            const { activeIndex, snapIndex, previousIndex, realIndex } =
              swiperCore;
            setActiveIdx(activeIndex);
          }}
        >
          {collection.map((url, idx) => (
            <SwiperSlide key={idx}>
              <CldImage
                src={url}
                className="w-full h-[316rem] object-cover"
                width={370}
                height={316}
                alt={`post collection photo ${url}`}
                quality={100}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.div>
  );
}
