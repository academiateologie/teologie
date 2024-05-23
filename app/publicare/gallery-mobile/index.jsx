"use client"
import React from 'react'
import styles from "./desktop.public.module.scss"
import { motion } from 'framer-motion';
// import Link from 'next/link';
// import { client } from '../../../../sanity/lib/client';
// import urlForImage from "../../../../sanity/lib/image";
// import { useNextSanityImage } from "next-sanity-image";

import { Swiper, SwiperSlide } from 'swiper/react';
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
import Link from 'next/link';

const Index = ({item}) => {
    const [isHover, setIsHover] = React.useState(false);
    const [onButton, setOnButton] = React.useState(null);
    const [isSlideActive, setIsSlideActive] = React.useState(0)
    // console.log("isSlideActive ", isSlideActive);
  return (
    <div className={styles.publications__posts}>
      <div className={styles.posts__gallery}>
        <Swiper
          slidesPerView={3}
          spaceBetween={25}
          centeredSlides={false}
          slidesPerGroupSkip={1}
          grabCursor={false}
          keyboard={{
            enabled: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              slidesPerGroup: 1,
              spaceBetween: 20,
            },
            601: {
              slidesPerView: 3,
              slidesPerGroup: 1,
            },
          }}
          scrollbar={true}
          navigation={true}
          pagination={false}
          modules={[Keyboard, Scrollbar, Navigation, Pagination]}
          className="mt-0 w-full tablet:mt-[40rem] h-[745rem] relative bg-transparent"
        >
          <SwiperSlide>
            <motion.div>
              <div className={styles.publications__post__item}>
                {/* {isHover && onButton === post.id && (
                    <button type="button" className={styles.on__hover_button}>
                      mai mult
                    </button>
                  )} */}
                <img
                  src={"/static/gallery/gallery-foto-2.png"}
                  className="w-full h-[315rem]"
                  alt=""
                ></img>
                <img
                  src={"/static/gallery/gallery-foto-2.png"}
                  className="w-full h-[315rem]"
                  alt=""
                ></img>
              </div>
            </motion.div>
          </SwiperSlide>

          <SwiperSlide>
            <motion.div>
              <div className={styles.publications__post__item}>
                <img
                  src={"/static/gallery/gallery-foto-2.png"}
                  className="w-full h-[315rem]"
                  alt=""
                ></img>
                <img
                  src={"/static/gallery/gallery-foto-2.png"}
                  className="w-full h-[315rem]"
                  alt=""
                ></img>
              </div>
            </motion.div>
          </SwiperSlide>

          <SwiperSlide>
            <motion.div>
              <div className={styles.publications__post__item}>
                <img
                  src={"/static/gallery/gallery-foto-2.png"}
                  className="w-full h-[315rem]"
                  alt=""
                ></img>
                <img
                  src={"/static/gallery/gallery-foto-2.png"}
                  className="w-full h-[315rem]"
                  alt=""
                ></img>
              </div>
            </motion.div>
          </SwiperSlide>

          <SwiperSlide>
            <motion.div>
              <div className={styles.publications__post__item}>
                <img
                  src={"/static/gallery/gallery-foto-2.png"}
                  className="w-full h-[315rem]"
                  alt=""
                ></img>
                <img
                  src={"/static/gallery/gallery-foto-2.png"}
                  className="w-full h-[315rem]"
                  alt=""
                ></img>
              </div>
            </motion.div>
          </SwiperSlide>

          {/* <div className={styles.navigate__counter}>
            <p className={styles.counter__all_items}>0{posts.length} /</p>
            <p className={styles.counter__current_item}> 0{posts.length}</p>
          </div> */}
        </Swiper>
      </div>
    </div>
  );
}

export default Index