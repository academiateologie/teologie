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

const  Index = ({posts}) => {
    const [isHover, setIsHover] = React.useState(false);
    const [onButton, setOnButton] = React.useState(null);
    const [isSlideActive, setIsSlideActive] = React.useState(0)
    console.log("isSlideActive ", isSlideActive);
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
              spaceBetween: 0,
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
          className="mt-0 w-full tablet:mt-[40rem] h-[550rem] relative bg-transparent"
          // onSwiper={(swiper) => setIsSlideActive(swiper.activeIndex)}
          // onChange={(swiper) => setIsSlideActive(swiper.activeIndex())}
        >
          {posts.map((post) => (
            <SwiperSlide key={post.id}>
              <motion.a
                href={`/publicari/${post.title}`}
                onClick={() => console.log(post.id)}
              >
                <div className={styles.publications__post__item}>
                  {isHover && onButton === post.id && (
                    <button type="button" className={styles.on__hover_button}>
                      mai mult
                    </button>
                  )}
                  <img
                    src={post.post__img}
                    className="w-full h-[256rem]"
                    alt={post.description}
                  ></img>
                  <div className={styles.post__description}>
                    <span className={styles.post__slug}>{post.slug}</span>
                    <p className={styles.post__text}>{post.description}</p>
                    <p className={styles.post__date_created}>
                      {post.date__created}
                    </p>
                  </div>
                </div>
              </motion.a>
            </SwiperSlide>
          ))}
          <div className={styles.navigate__counter}>
            <p className={styles.counter__all_items}>0{posts.length} /</p>
            <p className={styles.counter__current_item}> 0{posts.length}</p>
          </div>
        </Swiper>
      </div>
    </div>
  );
}

export default Index