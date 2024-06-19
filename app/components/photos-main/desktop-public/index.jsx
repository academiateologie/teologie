"use client";
import React from "react";
import styles from "./desktop.public.module.scss";
import Image from "next/image";
import Head from "next/head";
import { collection } from "../../../db";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Grid } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/grid";

const Index = () => {
  const pagination = {
    type: "fraction",
    renderFraction: function (currentClass, totalClass) {
      return `<span class='${currentClass}'></span> / <span class=
        ${totalClass}></span>`;
    },
  };

  const pagination__mob = {
    clickable: false,
    type: "fraction",
  };
  
  return (
    <>
      <div className={styles.publications__posts}>
        <div className={styles.posts__gallery}>
          <Swiper
            spaceBetween={10}
            centeredSlides={false}
            breakpoints={{
              320: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 40,
                pagination: pagination__mob,
                grid: {
                  fill: "column",
                  column: 1,
                  rows: 2,
                },
              },
              601: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                grid: {
                  fill: "column",
                  column: 3,
                  rows: 3,
                },
              },
            }}
            pagination={pagination}
            navigation={true}
            modules={[Navigation, Pagination, Grid]}
            className="mt-0 w-[94vw] tablet:w-full tablet:mt-[40rem] h-[640rem] tablet:h-[1000rem] tablet:pb-[40rem] relative bg-transparent"
          >
            {collection.map((url, index) => (
              <SwiperSlide key={index}>
                <div className="h-[260rem] w-full tablet:w-[370rem] tablet:h-[280rem] overflow-hidden">
                  <Image
                    className="h-full w-full object-cover"
                    alt={url}
                    width={0}
                    height={0}
                    src={url}
                    sizes="(min-width: 600px) 50vw, 100vw"
                    quality={100}
                    loading={"lazy"}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Index;
