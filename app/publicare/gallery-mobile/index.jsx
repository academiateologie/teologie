"use client";
import React from "react";
import styles from "./desktop.public.module.scss";
import { motion } from "framer-motion";
// import { useMediaQuery } from "react-responsive";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Grid } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/grid";

const Index = ({ img__coll }) => {
  // const isMobile = useMediaQuery({
  //   query: "(max-width: 600px)",
  // });

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
          grid={{
            fill: "row",
            rows: 2,
            columns: 1,
          }}
          spaceBetween={10}
          centeredSlides={true}
          grabCursor={false}
          pagination={pagination}
          navigation={true}
          modules={[Navigation, Pagination, Grid]}
          className="mt-0 w-full h-full relative mb-[20rem] bg-transparent"
        >
          {img__coll.map((idx) => {

            return (
              <SwiperSlide key={idx}>
                <motion.div className="">
                  <img
                    src={idx}
                    className="w-[398rem] h-[300rem] flex object-cover"
                    alt={idx}
                  />
                </motion.div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Index;
