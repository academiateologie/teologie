import React from "react";
import styles from "./desktop.public.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { collection } from "../../../db";

export default function SliderMobile() {

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
        >
          {collection.map((url, idx) => (
            <SwiperSlide key={idx}>
                <Image
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
;
