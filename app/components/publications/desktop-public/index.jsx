"use client"
import React from 'react'
import styles from "./desktop.public.module.scss"
import { motion } from 'framer-motion';

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

    const inner__posts = posts.slice(0, 6);

  return (
    <div className={styles.publications__posts}>
      <div className={styles.posts__gallery}>
        <Swiper
          slidesPerView={3}
          spaceBetween={10}
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
            },
          }}
          scrollbar={true}
          navigation={true}
          pagination={false}
          modules={[Keyboard, Scrollbar, Navigation, Pagination]}
          className="mt-0 w-full tablet:mt-[40rem] h-[550rem] relative bg-transparent"
        >
          {inner__posts.map((post) => {
            return (
              <SwiperSlide key={post.id}>
                <div
                >
                  <motion.div
                    className={styles.publications__post__item}
                    onHoverStart={() => {
                      setIsHover(true);
                      setOnButton(post.id);
                    }}
                    onHoverEnd={() => {
                      setIsHover(false);
                    }}
                  >
                    {isHover && onButton === post.id && (
                      <Link
                        href={`/publicare/${post.id}`}
                        className={styles.on__hover_button}
                      >
                        mai mult
                      </Link>
                    )}
                    {isHover && onButton === post.id && (
                      <span className={styles.on__hover_blur}></span>
                    )}
                    <img
                      src={post.post_img}
                      className="w-full h-[256rem]"
                      alt={post.description}
                    ></img>
                    <div className={styles.post__description}>
                      <span className={styles.post__slug}>
                        {post.slug_text}
                      </span>
                      <p className={styles.post__text}>{post.text_title}</p>
                      <p className={styles.post__date_created}>
                        {post.date_created}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </SwiperSlide>
            );
          })}
          <div className={styles.navigate__counter}>
            <p className={styles.counter__all_items}>
              0{inner__posts.length} /
            </p>
            <p className={styles.counter__current_item}>
              {" "}
              0{inner__posts.length}
            </p>
          </div>
        </Swiper>
      </div>
    </div>
  );
}

export default Index