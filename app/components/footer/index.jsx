import React from "react";
import styles from "./footer.module.scss";
import PhoneIcon from "./svg/phone-icon";
import CompaseIcon from "./svg/compase-icon";
import EmailIcon from "./svg/email-icon";
import FBIcon from "./svg/facebook-icon";
import Link from "next/link";

const Index = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__inner}>
        <article className={styles.footer__left}>
          <FBIcon />
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

        <article className={styles.footer__left_mob}>
          <div>
            <div>
              <div className={styles.footer__left_location}>
                <CompaseIcon />
                <Link href="/" className={styles.location__text}>
                  Republica Moldova, mun. Chișinău, str. Izmail 46
                </Link>
              </div>
            </div>
            <div className="flex justify-center items-center gap-[68rem] py-[20rem]">
              <div className={styles.footer__left_phone}>
                <PhoneIcon />
                <a href="tel:+37322542870" className={styles.phone__text}>
                  +373 (022) 54-28-70
                </a>
              </div>
              <div className={styles.footer__left_email}>
                <EmailIcon />
                <a
                  href="mailto:teologie.ortodoxa@gmail.com"
                  className={styles.email__text}
                >
                  {" "}
                  teologie.ortodoxa@gmail.com
                </a>
              </div>

              <FBIcon />
            </div>
          </div>
        </article>
        <article className={styles.footer__right}>
          <div className={styles.footer__right_map}></div>
        </article>
      </div>
    </footer>
  );
};

export default Index;
