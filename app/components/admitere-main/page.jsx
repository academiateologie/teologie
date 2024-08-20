import React from "react";
import styles from "./admitere.main.module.scss";
import Image from "next/image";
// import img_1 from "https://res.cloudinary.com/dkkozauci/image/upload/v1718266074/admitere-main-top-img_ztvshn.webp";
import church_1 from "../../../public/static/church/view-church-architectural-elements (6) 1.svg";

function Page() {
  return (
    <div className={styles.admitere}>
      {/* Top Section with Image */}
      <div className={styles.admitere__top_inner}>
        <div className={styles.container}>
          <div className="tablet:w-[1200rem] tablet:h-[548rem] relative">
            <Image
              src={church_1}
              width={850}
              height={314}
              className={styles.item__image}
              alt=""
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className={styles.admitere__content}>
        <div className={styles.container}>
          <header className={styles.admitere__header}>
            <h1>ADMITEREA 2023/2024</h1>
            <h2>SEMINARUL TEOLOGIC ORTODOX</h2>
            <p className={styles.description}>
              Admiterea la Seminarul Teologic Ortodox din Chișinău se face în baza normelor stabilite de Ministerul Educației și Cercetării al Republicii Moldova pentru învățământul liceal de stat și Mitropolia Chișinăului și a Întregii Moldove.
            </p>
          </header>

          <div className={styles.admitere__details}>
            <h3>Durata studiilor: 3 ani, în bază de contract, profil umanist / profil teologie.</h3>
            <p>La finele anilor de studii elevii primesc:</p>
            <ul>
              <li>Diploma de Bacalaureat</li>
              <li>Diploma de Specialitate: Teologie</li>
            </ul>
          </div>

          <div className={styles.admitere__columns}>
            <div className={styles.column}>
              <h4>SEMINARUL TEOLOGIC ORTODOX</h4>
              <p>Pentru înscrierea la admitere candidații trebuiesă fie absolvenți a cl. a IX-a și vor prezenta următoarele acte:</p>
              <ol>
                <li>1. Cerere (model eliberat de STO);</li>
                <li>2. Actul de studii cu anexa respectivă (original+xerox);</li>
                <li>3. Recomandarea în scris a preotului duhovnic (original);</li>
                <li>4. Buletinul de identitate sau adeverința de naștere (cei care n-au vârsta de 16 ani) (original+xerox);</li>
                <li>5. Adeverință de botez (original+xerox);</li>
                <li>6. Copia buletinelor de identitate a părinților;</li>
                <li>7. 2 fotografii 3x4;</li>
                <li>8. Autobiografie;</li>
                <li>9. Taxa de admitere;</li>
                <li>10. Taxa pentru contractul de studii.</li>
              </ol>
            </div>

            <div className={styles.column}>
              <h4>GRUPA REGHENT (DIRIJAT CORAL)</h4>
              <p>Durata studiilor este 2 ani, la frecvență redusă și fără limită de vârstă.</p>
              <ol>
                <li>1. Cerere (model eliberat de STO);</li>
                <li>2. Actul de studii cu anexa respectivă (original+xerox);</li>
                <li>3. Recomandarea în scris a preotului duhovnic (original);</li>
                <li>4. Buletinul de identitate (original+xerox);</li>
                <li>5. Adeverință de botez (original+xerox);</li>
                <li>6. Copia buletinelor de identitate a părinților;</li>
                <li>7. 2 fotografii 3x4;</li>
                <li>8. Taxa de admitere;</li>
                <li>9. Taxa pentru contractul de studii.</li>
              </ol>
            </div>
          </div>

          <div className={styles.admitere__details2}>
            <h3>CONVORBIREA CU ABITURIENȚII PREVEDE:</h3>
            <ul>
              <li>Muzica bisericească</li>
              <li>Intonarea unui cântec bisericesc, pentru aprecierea calităților vocale;</li>
              <li>Verificarea dicției: rostirea pe de rost a unei rugăciuni;</li>
              <li>Studii biblice.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Additional Section */}
      <div className={styles.admitere__additional}>
        <div className={styles.container}>
          <h2>ADMITEREA 2023/2024 LA</h2>
          <h2> FACULTATEA DE TEOLOGIE ORTODOXĂ</h2>
          <h3>LA SPECIALITATEA: TEOLOGIE PASTORALĂ</h3>
          <p>Se admit persoanele cu studii medii și absolvenți ai Seminarilor de Teologie Ortodoxă sau Liceelor (BAC) – durata studiilor este de 4 ani</p>
          <p>Studii sunt în bază de contract (taxă de școlarizare). Forma de studii secția zi și Frecvență Redusă.</p>

          <div className={styles.admitere__additional__additional_details}>
            <h4>PENTRU ÎNSCRIEREA LA ADMITERE, CANDIDAȚII VOR PREZENTA URMĂTOARELE ACTE:</h4>
            <div className={styles.columns}>
            <ul>
                <li>Cerere (model eliberat de ATOM);</li>
                <li>4 fotografii (3x4);</li>
                <li>Actul de studii (original+xerox);</li>
                <li>Recomandarea în scris a preotului duhovnic (original);</li>
                <li>Decretul de hirotonie (original+xerox) – pentru clerici;</li>
                <li>Certificat de naștere (original+xerox);</li>
            </ul>
            <ul>
                <li>Adeverință de botez (original+xerox);</li>
                <li>Adeverință de cununie (original+xerox) – pentru căsătoriți;</li>
                <li>Buletinul de identitate (original+xerox);</li>
                <li>Taxa de admitere;</li>
                <li>Taxa pentru contractul de studii.</li>
            </ul>
            </div>
          </div>

          <p className={styles.admitere__dates}>
            Perioada de admitere: <strong>10 iulie – 23 august 2023.</strong>
            <br />
            Convorbirea cu abiturienții se va petrece la data de <strong>24 august 2023, ora 10:00</strong>
            <br />
            Orar de lucru a comisiei de admitere: Luni-Vineri între orele <strong>9:00 – 15:00</strong>
          </p>

          <div className={styles.admitere__additional__contact}>
            <h4>INFORMAȚII CU PRIVIRE LA ADMITERE:</h4>
            <address>
              Republica Moldova, mun. Chișinău, str. Ismail 46
              <br />
              <a href="mailto:teologie.ortodoxa@gmail.com">teologie.ortodoxa@gmail.com</a>
              <br />
              <a href="tel:+373022548870">+373 (022) 54-28-70</a>
            </address>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
