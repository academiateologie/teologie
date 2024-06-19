import React from "react";
import styles from "./desktop.public.module.scss";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useSwiper } from "swiper/react";
import { collection } from "../../../db";

export default function SliderMobile() {

  const pagination = {
    clickable: false,
    type: "fraction",
  };
  return (
    <motion.div
      className={styles.publications__posts}
      initial={{ opacity: 0 }}
      animate={{ opacity: collection.length > 0 ? 1 : 0 }}
      transition={{ duration: 2 }}
    >
      <div className={styles.posts__gallery}>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          navigation={true}
          pagination={pagination}
          modules={[Navigation, Pagination]}
          className={"mt-0 posts h-[400rem] w-full relative bg-transparent"}
        >
          {collection
            .map((url, idx) => (
              <SwiperSlide key={idx}>
                <div className="flex w-full h-[316rem] relative overflow-hidden">
                  <img
                    src={url}
                    className="absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] object-fill"
                    alt={`post collection photo ${url}`}
                  ></img>
                </div>
              </SwiperSlide>
            ))}
          {/* <PrevSliderBtn />
          <NextSliderBtn /> */}
        </Swiper>
      </div>
    </motion.div>
  );
}

// const PrevSliderBtn = () => {
//   const swiper = useSwiper();
//   return (
//     <button
//       onClick={() => swiper.slidePrev()}
//       className="text-[30rem] w-[12rem] h-[21rem] absolute bottom-[36rem] left-[136rem] z-[11]"
//       // disabled={swiper.disable === imgCollectionArray}
//     >
//       <svg
//         width="100%"
//         height="100%"
//         viewBox="0 0 7 11"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path
//           d="M0.757479 5.92962L5.61789 10.8245C5.73021 10.9379 5.88028 11.0002 6.04033 11.0002C6.20038 11.0002 6.35044 10.9379 6.46277 10.8245L6.82083 10.4641C7.0537 10.2294 7.0537 9.8475 6.82083 9.6132L2.73938 5.50259L6.82527 1.38751C6.9376 1.27416 6.99975 1.12325 6.99975 0.962054C6.99975 0.800858 6.9376 0.649724 6.82527 0.536372L6.46743 0.175973C6.35488 0.0626216 6.20504 0.00024421 6.04499 0.000244224C5.88494 0.000244238 5.73487 0.0626217 5.62255 0.175973L0.757701 5.07534C0.644932 5.18892 0.58322 5.34073 0.583442 5.50215C0.582998 5.66401 0.64471 5.81604 0.757479 5.92962Z"
//           fill="#272B37"
//         />
//       </svg>
//     </button>
//   );
// };

// const NextSliderBtn = () => {
//   const swiper = useSwiper();
//   return (
//     <button
//       onClick={() => swiper.slideNext()}
//       className="text-[30rem] w-[12rem] h-[21rem] absolute bottom-[36rem] right-[136rem] z-[11]"
//     >
//       <svg
//         width="100%"
//         height="100%"
//         viewBox="0 0 7 11"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path
//           d="M6.24228 5.07087L1.38187 0.175972C1.26954 0.0626209 1.11948 0.000244141 0.959428 0.000244141C0.799375 0.000244141 0.649312 0.0626209 0.536987 0.175972L0.178922 0.536371C-0.0539428 0.771123 -0.0539428 1.15298 0.178922 1.38729L4.26038 5.4979L0.174482 9.61298C0.0621564 9.72633 0 9.87724 0 10.0384C0 10.1996 0.0621564 10.3508 0.174482 10.4641L0.532325 10.8245C0.644872 10.9379 0.794714 11.0002 0.954766 11.0002C1.11482 11.0002 1.26488 10.9379 1.37721 10.8245L6.24205 5.92514C6.35482 5.81157 6.41654 5.65976 6.41631 5.49834C6.41676 5.33648 6.35482 5.18467 6.24205 5.0711L6.24228 5.07087Z"
//           fill="#272b37"
//         />
//       </svg>
//     </button>
//   );
// };
