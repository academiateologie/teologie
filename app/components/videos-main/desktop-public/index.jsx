"use client";
import React from "react";
import styles from "./desktop.public.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Grid, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/grid";

const Index = () => {

  const pagination = {
    type: "fraction",
    renderFraction: function (currentClass, totalClass) {
      
      return `<span class='${currentClass}'></span> / <span class=
        ${totalClass}></span>`;
    },
  };

  const pagination__mob = {
    clickable: false,
    type: "fraction",
    // renderFraction: function (currentClass, totalClass) {
    //   return (
    //     `<span className='${currentClass}.active'></span> / <span class="' +
    //     ${totalClass}></span>`
    //   );
    // },
  };

  return (
    <>
      <div className={styles.publications__posts}>
        <div className={styles.posts__gallery}>
          <Swiper
            spaceBetween={10}
            centeredSlides={false}
            grabCursor={false}
            observer={true}
            observeParents={true}
            parallax={true}
            keyboard={{
              enabled: true,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 40,
                pagination: pagination__mob,
                grid: {
                  fill: "column",
                  column: 1,
                  rows: 1,
                },
              },
              601: {
                slidesPerView: 3,
                slidesPerGroup: 1,
                grid: {
                  fill: "row",
                  rows: 3,
                },
              },
            }}
            pagination={pagination}
            navigation={true}
            modules={[Navigation, Pagination, Grid, Autoplay]}
            className="mt-0 w-[94vw] tablet:w-full tablet:mt-[40rem] h-[260rem] tablet:h-full tablet:pb-[40rem] relative bg-transparent"
          >
            <SwiperSlide>
              <div className="flex object-cover h-[260rem] w-full tablet:w-[370rem] tablet:h-[280rem]">
              <iframe
                src="https://res.cloudinary.com/dkkozauci/video/upload/v1717421063/fb-teologie-video_dr687s.mp4"
                height="100%"
                width="100%"
                style={{
                  position: "absolute",
                  backgroundPositionX: "center",
                  objectFit: "cover",
                }}
                allowFullScreen
              ></iframe>
              </div>
            </SwiperSlide>
           
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Index;
