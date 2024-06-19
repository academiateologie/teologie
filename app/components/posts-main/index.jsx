import React from "react";
import styles from "./publications.module.scss";
import DesktopPublic from "./desktop-public";
import Link from "next/link";

const Index = async () => {
  return (
    <div className={styles.posts__main}>
      <DesktopPublic />
    </div>
  );
};

export default Index;
