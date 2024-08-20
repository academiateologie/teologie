import React from "react";
import styles from "./corp-didactic.main.module.scss";
import Image from "next/image";
// import img_1 from "https://res.cloudinary.com/dkkozauci/image/upload/v1718266074/corp-didactic-main-top-img_ztvshn.webp";
import church_1 from "../../../public/static/church/Screenshot 2024-08-20 at 12.26.50.png";

function Page() {
  return (
    <div className={styles.corp_didactic}>
      {/* Top Section with Image */}
      <div className={styles.corp_didactic__top_inner}>
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
      <div className={styles.corp_didactic__content}>
        <div className={styles.container}>
          <header className={styles.corp_didactic__header}>
            <p className={styles.description}>
            Facultatea include catedre de profil şi de instruire generală, laboratoare şi secţii de organizare a procesului de studii la diferite forme de învăţămînt. Facultăţile pot fi organizate sau desfiinţate prin decizia Senatului Academiei.
            </p>
            <p className={styles.description2}>
            Facultatea cuprinde: secţia <strong>Teologie Pastorală</strong> și secția <strong>Studii Masterat</strong>.
            </p>
          </header>

          <div className={styles.corp_didactic__details}>
            <ul>
                <li>PC arhimandrit Nectarie (Gherman), starețul Mănăstirii Horești - <strong>Prorector pentru studii</strong>;</li>
                <li>Dl Nicolae Ionichi - <strong>Prorector pentru management instituțional</strong>;</li>
                <li>Decanatului Facultăţii de Teologie Ortodoxă se subordonează catedra</li>
                <li>catedra <strong>Ştiinţe Teologice</strong>;</li>
                <li>secția <strong>Studii Masterat</strong>;</li>
            </ul>

            <p className={styles.description}>
                <strong>Catedra</strong> este subdiviziune de bază care organizează şi înfăptuieşte activitatea didactică, metodică şi ştiinţifică la una sau mai multe discipline înrudite. Catedra poate avea Statut de catedră special (a facultăţii), general (academică – universitară) şi interuniversitară.
            </p>
            <p className={styles.description}>
                Studiile universitare de <strong>Masterat</strong> sunt a doua treaptă a studiilor universitare, și care asigura aprofundarea în domeniul studiilor de licență sau într-un domeniu apropiat, dezvoltarea capacităților de cercetare științifică și constituie o bază pregătitoare obligatorie pentru studiile doctorale.
            </p>
          </div>

          <div className={styles.corp_didactic__additional}>
            <div className={styles.container}>
                <h2>Disciplinele repartizate pe catedre</h2>
                <h2>Ciclul I de studii (Licenţă) </h2>
                <h2>Planificare anuală a ciclului I de studii</h2>
            </div>
          </div>
          <div className={styles.corp_didactic__details}>
          <p>
                <strong>PROFESORII</strong>
          </p>
          <p className={styles.description}>
            Se aleg prin hotărîrea Senatului ATOM la propunerea Decanatului. Funcţiile didactice, ocupate prin concurs, se confirmă periodic pe criterii profesionale, ştiinţifice, pedagogice şi morale, conform prevederilor legale şi regulamentului adoptat de Senat;
          </p>
            <p className={styles.description}>
            Cadrele didactice cu funcţia de bază în Academia de Teologie Ortodoxă din Moldova pot efectua activităţi de învăţămînt şi cercetare la alte instituţii de învăţămînt superior de stat sau particulare cu avizul Decanului şi aprobarea Rectorului;
            </p>
            <p>
            Cadrele didactice asociate sau invitate, în relaţia cu Academia de Teologie Ortodoxă din Moldova au aceleaşi drepturi şi îndatoriri ca şi cadrele didactice cu funcţia de bază;
            </p>
          </div>
        </div>
      </div>

      {/* Additional Section */}
      <div className={styles.corp_didactic__additional__differentColor}>
        <h4>În relaţia cu Academia de Teologie Ortodoxă din Moldova, personalul didactic are următoarele drepturi:</h4>
        <ul>
            <li>dreptul de a presta activităţi didactice şi de cercetare ştiinţifică corespunzător competenţei în cadrul oricărei structuri a Academiei de Teologie Ortodoxă din Moldova;</li>
            <li>dreptul de libertate academică;</li>
            <li>dreptul de a evalua după competenţa proprie, în limitele prevederilor regulamentare, activitatea şi rezultatele profesionale ale studenţilor;</li>
            <li>dreptul de perfecţionare şi promovare profesională;</li>
            <li>dreptul de autor şi de proprietate asupra rezultatelor muncii intelectuale şi de creaţie prestate, cu respectarea normelor legale şi deontologice;</li>
            <li>dreptul de comunicare liberă a rezultatelor cercetărilor proprii, cu respectarea normelor legale şi deontologice;</li>
            <li>dreptul de a face parte din şi de a înfiinţa în cadrul Academiei de Teologie Ortodoxă din Moldova asociaţii şi fundaţii academice şi profesionale, în limita reglementărilor interne şi a normelor legale;</li>
            <li>alte drepturi ce decurg din legislaţia în vigoare şi reglementările Academia de Teologie Ortodoxă din Moldova;</li>
        </ul>
        <h4>În relaţia cu Academia de Teologie Ortodoxă din Moldova, personalul didactic are următoarele îndatoriri:</h4>
        <ul>
            <li>loialitatea faţă de Academia de Teologie Ortodoxă din Moldova vis-a-vis de alte instituţii corespunzător poziţiei ocupate în comunitatea universitară;</li>
            <li> preocuparea continuă pentru perfecţionarea pregătirii proprii pe planul obiectivelor, conţinutului şi metodologiei proceselor de învăţămînt şi de cercetare ştiinţifică;</li>
            <li>îndeplinirea întocmai a obligaţiilor corespunzătoare postului ocupat, precum şi a obligaţiilor suplimentare asumate prin contracte încheiate cu Academia de Teologie Ortodoxă din Moldova;</li>
            <li>alte îndatoriri ce decurg din legislaţia în vigoare şi reglementările Academiei de Teologie Ortodoxă din Moldova;</li>
            <li>de a prezenta programele analitice perfectate şi modificate la zi la cererea Decanului;</li>
            <li>de a îndeplini planul ştiinţific şi sarcina didactică prevăzute în planul individual;</li>
            <li>de a se prezenta obligatoriu la şedinţele de catedră;</li>
            <li>de a prezenta cursurile şi întrebările pentru examene şi colocvii la catedră (precum şi în format electronic, tehnoredactat);</li>
        </ul>
        </div>
    </div>
  );
}

export default Page;
