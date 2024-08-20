import React from "react";
import styles from "./studenti.main.module.scss";
import Image from "next/image";

function Page() {
  return (
    <div className={styles.studenti}>
      <div className={styles.studenti__top_inner}>
        <div className={styles.container}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 100,
              padding: "50px 0px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <div>
                <div style={{ display: "flex", gap: 10 }}>
                  <Image
                    src="/static/seminarul/icons/icon1.svg"
                    alt="Image 1"
                    width={20} // Specify width
                    height={20} // Specify height
                  />

                  <p
                    style={{ color: "#66220F", fontSize: 17, fontWeight: 700 }}
                  >
                    Seminarul Liceal de Teologie Ortodoxă
                  </p>
                </div>
              </div>
              <div>
                <div style={{ display: "flex", gap: 10 }}>
                  <Image
                    src="/static/seminarul/icons/busola.svg"
                    alt="Image 1"
                    width={20} // Specify width
                    height={20} // Specify height
                  />

                  <p
                    style={{ color: "#66220F", fontSize: 17, fontWeight: 700 }}
                  >
                    Republica Moldova, mun. Chișinău, str. Izmail 46
                  </p>
                </div>
              </div>
              <div>
                <div style={{ display: "flex", gap: 10 }}>
                  <Image
                    src="/static/seminarul/icons/email.svg"
                    alt="Image 1"
                    width={20} // Specify width
                    height={20} // Specify height
                  />

                  <p
                    style={{ color: "#66220F", fontSize: 17, fontWeight: 700 }}
                  >
                    semiteolog@gmail.com
                  </p>
                </div>
              </div>
              <div>
                <div style={{ display: "flex", gap: 10 }}>
                  <Image
                    src="/static/seminarul/icons/colier.svg"
                    alt="Image 1"
                    width={20} // Specify width
                    height={20} // Specify height
                  />

                  <p
                    style={{ color: "#66220F", fontSize: 17, fontWeight: 700 }}
                  >
                    Director  Arhimandrit Nectarie GHERMAN
                  </p>
                </div>
              </div>
              <div>
                <div style={{ display: "flex", gap: 10 }}>
                  <Image
                    src="/static/seminarul/icons/colier.svg"
                    alt="Image 1"
                    width={20} // Specify width
                    height={20} // Specify height
                  />

                  <p
                    style={{ color: "#66220F", fontSize: 17, fontWeight: 700 }}
                  >
                    Director adjunct învăţămînt Prof. grad. I, Dr. Rodica SLIVCA
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div style={{ width: 300, height: 200 }}>
                <Image
                  src="/static/seminarul/logo.png"
                  alt="Image 1"
                  width={300} // Specify width
                  height={200} // Specify height
                  style={{ height: "100%", width: "100%" }}
                />
              </div>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <p style={{ color: "#272B37", fontSize: 18 }}>
              Seminarul Teologic Ortodoxă (în continuare STO) este o
              subdiviziune a Academiei de Teologie Ortodoxă din Moldova, care
              pregăteşte elevii la nivel liceal şi este creat conform deciziei
              Sinodului Bisericii Ortodoxe din Republica Moldova în cadrul
              Instituţiei religioase Academia de Teologie Ortodoxă din Moldova,
              cu scopul desfăşurării activităţii de instruire, avînd drept
              obiectiv major formarea unor personalităţi creative, capabile
              să-şi realizeze intregul potenţial de aptitudini şi capacităţi
              intelectuale şi spirituale şi să contribuie astfel la redresarea
              culturii spirituale a poporului nostru crestin ortodox.
            </p>
            <p style={{ color: "#272B37", fontSize: 18 }}>
              Activitatea este organizată şi se desfăşoară în baza prevederilor
              Legii privind cultele religioase şi părţile lor componente, ale
              actelor normative elaborate de Ministerul Educaţiei al Republicii
              Moldova, în baza deciziilor Mitropoliei Chişinăului şi a Întregii
              Moldove şi ale consiliului de administraţie a STO.
            </p>
            <p style={{ color: "#272B37", fontSize: 18 }}>
              <bold style={{ fontWeight: 20 }}>STO</bold> este Instituţia de
              învăţămînt secundar general care asigură elevilor o pregătire de
              cultură generală şi teologică de bază, necesară pentru continuarea
              studiilor în învăţămîntul superior, la specialităţile umanistice
              şi cele teologice. Învăţămîntul liceal se organizează ca
              învăţămînt de zi, durata învăţămîntului este de 3 ani (clasele
              X-XII)
            </p>
            <p style={{ color: "#272B37", fontSize: 18 }}>
              Studiile se desfăşoară în limba română.
            </p>
            <p style={{ color: "#272B37", fontSize: 18 }}>
              Admiterea la STO se face prin concurs, care se desfăşoară în baza
              regulamentului elaborat de Ministerul Educaţiei al Republicii
              Moldova, în baza deciziilor Mitropoliei Chişinăului şi a Întregii
              Moldove şi ale consiliului de administraţie a STO. Studiile se
              încheie cu examenul de bacalaureat, care se desfăşoară în
              conformitate cu regulamentul elaborat de Ministerul Educaţiei al
              Republicii Moldova
            </p>
            <p style={{ color: "#272B37", fontSize: 18 }}>
              La promovarea examenului de bacalaureat, absolvenţii obţin diploma
              de bacalaureat, care conferă dreptul de înmatriculare în
              învăţămîntul superior. La promovarea examenelor pentru
              discipiinele teologice, absolvenţii obţin un certificat de studii
              teologice incomplete, aprobat de Mitropolia Chişinăului şi a
              Întregii Moldove.
            </p>
            <p style={{ color: "#272B37", fontSize: 18 }}>
              În cadrul Instituţiei religioase există unul sau cîţiva părinţi
              duhovnici – îndrumători spirituali ai studenţilor şi elevilor
              teologi.
            </p>
            <p style={{ color: "#272B37", fontSize: 18 }}>
              Părintele duhovnic pregăteşte studenţii şi elevii pentru primirea
              Sf. Taine; organizează cicluri de meditaţii duhovniceşti cu
              studenţii sau elevii.
            </p>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: 20,
              marginTop: 100,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <h2 style={{ color: "black", fontSize: 25 }}>
                Preotul duhovnic îndeplineşte următoarele sarcini
              </h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: "#272B37", fontSize: 18 }}>
                1. organizează şi conduce rugăciunile de dimineaţă, serviciile
                divine şi practica liturgică, ţinînd seama de problemele pe care
                le ridică viaţa, colectivul de studenţi sau elevi şi de
                sarcinile moral-spirituale ale instituţiei.
              </p>
              <p style={{ color: "#272B37", fontSize: 18 }}>
                2. duce sistematic evidenţa pentru prezenţa la slujbele divine a
                studenţilor şi elevilor, îi mărturiseşte lunar, poartă de grijă
                ca ei să fie împărtăşiţi cu Sfintele Taine şi ia toate măsurile
                pentru formarea spirituală a acestora la îndeplinirea cu succes
                a îndatoririlor lor creştineşti.
              </p>
              <p style={{ color: "#272B37", fontSize: 18 }}>
                3. ţine legătura cu părinţii şi preotul paroh, care a dat
                recomandare studentului sau elevului şi îi informează despre
                rezultatele obţinute.
              </p>
              <p style={{ color: "#272B37", fontSize: 18 }}>
                4. informează consiliul profesoral despre activitatea
                desfăşurată la serviciile divine.
              </p>
              <p style={{ color: "#272B37", fontSize: 18 }}>
                5. apreciază comportamentul studenţilor sau elevilor pe
                parcursul studiilor.
              </p>
              <p style={{ color: "#272B37", fontSize: 18 }}>
                6. este responsabil de elaborarea programului liturgic în
                vederea participării studenţilor şi elevilor la slujbele divine
                pe perioada de vacanţa de iarnă şi de vară.
              </p>
              <p style={{ color: "#272B37", fontSize: 18 }}>
                7. duce convorbiri duhovniceşti permanente cu fiecare student
                sau elev în parte, astfel, avînd posibilitatea de a cunoaşte
                starea familială (financiară şi moral-spirituală) a studenţilor
                sau elevilor.
              </p>
            </div>
            <div
              style={{
                margin: "50px 0px",
                display: "flex",
                flexDirection: "column",
                gap: 40,
              }}
            >
              <p style={{ color: "#272B37", fontSize: 18 }}>
                Prezintă Organelor Administrative calificativele studenţilor şi
                elevilor pentru purtare şi frecvenţa la Biserică, întocmeşte
                caracteristica studenţilor şi elevilor absolvenţi.
              </p>

              <div
                style={{ display: "flex", gap: 20, justifyContent: "center" }}
              >
                <div
                  style={{
                    padding: 2,
                    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  <div style={{ height: 315, width: 250 }}>
                    <Image
                      src="/static/seminarul/poza1.png"
                      alt="Image 1"
                      width={250} // Specify width
                      height={315} // Specify height
                      style={{ height: "100%", width: "100%" }}
                    />
                  </div>
                  <div
                    style={{
                      padding: 10,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 10,
                    }}
                  >
                    <div>
                      <h2
                        style={{
                          color: "#66220F",
                          fontSize: 20,
                          fontWeight: 700,
                          textAlign: "center",
                        }}
                      >
                        Arhim. Nectarie
                      </h2>
                      <h2
                        style={{
                          color: "#66220F",
                          fontSize: 20,
                          fontWeight: 700,
                          textAlign: "center",
                        }}
                      >
                        (GHERMAN)
                      </h2>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "start",
                        width: "100%",
                      }}
                    >
                      <p style={{ color: "#6F737E", fontSize: 16 }}>
                        Director al Seminarului Teologic
                      </p>
                      <p style={{ color: "#6F737E", fontSize: 16 }}>
                        Ortodox din Chișinău
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    padding: 2,
                    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  <div style={{ height: 315, width: 250 }}>
                    <Image
                      src="/static/seminarul/poza2.png"
                      alt="Image 1"
                      width={250} // Specify width
                      height={315} // Specify height
                      style={{ height: "100%", width: "100%" }}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      padding: 10,
                      gap: 10,
                    }}
                  >
                    <div>
                      <h2
                        style={{
                          color: "#66220F",
                          fontSize: 20,
                          fontWeight: 700,
                        }}
                      >
                        Prof. grad. I, Dr.
                      </h2>
                      <h2
                        style={{
                          color: "#66220F",
                          fontSize: 20,
                          fontWeight: 700,
                        }}
                      >
                        Rodica SLIVCA
                      </h2>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "start",
                        width: "100%",
                      }}
                    >
                      <p style={{ color: "#6F737E", fontSize: 16 }}>
                        Director adjunct învăţămînt
                      </p>
                      <p style={{ color: "#6F737E", fontSize: 16 }}>
                        al Seminarului Teologic Ortodox
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    padding: 2,
                    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  <div style={{ height: 315, width: 250 }}>
                    <Image
                      src="/static/seminarul/poza3.png"
                      alt="Image 1"
                      width={250} // Specify width
                      height={315} // Specify height
                      style={{ height: "100%", width: "100%" }}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      padding: 10,
                      gap: 10,
                    }}
                  >
                    <div>
                      <h2
                        style={{
                          color: "#66220F",
                          fontSize: 20,
                          fontWeight: 700,
                        }}
                      >
                        Prot. Victor CERESEU
                      </h2>
                      <h2
                        style={{
                          color: "#66220F",
                          fontSize: 20,
                          fontWeight: 700,
                        }}
                      >
                        PREOT SPIRITUAL
                      </h2>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "start",
                        width: "100%",
                      }}
                    >
                      <p style={{ color: "#6F737E", fontSize: 16 }}>
                        Prof. tipic, gr. didactic II
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
