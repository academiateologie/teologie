"use client";
import React from "react";
import Link from "next/link";
import styles from "./gallery.module.scss";
import Image from "next/image";
import SliderMobile from "./foto-gallery/SliderMobile";
import VideoSliderMobile from "./foto-video/SliderMobile";
import { useMediaQuery } from "react-responsive";
import dynamic from "next/dynamic";

const SliderComponent = dynamic(() => import("./foto-gallery/SliderMobile"), {
  ssr: true,
});

const Index = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  const isDesktop = useMediaQuery({
    query: "(min-width: 600px)",
  });

  React.useEffect(() => {
    if (!isDesktop) {
      setIsMobile(!isMobile);
    } else {
      setIsMobile(!isMobile);
    }
  }, [isDesktop]);

  return (
    <div className={styles.gallery}>
      <div className={styles.container}>
        <div className={styles.gallery__wrapper}>
          <div className={styles.gallery__foto}>
            <div className={styles.foto__top}>
              <h6 className={styles.foto__title}>galerie foto</h6>
              <Link href={"/galerie-foto"} className={styles.foto__view_button}>
                Vezi toate
              </Link>
            </div>
            {isMobile && (
              <div className={styles.foto__inner}>
                <Image
                  src="https://res.cloudinary.com/dkkozauci/image/upload/v1718788200/home-posts/3-3_b0zfsi.webp"
                  width={276}
                  height={220}
                  className="w-full h-[220rem] object-cover"
                  quality={100}
                  alt="post description"
                />
                <Image
                  src="https://res.cloudinary.com/dkkozauci/image/upload/v1718788200/home-posts/3-2_qwxb5g.webp"
                  width={276}
                  height={220}
                  className="w-full h-[220rem] object-cover"
                  quality={100}
                  alt="post description"
                />
              </div>
            )}
          </div>

          <div className={styles.gallery__video}>
            <div className={styles.video__top}>
              <h6 className={styles.video__title}>galerie video</h6>
              <Link
                href={"/galerie-video"}
                className={styles.foto__view_button}
              >
                Vezi toate
              </Link>
            </div>
            <div className={styles.video__inner}>
              {/* <iframe
                src="https://res.cloudinary.com/dkkozauci/video/upload/v1717421063/fb-teologie-video_dr687s.mp4"
                height="100%"
                width="100%"
                style={{
                  position: "absolute",
                  backgroundPositionX: "center",
                  objectFit: "cover",
                }}
                allowFullScreen
              ></iframe> */}
            </div>
          </div>
        </div>

        <div className={styles.gallery__mobile}>
          <div className={styles.foto__top}>
            <h6 className={styles.foto__title}>galerie foto</h6>
            <Link href={"/galerie-foto"} className={styles.foto__view_button}>
              Vezi toate
            </Link>
          </div>
          {isMobile && <SliderComponent />}
          <Link
            href={"/galerie-foto"}
            className={styles.video__view_button__mob}
          >
            Vezi toate
          </Link>
          <div className={styles.video__top}>
            <h6 className={styles.video__title}>galerie video</h6>
            <button type="button" className={styles.video__view_button}>
              Vezi toate
            </button>
          </div>
          {/* {isMobile && <VideoSliderMobile />} */}

          <Link
            href={"/galerie-video"}
            className={styles.video__view_button__mob}
          >
            Vezi toate
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
