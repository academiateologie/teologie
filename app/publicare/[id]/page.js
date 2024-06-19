import styles from "./post.module.scss";
import Header from "../../components/header-about";
import Footer from "../../components/footer";
import GalleryMob from "../gallery-mobile";
import { h__posts } from "../../db";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import PrevLink from "../prev-button";
import NextLink from "../next-button";

export async function generateStaticParams() {
  return h__posts.map((post) => ({
    id: post.id,
  }));
}

export default async function PostPage({ params }) {
  const post = h__posts.find((post) => post.id === params.id);

  if (!post) {
    return notFound();
  }

  const postIndex = h__posts.findIndex((p) => p.id === post.id);
  const prevPost = h__posts[postIndex - 1] || null;
  const nextPost = h__posts[postIndex + 1] || null;

  return (
    <>
      <Header />
      <div className={styles.post}>
        <div className={styles.post__container}>
          <div className={styles.post__img}>
            <Image
              src={post.post_img}
              fill
              sizes="(min-width: 600px) 50vw, 100vw"
              style={{
                objectFit: "cover",
              }}
              alt={"post view title"}
              priority="true"
              quality={100}
            />
          </div>
          <div className={styles.post__bottom_line}>
            <div className={styles.post__navigate}>
              <PrevLink
                href={`/publicare/${prevPost?.id}`}
                disabled={!prevPost}
              />

              <p className={styles.post__navigate_date}>{post.date_created}</p>

              <NextLink
                href={`/publicare/${nextPost?.id}`}
                disabled={!nextPost}
              />
            </div>
            <p className={styles.post__slug}>ORTODOXIE</p>
          </div>
          <h4 className={styles.post__title}>{post.text_title}</h4>
          <p className={styles.post__description_bold}>{post.text_subtitle}</p>

          {post.id === "664c617d92b21a28ad10e8db" ? (
            <>
              <p className="text-[18rem] font-bold text-center mt-[30rem]">
                Proces-verbal NR. 008
              </p>
              <p className="text-[18rem] font-bold text-center mt-[30rem]">
                din 23 aprilie 2024
              </p>
            </>
          ) : (
            ""
          )}

          <div>
            {post.description_text.map((p, idx) => (
              <p className={styles.post__description} key={idx}>
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div
        className={
          post.post_img_collection.length <= 1 ? "hidden" : styles.post__gallery
        }
      >
        <div className={styles.post__container}>
          <div className={styles.post__gallery_inner}>
            {post.post_img_collection.map((pi, idx) => (
              <div key={pi} className="relative w-[280rem] h-[222rem]">
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
            ))}
          </div>
          <GalleryMob img__coll={post.post_img_collection} />
        </div>
      </div>
      <Footer />
    </>
  );
}
