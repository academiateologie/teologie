import React from "react";
import styles from "./studenti.main.module.scss";
import Image from "next/image";
// import img_1 from "https://res.cloudinary.com/dkkozauci/image/upload/v1718266074/studenti-main-top-img_ztvshn.webp";

function Page() {
  return (
    <div className={styles.studenti}>
      <div className={styles.studenti__top_inner}>
        <div className={styles.container}>
          <div className="tablet:w-[1200rem] tablet:h-[548rem] relative">
            <Image
              src="https://res.cloudinary.com/dkkozauci/image/upload/v1718266074/studenti-main-top-img_ztvshn.webp"
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
          <h6 className={styles.studenti__top_title}>
             Înn această rubrică, vom publica toată informaţia necesară pentru
            studenţi, cum ar fi orarul sunetelor, orarul lecţiilor şi alte date
            care-i vizează nemijlocit pe aceştia.
          </h6>
          <p className={styles.studenti__top_subtitle}>
            Cu binecuvîntarea ÎPS Vladimir, Mitropolit al Chişinăului şi al
            Întregii Moldove, Rector al Academiei de Teologie Ortodoxă din
            Moldova, a fost aprobat orarul elevilor Seminarului Liceal de
            Teologie Ortodoxă din Chişinău şi studenţilor Facultăţii de Teologie
            Ortodoxă, după cum urmează:
          </p>
          <div className={styles.studenti__top_tables}>
            <div className={styles.studenti__top_table__left}>
              <h6 className={styles.studenti__table_left__title}>
                Orarul sunetelor:
              </h6>
            </div>
            <div className={styles.studenti__top_table__right}>
              <h6 className={styles.studenti__table_right__title}>
                Orarul liturgic:
              </h6>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.studenti__bottom_inner}>
        <div className={styles.container}></div>
      </div>
    </div>
  );
}

export default Page;
