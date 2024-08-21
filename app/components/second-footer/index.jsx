import React from "react";
import styles from "./footer.module.scss";
import PhoneIcon from "./svg/phone-icon";
import CompaseIcon from "./svg/compase-icon";
import EmailIcon from "./svg/email-icon";
import FBIcon from "./svg/facebook-icon";
import Link from "next/link";

const Index = () => {
  return (
    <footer style={{ backgroundColor: "#66220F", width: "100%" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          padding: "30px 0px",
        }}
      >
        <article>
          <div className={styles.footer__left_email}>
            <EmailIcon />
            <p className={styles.email__text}> teologie.ortodoxa@gmail.com</p>
          </div>
          <div className={styles.footer__left_phone}>
            <PhoneIcon />
            <a href="tel:+373022542870" className={styles.phone__text}>
              {" "}
              +373 (022) 54-28-70
            </a>
          </div>
          <div className={styles.footer__left_location}>
            <CompaseIcon />
            <a
              href="https://maps.app.goo.gl/FRXWPrVRpteCCb7p7"
              className={styles.location__text}
            >
              Republica Moldova, mun. Chișinău, str. Izmail 46
            </a>
          </div>
        </article>
        <article>
          <div className={styles.footer__left_email}>
            <p className={styles.email__text}>PAGINA PRINCIPALĀ</p>
          </div>
          <div className={styles.footer__left_phone}>
            <p className={styles.email__text}>FACULTATE</p>
          </div>
          <div className={styles.footer__left_phone}>
            <p className={styles.email__text}>SEMINARUL</p>
          </div>
        </article>

        <article>
          <div className={styles.footer__left_email}>
            <p className={styles.email__text}>STUDENȚI</p>
          </div>
          <div className={styles.footer__left_phone}>
            <p className={styles.email__text}>ADMITEREA 2023-2024</p>
          </div>
          <div className={styles.footer__left_phone}>
            <p className={styles.email__text}>PANOUL INFORMATIV</p>
          </div>
        </article>

        <article style={{ display: "flex", flexDirection: "column" }}>
          <div className={styles.footer__left_email}>
            <p className={styles.email__text}>BIBLIOTECA</p>
          </div>
          <div
            className={styles.footer__left}
            style={{
              display: "flex",
              justifyContent: "start",
            }}
          >
            <FBIcon />
          </div>
        </article>
      </div>
    </footer>
  );
};

export default Index;
