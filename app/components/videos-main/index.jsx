import React from "react";
import styles from "./publications.module.scss";
import DesktopPublic from "./desktop-public";

const Index = async () => {

  return (
    <div className={styles.posts__main}>
      <div className={styles.container}>
        <DesktopPublic />
      </div>
    </div>
  );
};

export default Index;
