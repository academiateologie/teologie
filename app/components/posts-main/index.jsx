"use client";
import React from "react";
import styles from "./publications.module.scss";
import DesktopPublic from "./desktop-public";
// import { client } from "../../../sanity/lib/client";
import {posts} from "../../db"
import Link from "next/link";

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
  // const posts = []

  return (
    <div className={styles.posts__main}>
      <div className={styles.container}>
        <DesktopPublic posts={...posts} />
      </div>
    </div>
  );
};

export default Index;
