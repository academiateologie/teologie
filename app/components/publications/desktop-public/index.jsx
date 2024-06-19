"use client"
import React from 'react'
import styles from "./desktop.public.module.scss"
import { motion } from 'framer-motion';
import { useMediaQuery } from "react-responsive";

import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";

const Index = ({ home__posts }) => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 600px)",
  });

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
    <motion.div
      className={styles.publications__posts}
      initial={{ opacity: 0 }}
      animate={{ opacity: home__posts.length > 0 ? 1 : 0 }}
      transition={{ duration: 2 }}
    >
      <div className={styles.posts__gallery}>
        <Swiper
          slidesPerView={3}
          spaceBetween={10}
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
          pagination={pagination}
          modules={[Scrollbar, Navigation, Pagination]}
          className="mt-0 w-full tablet:mt-[40rem] h-[550rem] relative bg-transparent"
        >
          {home__posts.map((post) => {
            return (
              <SwiperSlide key={post.id}>
                <motion.a
                  href={`/publicare/${post.id}`}
                  className={styles.publications__post__item}
                  onHoverStart={
                    isDesktop
                      ? () => {
                          setIsHover(true), setOnButton(post.id);
                        }
                      : null
                  }
                  onHoverEnd={() => {
                    setIsHover(false);
                  }}
                >
                  {isDesktop && isHover && onButton === post.id && (
                    <div className={styles.on__hover_button}>mai mult</div>
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
                    <span className={styles.post__slug}>{post.slug_text}</span>
                    <span className={styles.post__text}>{post.text_title}</span>
                    <span className={styles.post__date_created}>
                      {post.date_created}
                    </span>
                  </div>
                </motion.a>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </motion.div>
  );
};

export default Index