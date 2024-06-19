import React from "react";
import styles from "./publications.module.scss";
import DesktopPublic from "./desktop-public";
import Link from "next/link";


const Index = ({ home__posts }) => {
  return (
    <div className={styles.publications}>
      <div className={styles.container}>
        <div className={styles.publications__top}>
          <h6 className={styles.publications__title}>Publicații recente</h6>
          <Link href={"/publicatii"} className={styles.publications__button}>
            Vezi toate
          </Link>
        </div>{" "}
        <DesktopPublic home__posts={home__posts} />
        <Link href="/publicatii" className={styles.publications__button_mob}>
          Vezi toate
        </Link>
      </div>
    </div>
  );
};

export default Index;
