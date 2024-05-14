"use client"
import React from 'react'
import styles from "./gallery.module.scss"
import Image from 'next/image';
import SliderMobile from "./foto-gallery/SliderMobile";
import VideoSliderMobile from "./video-gallery/SliderMobile";

const Index = () => {
  return (
    <div className={styles.gallery}>
      <div className={styles.container}>
        <div className={styles.gallery__wrapper}>
          <div className={styles.gallery__foto}>
            <div className={styles.foto__top}>
              <h6 className={styles.foto__title}>
                galerie
                <br />
                foto
              </h6>
              <button type="button" className={styles.foto__view_button}>
                Vezi toate
              </button>
            </div>
            <div className={styles.foto__inner}>
              <img
                src={"/static/gallery/gallery-foto-2.png"}
                className={styles.video__item}
              />
              <Image
                src={"/static/gallery/gallery-foto-2.png"}
                width={276}
                height={220}
                priority="true"
                quality={100}
                className={styles.video__item}
                alt="post description"
              />
            </div>
          </div>

          <div className={styles.gallery__video}>
            <div className={styles.video__top}>
              <h6 className={styles.video__title}>
                galerie
                <br />
                video
              </h6>
              <button type="button" className={styles.video__view_button}>
                Vezi toate
              </button>
            </div>
            <div className={styles.video__inner}>
              <button
                type="button"
                className="w-[54rem] h-[54rem] bg-[#f0f0f0] rounded-full absolute top-[50%] left-[20%] -translate-x-[20%] -translate-y-[50%] z-[1] sh"
              >
                <svg
                  width="21.000000"
                  height="21.000000"
                  className="absolute top-1/2 left-[60%] z-[2] -translate-x-[60%] -translate-y-1/2"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <desc>Created with Pixso.</desc>
                  <defs />
                  <path
                    id="Polygon 1"
                    d="M20.53 9.76L-0.93 -0.63L-0.93 20.16L20.53 9.76Z"
                    fill="#B41E1E"
                    fillOpacity="1.000000"
                    fillRule="evenodd"
                  />
                </svg>
              </button>
              <Image
                src={"/static/gallery/gallery-foto-2.png"}
                width={276}
                height={220}
                priority="true"
                quality={100}
                className={styles.video__item}
                alt="post description view"
              />
              <button type="button" className={styles.video__plyer_button}>
                <svg
                  width="21.000000"
                  height="21.000000"
                  className="absolute top-1/2 left-[60%] z-[2] -translate-x-[60%] -translate-y-1/2"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <desc>Created with Pixso.</desc>
                  <defs />
                  <path
                    id="Polygon 1"
                    d="M20.53 9.76L-0.93 -0.63L-0.93 20.16L20.53 9.76Z"
                    fill="#B41E1E"
                    fillOpacity="1.000000"
                    fillRule="evenodd"
                  />
                </svg>
              </button>
              <Image
                src={"/static/gallery/gallery-foto-2.png"}
                width={276}
                height={220}
                priority="true"
                quality={100}
                className={styles.video__item}
                alt="post description 1"
              />
            </div>
          </div>
        </div>

        <div className={styles.gallery__mobile}>
          <div className={styles.foto__top}>
            <h6 className={styles.foto__title}>
              galerie
              <br />
              foto
            </h6>
            <button type="button" className={styles.foto__view_button}>
              Vezi toate
            </button>
          </div>
          <SliderMobile />
          <button type="button" className={styles.video__view_button__mob}>
            Vezi toate
          </button>
          <div className={styles.video__top}>
            <h6 className={styles.video__title}>
              galerie
              <br />
              video
            </h6>
            <button type="button" className={styles.video__view_button}>
              Vezi toate
            </button>
          </div>
          <VideoSliderMobile />
          <button type="button" className={styles.video__view_button__mob}>
            Vezi toate
          </button>
        </div>
      </div>
    </div>
  );
}

export default Index