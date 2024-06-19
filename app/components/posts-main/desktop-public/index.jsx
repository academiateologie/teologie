"use client"
import React from 'react'
import styles from "./desktop.public.module.scss"
import Image from 'next/image';
import { motion } from 'framer-motion';
import { h__posts } from "../../../db";
// import { posts } from "../../../db";
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation,
  Pagination,
  Grid
} from "swiper/modules";

import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/grid";
import Link from 'next/link';
import { relative } from 'path';

const Index = () => {
    const [isHover, setIsHover] = React.useState(false);
    const [onButton, setOnButton] = React.useState(null);

    const pagination = {
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    };

    const pagination__mob = {
      clickable: false,
      type: "fraction",
      renderFraction: function (currentClass, totalClass) {
        return (
          '<span class="' + currentClass + '"></span>' +
          " / " 
          + '<span class="' + totalClass + '"></span>'
        );
      },
    };

  return (
    <div className={styles.publications__posts}>
      <div className={styles.posts__gallery}>
        <Swiper
          slidesPerView={3}
          grid={{
            fill: "row",
            rows: 3,
            columns: 3,
          }}
          spaceBetween={10}
          centeredSlides={false}
          grabCursor={false}
          keyboard={{
            enabled: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              slidesPerGroup: 1,
              spaceBetween: 0,
              pagination: pagination__mob,
            },
            601: {
              slidesPerView: 3,
              slidesPerGroup: 1,
            },
          }}
          scrollbar={false}
          pagination={pagination}
          navigation={true}
          modules={[Navigation, Pagination, Grid]}
          className="mt-0 pl-[20rem] tablet:w-full tablet:mt-[40rem] h-[540rem] tablet:h-auto tablet:pb-[40rem] relative bg-transparent"
        >
          {h__posts.map((post) => (
            <SwiperSlide key={post.id}>
              <Link href={`/publicare/${post.id}`}>
                <motion.div
                  onHoverStart={() => {
                    setIsHover(true);
                    setOnButton(post.id);
                  }}
                  onHoverEnd={() => {
                    setIsHover(false);
                  }}
                >
                  <div className={styles.publications__post__item}>
                    {isHover && onButton === post.id && (
                      <div className={styles.on__hover_button}>mai mult</div>
                    )}
                    {isHover && onButton === post.id && (
                      <span className={styles.on__hover_blur}></span>
                    )}

                    <Image
                      className="w-[160rem] h-[130rem] tablet:w-full tablet:h-[256rem] flex"
                      alt={post.post_img}
                      width="160"
                      height="130"
                      src={post.post_img}
                      sizes="(min-width: 600px) 50vw, 100vw"
                      priority="true"
                      quality={100}
                    />
                    <div className={styles.post__description}>
                      <span className={styles.post__slug}>
                        {post.slug_text}
                      </span>
                      <p className={styles.post__text}>{post.text_title}</p>
                      <p className={styles.post__date_created}>
                        {post.date_created}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Index
