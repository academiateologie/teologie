import React from "react";
import styles from "./footer.module.scss";
import PhoneIcon from "./svg/phone-icon";
import CompaseIcon from "./svg/compase-icon";
import EmailIcon from "./svg/email-icon";
import FBIcon from "./svg/facebook-icon";

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
            <p className={styles.phone__text}> +373 (022) 54-28-70</p>
          </div>
          <div className={styles.footer__left_location}>
            <CompaseIcon />
            <p className={styles.location__text}>
              Republica Moldova, mun. Chișinău, str. Izmail 46
            </p>
          </div>
        </article>

        <article className={styles.footer__left_mob}>
          <div>
            <div>
              <div className={styles.footer__left_location}>
                <CompaseIcon />
                <p className={styles.location__text}>
                  Republica Moldova, mun. Chișinău, str. Izmail 46
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center gap-[68rem] py-[20rem]">
              <div className={styles.footer__left_phone}>
                <PhoneIcon />
                <p className={styles.phone__text}> +373 (022) 54-28-70</p>
              </div>
              <div className={styles.footer__left_email}>
                <EmailIcon />
                <p className={styles.email__text}>
                  {" "}
                  teologie.ortodoxa@gmail.com
                </p>
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
