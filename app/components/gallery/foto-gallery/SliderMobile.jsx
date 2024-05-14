import React from "react";
import styles from "./desktop.public.module.scss";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
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

const posts = [
  {
    id: 1,
    postTitle: "",
    postText:
      "Preasfințitul Filaret de Căpriana a vizitat Academia de Teologie Ortodoxă din Moldova",
    postDate: "21 DEC 2023",
    postSlug: "ORTODOXIE",
    postImage: "/static/publications/post-img.png",
  },
  {
    id: 2,
    postTitle: "",
    postText:
      "Sfânta Ecaterina, ocrotitoarea studenților, a fost cinstită la Biserica Academiei de Teologie Ortodoxă ...",
    postDate: "7 FEB 2024",
    postSlug: "ORTODOXIE",
    postImage: "/static/publications/post-img.png",
  },
  {
    id: 3,
    postTitle: "",
    postText:
      "Întâlniri duhovnicești la ATOM: Cunoscutul teolog Danion Vasile le-a vorbit studenților despre rugăciune",
    postDate: "21 DEC 2023",
    postSlug: "ORTODOXIE",
    postImage: "/static/publications/post-img.png",
  },
];

export default function SliderMobile() {
  const [isHover, setIsHover] = React.useState(false);
  const [onButton, setOnButton] = React.useState(null);
  return (
    <div className={styles.publications__posts}>
      <div className={styles.posts__gallery}>
        <Swiper
          slidesPerView={3}
          spaceBetween={36}
          centeredSlides={false}
          slidesPerGroupSkip={1}
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
          scrollbar={true}
          navigation={true}
          pagination={false}
          modules={[Keyboard, Scrollbar, Navigation, Pagination]}
          className="mt-0 posts tablet:mt-[40rem] h-[400rem] tablet:h-[550rem] w-full relative bg-transparent"
        >
          {posts.map((post) => (
            <SwiperSlide key={post.id}>
              <div className={styles.publications__post__item}>
                {isHover && onButton === post.id && (
                  <button type="button" className={styles.on__hover_button}>
                    mai mult
                  </button>
                )}
                <motion.img
                  src={post.postImage}
                  width="100%"
                  height="100%"
                  className={styles.post__image}
                  onHoverStart={() => {
                    setIsHover(true);
                    setOnButton(post.id);
                  }}
                  onHoverEnd={() => setIsHover(false)}
                ></motion.img>
                {/* <div className={styles.post__description}>
                  <span className={styles.post__slug}>{post.postSlug}</span>
                  <p className={styles.post__text}>{post.postText}</p>
                  <p className={styles.post__date_created}>{post.postDate}</p>
                </div> */}
              </div>
            </SwiperSlide>
          ))}
          <div className={styles.navigate__counter}>
            <span className={styles.counter__all_items}>0{posts.length}</span>
            <span className="text-[#CF4A47] text-[14rem] font-bold mx-[4rem]">/</span>
            <span className={styles.counter__current_item}> 04</span>
          </div>
        </Swiper>
      </div>
    </div>
  );
}
