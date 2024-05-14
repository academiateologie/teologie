import React from 'react'
import styles from "./organizational.module.scss"
import Gerb from "./svg/gerb/page"
import Image from 'next/image';
import img from "../../../public/static/organizational/gallery-item.png"

function Page() {
  return (
    <div className={styles.organizational}>
      <div className={styles.container}>
        <div className={styles.organizational__inner}>
          <div className={styles.organizational__text}>
            <span>
              Instituţia religioasă de învăţămînt superior „Academia de Teologie
              Ortodoxă din Moldova”, este parte componentă a cultului religios
              Biserica Ortodoxă din Moldova (Mitropolia Chişinăului şi a
              Întregii Moldove) înfiinţată prin voinţa acestuia şi cu
              binecuvîntarea ÎPS VLADIMIR, Mitropolit al Chişinăului şi al
              Întregii Moldove.
            </span>
            <span>
              Instituţia religioasă „Academia de Teologie Ortodoxă din Moldova”
              este o instituţie de învăţămînt teologic de grad superior. Scopul
              principal al Instituției religioase în calitatea sa de centru de
              instruire teologică liceală, universitară și postuniversitară,
              științifică și culturală, constă în pregătirea, perfecționarea și
              recalificarea la nivel superior a slujitorilor bisericești,
              specialiștilor și cadrelor științifice în domeniile Teologiei,
              precum şi a preoţilor sau profesorilor. În calitate de obiectiv al
              activităţii Instituţiei religioase este contribuirea la întărirea
              şi unitatea credinţei, la promovarea spiritualităţii
              creştin-ortodoxe şi misiunii bisericeşti în contextul actual al
              lumii contemporane.{" "}
            </span>
          </div>
          <div className={styles.organizational__gerb}>
            <Gerb />
          </div>
        </div>

        <h2 className={styles.organizational__title}>
          STRUCTURA ORGANIZATORICĂ
        </h2>

        <div className={styles.organizational__text_bottom}>
          <span>
            Structura Instituţiei religioase cuprinde clase liceale, facultăţi,
            catedre, departamente, secţii şi laboratoare de cercetare
            ştiinţifică, unităţi de proiectare şi producţie, centre de
            perfecţionare şi reciclare a cadrelor, biblioteci, edituri, seminare
            teologice şi alte subdiviziuni structurale. Structura Instituţiei
            religioase este elaborată şi aprobată de către Senat.
          </span>
          <span>
            <b>Facultatea</b> este o subdiviziune didactico-ştiinţifică şi
            administrativă a Instituţiei religioase care îşi organizează
            întreaga activitate cu privire la pregătirea specialiştilor de
            înaltă calificare în domeniile Teologiei, conform planurilor de
            învăţămînt, precum şi realizarea activităţilor de cercetare
            ştiinţifică.
          </span>
          <span>
            Facultatea include catedre de profil şi de instruire generală,
            laboratoare şi secţii de organizare a procesului de studii la
            diferite forme de învăţămînt. Facultăţile pot fi organizate sau
            desfiinţate prin decizia Senatului Academiei. Academia cuprinde
            facultatea de Teologie Pastorală.
          </span>
          <span>
            Este subdiviziune de bază care organizează şi înfăptuieşte
            activitatea didactică, metodică şi ştiinţifică la una sau mai multe
            discipline înrudite. Catedra poate avea Statut de catedră special (a
            facultăţii), general (academică {"-"} universitară) şi
            interuniversitară.
          </span>
        </div>

        <div className={styles.organizational__gallery}>
          <div className={styles.organizational__item}>
            <Image
              src={img}
              width={274}
              height={314}
              className={styles.item__image}
              alt=""
            />
            <div className={styles.item__description}>
              <p className={styles.description__name}>ÎPS VLADIMIR</p>
              <p className={styles.description__text}>
                Mitropolit al Chişinăului şi al Întregii Moldove Rector al
                Academiei de Teologie Ortodoxă din Moldova
              </p>
            </div>
          </div>
          <div className={styles.organizational__item}>
            <Image
              src={img}
              width={274}
              height={314}
              className={styles.item__image}
              alt=""
            />
            <div className={styles.item__description}>
              <p className={styles.description__name}>
                Arhim. Nectarie (GHERMAN)
              </p>
              <p className={styles.description__text}>
                Prorector pentru studii
              </p>
            </div>
          </div>
          <div className={styles.organizational__item}>
            <Image
              src={img}
              width={274}
              height={314}
              className={styles.item__image}
              alt=""
            />
            <div className={styles.item__description}>
              <p className={styles.description__name}>Nicolae Ionichi</p>
              <p className={styles.description__text}>
                Decan al Facultății de Teologie Ortodoxă
              </p>
            </div>
          </div>
          <div className={styles.organizational__item}>
            <Image
              src={img}
              width={274}
              height={314}
              className={styles.item__image}
              alt=""
            />
            <div className={styles.item__description}>
              <p className={styles.description__name}>Nicolae Ionichi</p>
              <p className={styles.description__text}>
                Prorector pentru management instituțional
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;