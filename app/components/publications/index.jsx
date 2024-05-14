"use client";
import React from "react";
import styles from "./publications.module.scss";
import DesktopPublic from "./desktop-public";
// import { client } from "../../../sanity/lib/client";
import Link from "next/link";
import {posts} from "../../db"

// export async function getData() {
//   const query = `*[_type == "post"] {
//     "image": image.asset->url,
//     textSlug,
//     description,
//     publishedDate,
//     "slug": slug.current
//   }`;
//   const posts = await client.fetch(query);

//   return posts;
// }
const Index = async () => {
  const publications__posts =posts.slice(0,6)

  return (
    <div className={styles.publications}>
      <div className={styles.container}>
        <div className={styles.publications__top}>
          <h6 className={styles.publications__title}>Publicații recente</h6>
          <Link href={'/publicatii'} className={styles.publications__button}>
            Vezi toate
          </Link>
        </div>{" "}
        <DesktopPublic posts={...publications__posts} />
        <Link href="/publicatii" className={styles.publications__button_mob}>
          Vezi toate
        </Link>
      </div>
    </div>
  );
};

export default Index;
