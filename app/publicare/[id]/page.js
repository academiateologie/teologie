// "use client"
import styles from "./post.module.scss";
import Header from "../../components/header-about";
import Footer from "../../components/footer";
import GalleryMob from "../gallery-mobile";
import { posts } from "../../db";
import Image from "next/image";

export async function generateStaticParams() {
  return posts.map((item) => ({
    id: item.id,
  }));
}

export default async function PostPage({ params }) {
  const item = posts.find((item) => item.id === params.id);

  if (!item) {
    return <div>Item not found</div>;
  }
  // console.log("item ", item);

  return (
    <>
      <Header />
      <div className={styles.post}>
        <div className={styles.post__container}>
          <div className={styles.post__img}>
            {/* <img
              src={item.post_img}
              className="w-full h-full"
              alt="post view"
            /> */}
            <Image
              src={item.post_img}
              fill
              sizes="(min-width: 600px) 50vw, 100vw"
              style={{
                objectFit: "contain",
              }}
              alt={"post view title"}
              priority="true"
              quality={100}
            />
          </div>
          <div className={styles.post__bottom_line}>
            <div className={styles.post__navigate}>
              <button type="button" className={styles.post__navigate_preview}>
                <svg
                  className="w-[7rem] h-[12rem] tablet:w-[7rem] tablet:h-[12rem]"
                  viewBox="0 0 7 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.189872 6.46841L5.49242 11.8083C5.61497 11.932 5.77868 12 5.95329 12C6.12791 12 6.29162 11.932 6.41416 11.8083L6.8048 11.4151C7.05885 11.159 7.05885 10.7425 6.8048 10.4869L2.35206 6.00256L6.80964 1.51338C6.93219 1.38973 7 1.2251 7 1.04925C7 0.873397 6.93219 0.708522 6.80964 0.584866L6.41925 0.191703C6.29646 0.0680466 6.13299 -8.77878e-07 5.95838 -8.62613e-07C5.78377 -8.47348e-07 5.62005 0.0680467 5.49751 0.191703L0.190115 5.53647C0.0670866 5.66037 -0.000239435 5.82598 2.33667e-06 6.00207C-0.000481638 6.17866 0.0670867 6.34426 0.190115 6.46816L0.189872 6.46841Z"
                    fill="#272B37"
                  />
                </svg>
              </button>
              <p className={styles.post__navigate_date}>{item.date_created}</p>
              <button type="button" className={styles.post__navigate_next}>
                <svg
                  className="w-[7rem] h-[12rem] tablet:w-[7rem] tablet:h-[12rem]"
                  viewBox="0 0 7 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.81013 5.53159L1.50758 0.191703C1.38503 0.0680474 1.22132 0 1.04671 0C0.872094 0 0.708379 0.0680474 0.585836 0.191703L0.195198 0.584866C-0.05885 0.840958 -0.05885 1.25754 0.195198 1.51314L4.64794 5.99744L0.190354 10.4866C0.0678107 10.6103 0 10.7749 0 10.9508C0 11.1266 0.0678107 11.2915 0.190354 11.4151L0.58075 11.8083C0.703536 11.932 0.867008 12 1.04162 12C1.21623 12 1.37995 11.932 1.50249 11.8083L6.80989 6.46353C6.93291 6.33963 7.00024 6.17402 7 5.99793C7.00048 5.82134 6.93291 5.65574 6.80989 5.53184L6.81013 5.53159Z"
                    fill="#D9D9D9"
                  />
                </svg>
              </button>
            </div>
            <p className={styles.post__slug}>ORTODOXIE</p>
          </div>
          <h4 className={styles.post__title}>{item.text_title}</h4>
          <p className={styles.post__description_bold}>{item.text_subtitle}</p>
          <div>
            {item.description_text.map((p, idx) => (
              <p className={styles.post__description} key={idx}>
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.post__gallery}>
        <div className={styles.post__container}>
          <div className={styles.post__gallery_inner}>
            {item.post_img_collection.map((pi, idx) => (
              <div key={idx} className="relative w-[280rem] h-[222rem]">
                <Image
                  src={pi}
                  fill
                  sizes="(min-width: 808px) 50vw, 100vw"
                  style={{
                    objectFit: "cover",
                  }}
                  alt={"post images collection"}
                  priority="true"
                  quality={100}
                />
              </div>
              // <img
              // key={idx}
              //   src={pi}
              //   className="w-[280rem] h-[222rem] flex bg-cover bg-center"
              //   alt="post view"
              // />
            ))}
          </div>
          <GalleryMob item={item} />
        </div>
      </div>
      <Footer />
    </>
  );
}
