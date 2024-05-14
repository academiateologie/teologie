// "use client"
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
  Grid
} from "swiper/modules";

import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/grid";
import Link from 'next/link';

const Index = ({posts}) => {
    const [isHover, setIsHover] = React.useState(false);
    const [onButton, setOnButton] = React.useState(null);

     const pagination = {
       clickable: true,
       renderBullet: function (index, className) {
         return '<span className="text-black text-[20rem] ' + className + '">' + (index + 1) + "</span>";
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
          spaceBetween={80}
          centeredSlides={false}
          grabCursor={true}
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
          scrollbar={false}
          navigation={true}
          pagination={pagination}
          modules={[Keyboard, Scrollbar, Navigation, Pagination, Grid]}
          className="mt-0 w-full tablet:mt-[40rem] h-[1460rem] pb-[40rem] relative bg-transparent"
        >
          {posts.map((post) => (
            <>
              <SwiperSlide key={post.id}>
                <motion.div
                  onClick={() => console.log(post.title)}
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
                      <Link
                        href={`/publicare/${post.id}`}
                        className={styles.on__hover_button}
                      >
                        mai mult
                      </Link>
                    )}
                    <img
                      src={post.post__img}
                      className="w-full h-[256rem]"
                      alt={post.slug}
                    ></img>
                    <div className={styles.post__description}>
                      <span className={styles.post__slug}>{post.slug}</span>
                      <p className={styles.post__text}>{post.description}</p>
                      <p className={styles.post__date_created}>
                        {post.date__created}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
              {/* <SwiperSlide key={post.description}>
                <a
                  href={`/${post.slug}`}
                  onClick={() => console.log(post.slug)}
                >
                  <div className={styles.publications__post__item}>
                    {isHover && onButton === post.id && (
                      <button type="button" className={styles.on__hover_button}>
                        mai mult
                      </button>
                    )}
                    <img
                      src={post.image}
                      className="w-full h-[256rem]"
                      alt={post.textSlug}
                    ></img>
                    <div className={styles.post__description}>
                      <span className={styles.post__slug}>{post.textSlug}</span>
                      <p className={styles.post__text}>{post.description}</p>
                      <p className={styles.post__date_created}>
                        {post.publishedDate}
                      </p>
                    </div>
                  </div>
                </a>
              </SwiperSlide> */}
            </>
          ))}
          {/* <div className={styles.navigate__counter}>
            <p className={styles.counter__all_items}>0{posts.length} /</p>
            <p className={styles.counter__current_item}> 0{posts.length + 2}</p>
          </div> */}
        </Swiper>
      </div>
    </div>
  );
}

export default Index