import React from "react";
import styles from "./desktop.public.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function SliderMobile() {


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
          grabCursor={false}
          navigation={true}
          pagination={pagination}
          modules={[Navigation, Pagination]}
          className="mt-0 posts h-[300rem] w-full relative bg-transparent"
        >
          <SwiperSlide>
            <div className="flex w-full h-[256rem] relative overflow-hidden">
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
  );
}
