import React from "react";
import styles from "./studenti.main.module.scss";
import Image from "next/image";
// import img_1 from "https://res.cloudinary.com/dkkozauci/image/upload/v1718266074/studenti-main-top-img_ztvshn.webp";

function Page() {
  return (
    <div
    // className={styles.studenti}
    >
      <div
        style={{ backgroundColor: "white" }}
        // className={styles.studenti__top_inner}
      >
        <div
          style={{
            backgroundColor: "white",
            padding: "30px 0px",
          }}
          className={styles.container}
        >
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
             În această rubrică, vom publica toată informaţia necesară pentru
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
          <div
            style={{
              display: "flex",
              justifyContent: "space-betweaen",
              gap: 70,
              padding: "50px 0px",
            }}
          >
            <div
              style={{
                width: "50%",
                display: "flex",
                flexDirection: "column",
                gap: 25,
              }}
            >
              <h6 className={styles.studenti__table_left__title}>
                Orarul sunetelor:
              </h6>
              <div style={{ width: "100%" }}>
                <table
                  style={{
                    borderCollapse: "collapse",
                    width: "100%",
                    textAlign: "center",
                  }}
                >
                  <thead>
                    <tr style={{ backgroundColor: "#66220F", color: "#fff" }}>
                      <th style={{ padding: "10px", border: "1px solid #ddd" }}>
                        <h2
                          style={{
                            color: "white",
                            fontSize: 20,
                            fontWeight: 600,
                          }}
                        >
                          ORA
                        </h2>
                      </th>
                      <th style={{ padding: "10px", border: "1px solid #ddd" }}>
                        <span
                          style={{
                            color: "white",
                            fontSize: 20,
                            fontWeight: 600,
                          }}
                        >
                          ACTIVITATEA
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ backgroundColor: "#F6F6F6" }}>
                      <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                        <span
                          style={{
                            color: "black",
                            fontSize: 18,
                            fontWeight: 600,
                          }}
                        >
                          08:10 – 08:30
                        </span>
                      </td>
                      <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                        <span
                          style={{
                            color: "black",
                            fontSize: 18,
                            fontWeight: 600,
                          }}
                        >
                          Rugăciunea de dimineață
                        </span>
                      </td>
                    </tr>
                    <tr style={{ backgroundColor: "#F1ECEE" }}>
                      <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                        <span
                          style={{
                            color: "black",
                            fontSize: 18,
                            fontWeight: 600,
                          }}
                        >
                          08:30 – 09:50
                        </span>
                      </td>
                      <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                        <span
                          style={{
                            color: "black",
                            fontSize: 18,
                            fontWeight: 600,
                          }}
                        >
                          perechea I-a
                        </span>
                      </td>
                    </tr>
                    <tr style={{ backgroundColor: "#F6F6F6" }}>
                      <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                        <span
                          style={{
                            color: "black",
                            fontSize: 18,
                            fontWeight: 600,
                          }}
                        >
                          09:55 – 11:15
                        </span>
                      </td>
                      <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                        <span
                          style={{
                            color: "black",
                            fontSize: 18,
                            fontWeight: 600,
                          }}
                        >
                          perechea II-a
                        </span>
                      </td>
                    </tr>
                    <tr style={{ backgroundColor: "#F1ECEE" }}>
                      <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                        <span
                          style={{
                            color: "black",
                            fontSize: 18,
                            fontWeight: 600,
                          }}
                        >
                          11:45 – 13:05
                        </span>
                      </td>
                      <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                        <span
                          style={{
                            color: "black",
                            fontSize: 18,
                            fontWeight: 600,
                          }}
                        >
                          perechea III-a
                        </span>
                      </td>
                    </tr>
                    <tr style={{ backgroundColor: "#F6F6F6" }}>
                      <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                        <span
                          style={{
                            color: "black",
                            fontSize: 18,
                            fontWeight: 600,
                          }}
                        >
                          13:15 – 14:35
                        </span>
                      </td>
                      <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                        <span
                          style={{
                            color: "black",
                            fontSize: 18,
                            fontWeight: 600,
                          }}
                        >
                          perechea IV-a
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div
              style={{
                width: "50%",
                display: "flex",
                flexDirection: "column",
                gap: 25,
              }}
            >
              <h6 className={styles.studenti__table_right__title}>
                Orarul liturgic:
              </h6>
              <div style={{ width: "100%" }}>
                <table
                  style={{
                    borderCollapse: "collapse",
                    width: "100%",
                    textAlign: "center",
                  }}
                >
                  <thead>
                    <tr style={{ backgroundColor: "#66220F", color: "#fff" }}>
                      <th style={{ padding: "10px", border: "1px solid #ddd" }}>
                        <h2
                          style={{
                            color: "white",
                            fontSize: 20,
                            fontWeight: 600,
                          }}
                        >
                          ORA
                        </h2>
                      </th>
                      <th style={{ padding: "10px", border: "1px solid #ddd" }}>
                        <h2
                          style={{
                            color: "white",
                            fontSize: 20,
                            fontWeight: 600,
                          }}
                        >
                          ACTIVITATEA
                        </h2>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ backgroundColor: "#F6F6F6" }}>
                      <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                        <span
                          style={{
                            color: "black",
                            fontSize: 18,
                            fontWeight: 600,
                          }}
                        >
                          17:00
                        </span>
                      </td>
                      <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                        <span
                          style={{
                            color: "black",
                            fontSize: 18,
                            fontWeight: 600,
                          }}
                        >
                          Vecernia şi Utrenia
                        </span>
                      </td>
                    </tr>
                    <tr style={{ backgroundColor: "#F1ECEE" }}>
                      <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                        <span
                          style={{
                            color: "black",
                            fontSize: 18,
                            fontWeight: 600,
                          }}
                        >
                          A doua zi
                        </span>
                      </td>
                      <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                        <span
                          style={{
                            color: "black",
                            fontSize: 18,
                            fontWeight: 600,
                          }}
                        ></span>
                      </td>
                    </tr>
                    <tr style={{ backgroundColor: "#F6F6F6" }}>
                      <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                        <span
                          style={{
                            color: "black",
                            fontSize: 18,
                            fontWeight: 600,
                          }}
                        >
                          08:00
                        </span>
                      </td>
                      <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                        <span
                          style={{
                            color: "black",
                            fontSize: 18,
                            fontWeight: 600,
                          }}
                        >
                          Ceasurile
                        </span>
                      </td>
                    </tr>
                    <tr style={{ backgroundColor: "#F1ECEE" }}>
                      <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                        <span
                          style={{
                            color: "black",
                            fontSize: 18,
                            fontWeight: 600,
                          }}
                        >
                          08:30
                        </span>
                      </td>
                      <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                        <span
                          style={{
                            color: "black",
                            fontSize: 18,
                            fontWeight: 600,
                          }}
                        >
                          Sfânta Liturghie
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <h2 style={{ fontSize: 20, color: "#272B37", fontWeight: 700 }}>
              STUDENŢII
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: "#272B37", fontSize: 18 }}>
                Studenţii sînt parte integrantă a sistemului de învăţămînt şi
                cercetare ştiinţifică dezvoltat în Academia de Teologie Ortodoxă
                din Moldova, în vederea îndeplinirii misiunii şi obiectivelor
                acesteia.
              </p>
              <p style={{ color: "#272B37", fontSize: 18 }}>
                Prin implicare în activităţile Academiei de Teologie Ortodoxă
                din Moldova şi prin opiniile exprimate, studenţii participă la
                controlul, evaluarea şi ameliorarea calităţii serviciilor
                universitare prestate de Academia de Teologie Ortodoxă din
                Moldova;
              </p>
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#F1ECEE",
            padding: "30px 0px",
          }}
        >
          <div className={styles.container}>
            <h2
              style={{
                fontSize: 20,
                color: "#272B37",
                fontWeight: 700,
                textAlign: "center",
              }}
            >
                În relaţia cu Academia de Teologie Ortodoxă din Moldova,
              studenţii au următoarele drepturi:
            </h2>
            <div style={{ padding: "30px 0px" }}>
              <ul
                style={{
                  listStyleType: "disc",
                  display: "flex",
                  flexDirection: "column",
                  gap: 20,
                }}
              >
                <li style={{ color: "#272B37", fontSize: 18 }}>
                  dreptul de a alege liber programul de studii, exprimat prin
                  facultate şi specializare, în limita criteriilor stabilite de
                  Senat;
                </li>
                <li style={{ color: "#272B37", fontSize: 18 }}>
                  dreptul de a fi informaţi cu privire la oferta curriculară la
                  modul în care pot accede la diferitele ei segmente;
                </li>
                <li style={{ color: "#272B37", fontSize: 18 }}>
                  dreptul de a participa la activităţile didactice asumate prin
                  contractul de studii şi la activităţile de cercetare
                  ştiinţifică, corespunzător poziţiei lor în Academia de
                  Teologie Ortodoxă din Moldova;
                </li>
                <li style={{ color: "#272B37", fontSize: 18 }}>
                  dreptul de a participa, în limitele timpului disponibil şi a
                  reglementărilor Academiei de Teologie Ortodoxă din Moldova, la
                  programe de studii sau cercetare paralele formaţiei de bază,
                  în ţară sau străinătate, cu recunoaşterea lor prin certificate
                  şi diplome de studii, conform prevederilor legale;
                </li>
                <li style={{ color: "#272B37", fontSize: 18 }}>
                  dreptul de a se transfera între profile/specializări care
                  funcţionează în Academia de Teologie Ortodoxă din Moldova,
                  respectînd reglementările stabilite de Senat;
                </li>
                <li style={{ color: "#272B37", fontSize: 18 }}>
                  dreptul de a urma specializări în paralel, în condiţiile
                  reglementărilor Academiei de Teologie Ortodoxă din Moldova;
                </li>
                <li style={{ color: "#272B37", fontSize: 18 }}>
                  dreptul de a-şi exprima opiniile cu privire la activităţile
                  Academiei de Teologie Ortodoxă din Moldova, individual sau
                  prin reprezentanţii autorizaţi, din cadrul structurilor de
                  conducere ale Academiei de Teologie Ortodoxă din Moldova;
                </li>
                <li style={{ color: "#272B37", fontSize: 18 }}>
                  dreptul de a iniţia, organiza şi desfăşura activităţi şi
                  manifestări în domeniul ştiinţific, cultural şi social în
                  cadru organizat, cu aprobarea Academiei de Teologie Ortodoxă
                  din Moldova;
                </li>
                <li style={{ color: "#272B37", fontSize: 18 }}>
                  În relaţia cu Academia de Teologie Ortodoxă din Moldova,
                  studenţii au următoarele îndatoriri:
                </li>
                <li style={{ color: "#272B37", fontSize: 18 }}>
                  să respecte prevederile Statutului şi reglementărilor
                  Academiei de Teologie Ortodoxă din Moldova, care îi implică;
                </li>
                <li style={{ color: "#272B37", fontSize: 18 }}>
                  să îndeplinească exigenţele programelor de studii alese;
                </li>
                <li style={{ color: "#272B37", fontSize: 18 }}>
                  să utilizeze în mod responsabil baza materială a Academiei de
                  Teologie Ortodoxă din Moldova, răspunzînd material pentru
                  prejudiciile aduse.
                </li>
                <li style={{ color: "#272B37", fontSize: 18 }}>
                  să respecte Regulamentul intern (ţinută, reuşită);
                </li>
                <li style={{ color: "#272B37", fontSize: 18 }}>
                  să achite taxa de studiu pentru anul care urmează în termen de
                  10 zile la începutul anului de studiu;
                </li>
              </ul>
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
