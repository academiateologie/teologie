"use client"
import React from "react";
import Link from "next/link";
import styles from "./about.module.scss"
import ImageVisible from "./img-visible"

const Index = () => {
  return (
    <section className={styles.about}>
      <div className={styles.about__wrapper}>
        <ImageVisible />
        <div className={styles.about__description}>
          <h6 className={styles.about__title}>Despre noi</h6>
          <p className={styles.about__text}>
            Instituţia religioasă de învăţămînt superior „Academia de Teologie
            Ortodoxă din Moldova”, este parte componentă a cultului religios
            Biserica Ortodoxă din Moldova (Mitropolia Chişinăului şi a Întregii
            Moldove) înfiinţată prin voinţa acestuia şi cu binecuvîntarea ÎPS
            VLADIMIR, Mitropolit al Chişinăului şi al Întregii Moldove.
          </p>

          <p className={styles.about__text}>
            Instituţia religioasă „Academia de Teologie Ortodoxă din Moldova”
            este o instituţie de învăţămînt teologic de grad superior.Scopul
            principal al Instituției religioase în calitatea sa de centru de
            instruire teologică liceală, universitară și postuniversitară,
            științifică și culturală, constă în pregătirea, perfecționarea și
            recalificarea la nivel superior a slujitorilor bisericești,
            specialiștilor și cadrelor științifice în domeniile Teologiei ...
          </p>

          <Link href="/despre-noi" className={styles.about__button}>
            Citește mai departe
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Index;
