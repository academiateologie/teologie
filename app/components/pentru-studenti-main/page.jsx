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
                <a
                  style={{
                    fontSize: 18,
                    color: "#66220F",
                    cursor: "pointer",
                    textDecoration: "underline",
                  }}
                >
                  Lista sărbătorilor din cursul anului de studii 2023-2024
                </a>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 25,
              padding: 20,
            }}
          >
            <div style={{ textAlign: "center" }}>
              <h2
                style={{
                  fontSize: 30,
                  color: "#66220F",
                  fontWeight: 600,
                  textTransform: "uppercase",
                }}
              >
                Programa analitică pentru studenții ATOM
              </h2>
            </div>
            <div style={{ width: "100%", display: "flex", gap: 70 }}>
              <div
                style={{
                  backgroundColor: "#F1ECEE",
                  width: "50%",
                  padding: 35,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 20,
                }}
              >
                <h1
                  style={{ fontSize: 20, color: "black", textAlign: "center" }}
                >
                  ANUL I
                </h1>
                <div
                  style={{
                    width: "70%",
                    display: "flex",
                    flexDirection: "column",
                    gap: 30,
                    padding: 10,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "start",
                      justifyContent: "start",
                      gap: 20,
                    }}
                  >
                    <Image
                      src="/static/studenti/icons/download.svg"
                      alt="Image 1"
                      width={20} // Specify width
                      height={20} // Specify height
                    />
                    <a
                      style={{
                        gap: 20,
                        fontSize: 16,
                        fontWeight: 700,
                        color: "#66220F",
                        textTransform: "uppercase",
                      }}
                      href="random.pdf"
                      download
                    >
                      Formare Spirituală
                    </a>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "start",
                      justifyContent: "start",
                      gap: 20,
                    }}
                  >
                    <Image
                      src="/static/studenti/icons/download.svg"
                      alt="Image 1"
                      width={20} // Specify width
                      height={20} // Specify height
                    />
                    <a
                      style={{
                        gap: 20,
                        fontSize: 16,
                        fontWeight: 700,
                        color: "#66220F",
                        textTransform: "uppercase",
                      }}
                      href="random.pdf"
                      download
                    >
                      Istoria Bisericească Universală
                    </a>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "start",
                      justifyContent: "start",
                      gap: 20,
                    }}
                  >
                    <Image
                      src="/static/studenti/icons/download.svg"
                      alt="Image 1"
                      width={20} // Specify width
                      height={20} // Specify height
                    />
                    <a
                      style={{
                        gap: 20,
                        fontSize: 16,
                        fontWeight: 700,
                        color: "#66220F",
                        textTransform: "uppercase",
                      }}
                      href="random.pdf"
                      download
                    >
                      Limba Greacă
                    </a>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "start",
                      justifyContent: "start",
                      gap: 20,
                    }}
                  >
                    <Image
                      src="/static/studenti/icons/download.svg"
                      alt="Image 1"
                      width={20} // Specify width
                      height={20} // Specify height
                    />
                    <a
                      style={{
                        gap: 20,
                        fontSize: 16,
                        fontWeight: 700,
                        color: "#66220F",
                        textTransform: "uppercase",
                      }}
                      href="random.pdf"
                      download
                    >
                      Muzica
                    </a>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "start",
                      justifyContent: "start",
                      gap: 20,
                    }}
                  >
                    <Image
                      src="/static/studenti/icons/download.svg"
                      alt="Image 1"
                      width={20} // Specify width
                      height={20} // Specify height
                    />
                    <a
                      style={{
                        gap: 20,
                        fontSize: 16,
                        fontWeight: 700,
                        color: "#66220F",
                        textTransform: "uppercase",
                      }}
                      href="random.pdf"
                      download
                    >
                      Studiul Vechiului Testament
                    </a>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "start",
                      justifyContent: "start",
                      gap: 20,
                    }}
                  >
                    <Image
                      src="/static/studenti/icons/download.svg"
                      alt="Image 1"
                      width={20} // Specify width
                      height={20} // Specify height
                    />
                    <a
                      style={{
                        gap: 20,
                        fontSize: 16,
                        fontWeight: 700,
                        color: "#66220F",
                        textTransform: "uppercase",
                      }}
                      href="random.pdf"
                      download
                    >
                      Tipic Bisericesc
                    </a>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "start",
                      justifyContent: "start",
                      gap: 20,
                    }}
                  >
                    <Image
                      src="/static/studenti/icons/download.svg"
                      alt="Image 1"
                      width={20} // Specify width
                      height={20} // Specify height
                    />
                    <a
                      style={{
                        gap: 20,
                        fontSize: 16,
                        fontWeight: 700,
                        color: "#66220F",
                        textTransform: "uppercase",
                      }}
                      href="random.pdf"
                      download
                    >
                      Limba Engleză
                    </a>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "start",
                      justifyContent: "start",
                      gap: 20,
                    }}
                  >
                    <Image
                      src="/static/studenti/icons/download.svg"
                      alt="Image 1"
                      width={20} // Specify width
                      height={20} // Specify height
                    />
                    <a
                      style={{
                        gap: 20,
                        fontSize: 16,
                        fontWeight: 700,
                        color: "#66220F",
                        textTransform: "uppercase",
                      }}
                      href="random.pdf"
                      download
                    >
                      Limba Franceză
                    </a>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "start",
                      justifyContent: "start",
                      gap: 20,
                    }}
                  >
                    <Image
                      src="/static/studenti/icons/download.svg"
                      alt="Image 1"
                      width={20} // Specify width
                      height={20} // Specify height
                    />
                    <a
                      style={{
                        gap: 20,
                        fontSize: 16,
                        fontWeight: 700,
                        color: "#66220F",
                        textTransform: "uppercase",
                      }}
                      href="random.pdf"
                      download
                    >
                      Practica liturgică
                    </a>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "start",
                      justifyContent: "start",
                      gap: 20,
                    }}
                  >
                    <Image
                      src="/static/studenti/icons/download.svg"
                      alt="Image 1"
                      width={20} // Specify width
                      height={20} // Specify height
                    />
                    <a
                      style={{
                        gap: 20,
                        fontSize: 16,
                        fontWeight: 700,
                        color: "#66220F",
                        textTransform: "uppercase",
                      }}
                      href="random.pdf"
                      download
                    >
                      Limba ebraică
                    </a>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "start",
                      justifyContent: "start",
                      gap: 20,
                    }}
                  >
                    <Image
                      src="/static/studenti/icons/download.svg"
                      alt="Image 1"
                      width={20} // Specify width
                      height={20} // Specify height
                    />
                    <a
                      style={{
                        gap: 20,
                        fontSize: 16,
                        fontWeight: 700,
                        color: "#66220F",
                        textTransform: "uppercase",
                      }}
                      href="random.pdf"
                      download
                    >
                      Limba Latină
                    </a>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "start",
                      justifyContent: "start",
                      gap: 20,
                    }}
                  >
                    <Image
                      src="/static/studenti/icons/download.svg"
                      alt="Image 1"
                      width={20} // Specify width
                      height={20} // Specify height
                    />
                    <a
                      style={{
                        gap: 20,
                        fontSize: 16,
                        fontWeight: 700,
                        color: "#66220F",
                        textTransform: "uppercase",
                      }}
                      href="random.pdf"
                      download
                    >
                      Informatica
                    </a>
                  </div>
                </div>
              </div>
              <div
                style={{
                  backgroundColor: "#F1ECEE",
                  width: "50%",
                  padding: 35,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 20,
                }}
              >
                <h1
                  style={{ fontSize: 20, color: "black", textAlign: "center" }}
                >
                  ANUL II
                </h1>
                <div
                  style={{
                    width: "70%",
                    display: "flex",
                    flexDirection: "column",
                    gap: 30,
                    padding: 10,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "start",
                      justifyContent: "start",
                      gap: 20,
                    }}
                  >
                    <Image
                      src="/static/studenti/icons/download.svg"
                      alt="Image 1"
                      width={20} // Specify width
                      height={20} // Specify height
                    />
                    <a
                      style={{
                        gap: 20,
                        fontSize: 16,
                        fontWeight: 700,
                        color: "#66220F",
                        textTransform: "uppercase",
                      }}
                      href="random.pdf"
                      download
                    >
                      Studiul Noului Testament
                    </a>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "start",
                      justifyContent: "start",
                      gap: 20,
                    }}
                  >
                    <Image
                      src="/static/studenti/icons/download.svg"
                      alt="Image 1"
                      width={20} // Specify width
                      height={20} // Specify height
                    />
                    <a
                      style={{
                        gap: 20,
                        fontSize: 16,
                        fontWeight: 700,
                        color: "#66220F",
                        textTransform: "uppercase",
                      }}
                      href="random.pdf"
                      download
                    >
                      Bizantinologie
                    </a>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "start",
                      justifyContent: "start",
                      gap: 20,
                    }}
                  >
                    <Image
                      src="/static/studenti/icons/download.svg"
                      alt="Image 1"
                      width={20} // Specify width
                      height={20} // Specify height
                    />
                    <a
                      style={{
                        gap: 20,
                        fontSize: 16,
                        fontWeight: 700,
                        color: "#66220F",
                        textTransform: "uppercase",
                      }}
                      href="random.pdf"
                      download
                    >
                      Istoria Bisericii Ortodoxe Române
                    </a>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "start",
                      justifyContent: "start",
                      gap: 20,
                    }}
                  >
                    <Image
                      src="/static/studenti/icons/download.svg"
                      alt="Image 1"
                      width={20} // Specify width
                      height={20} // Specify height
                    />
                    <a
                      style={{
                        gap: 20,
                        fontSize: 16,
                        fontWeight: 700,
                        color: "#66220F",
                        textTransform: "uppercase",
                      }}
                      href="random.pdf"
                      download
                    >
                      Catehetica
                    </a>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "start",
                      justifyContent: "start",
                      gap: 20,
                    }}
                  >
                    <Image
                      src="/static/studenti/icons/download.svg"
                      alt="Image 1"
                      width={20} // Specify width
                      height={20} // Specify height
                    />
                    <a
                      style={{
                        gap: 20,
                        fontSize: 16,
                        fontWeight: 700,
                        color: "#66220F",
                        textTransform: "uppercase",
                      }}
                      href="random.pdf"
                      download
                    >
                      PATROLOGIE
                    </a>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "start",
                      justifyContent: "start",
                      gap: 20,
                    }}
                  >
                    <Image
                      src="/static/studenti/icons/download.svg"
                      alt="Image 1"
                      width={20} // Specify width
                      height={20} // Specify height
                    />
                    <a
                      style={{
                        gap: 20,
                        fontSize: 16,
                        fontWeight: 700,
                        color: "#66220F",
                        textTransform: "uppercase",
                      }}
                      href="random.pdf"
                      download
                    >
                      Pedagogie
                    </a>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "start",
                      justifyContent: "start",
                      gap: 20,
                    }}
                  >
                    <Image
                      src="/static/studenti/icons/download.svg"
                      alt="Image 1"
                      width={20} // Specify width
                      height={20} // Specify height
                    />
                    <a
                      style={{
                        gap: 20,
                        fontSize: 16,
                        fontWeight: 700,
                        color: "#66220F",
                        textTransform: "uppercase",
                      }}
                      href="random.pdf"
                      download
                    >
                      Psihologia
                    </a>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "start",
                      justifyContent: "start",
                      gap: 20,
                    }}
                  >
                    <Image
                      src="/static/studenti/icons/download.svg"
                      alt="Image 1"
                      width={20} // Specify width
                      height={20} // Specify height
                    />
                    <a
                      style={{
                        gap: 20,
                        fontSize: 16,
                        fontWeight: 700,
                        color: "#66220F",
                        textTransform: "uppercase",
                      }}
                      href="random.pdf"
                      download
                    >
                      Retorica
                    </a>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "start",
                      justifyContent: "start",
                      gap: 20,
                    }}
                  >
                    <Image
                      src="/static/studenti/icons/download.svg"
                      alt="Image 1"
                      width={20} // Specify width
                      height={20} // Specify height
                    />
                    <a
                      style={{
                        gap: 20,
                        fontSize: 16,
                        fontWeight: 700,
                        color: "#66220F",
                        textTransform: "uppercase",
                      }}
                      href="random.pdf"
                      download
                    >
                      Practica liturgică
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ width: "100%", display: "flex", gap: 70 }}>
              <div
                style={{
                  backgroundColor: "#F1ECEE",
                  width: "50%",
                  padding: 35,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 20,
                }}
              >
                <h1
                  style={{ fontSize: 20, color: "black", textAlign: "center" }}
                >
                  ANUL III
                </h1>
                <div
                  style={{
                    width: "70%",
                    display: "flex",
                    flexDirection: "column",
                    gap: 30,
                    padding: 10,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "start",
                      justifyContent: "start",
                      gap: 20,
                    }}
                  >
                    <Image
                      src="/static/studenti/icons/download.svg"
                      alt="Image 1"
                      width={20} // Specify width
                      height={20} // Specify height
                    />
                    <a
                      style={{
                        fontSize: 16,
                        fontWeight: 700,
                        color: "#66220F",
                        textTransform: "uppercase",
                      }}
                      href="random.pdf"
                      download
                    >
                      Limba Slavonă
                    </a>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "start",
                      justifyContent: "start",
                      gap: 20,
                    }}
                  >
                    <Image
                      src="/static/studenti/icons/download.svg"
                      alt="Image 1"
                      width={20} // Specify width
                      height={20} // Specify height
                    />
                    <a
                      style={{
                        gap: 20,
                        fontSize: 16,
                        fontWeight: 700,
                        color: "#66220F",
                        textTransform: "uppercase",
                      }}
                      href="random.pdf"
                      download
                    >
                      Liturgica Generală
                    </a>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "start",
                      justifyContent: "start",
                      gap: 20,
                    }}
                  >
                    <Image
                      src="/static/studenti/icons/download.svg"
                      alt="Image 1"
                      width={20} // Specify width
                      height={20} // Specify height
                    />
                    <a
                      style={{
                        gap: 20,
                        fontSize: 16,
                        fontWeight: 700,
                        color: "#66220F",
                        textTransform: "uppercase",
                      }}
                      href="random.pdf"
                      download
                    >
                      Metodica Predării Religiei
                    </a>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "start",
                      justifyContent: "start",
                      gap: 20,
                    }}
                  >
                    <Image
                      src="/static/studenti/icons/download.svg"
                      alt="Image 1"
                      width={20} // Specify width
                      height={20} // Specify height
                    />
                    <a
                      style={{
                        gap: 20,
                        fontSize: 16,
                        fontWeight: 700,
                        color: "#66220F",
                        textTransform: "uppercase",
                      }}
                      href="random.pdf"
                      download
                    >
                      Muzica
                    </a>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "start",
                      justifyContent: "start",
                      gap: 20,
                    }}
                  >
                    <Image
                      src="/static/studenti/icons/download.svg"
                      alt="Image 1"
                      width={20} // Specify width
                      height={20} // Specify height
                    />
                    <a
                      style={{
                        gap: 20,
                        fontSize: 16,
                        fontWeight: 700,
                        color: "#66220F",
                        textTransform: "uppercase",
                      }}
                      href="random.pdf"
                      download
                    >
                      Practica liturgică
                    </a>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "start",
                      justifyContent: "start",
                      gap: 20,
                    }}
                  >
                    <Image
                      src="/static/studenti/icons/download.svg"
                      alt="Image 1"
                      width={20} // Specify width
                      height={20} // Specify height
                    />
                    <a
                      style={{
                        gap: 20,
                        fontSize: 16,
                        fontWeight: 700,
                        color: "#66220F",
                        textTransform: "uppercase",
                      }}
                      href="random.pdf"
                      download
                    >
                      Sectologie
                    </a>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "start",
                      justifyContent: "start",
                      gap: 20,
                    }}
                  >
                    <Image
                      src="/static/studenti/icons/download.svg"
                      alt="Image 1"
                      width={20} // Specify width
                      height={20} // Specify height
                    />
                    <a
                      style={{
                        gap: 20,
                        fontSize: 16,
                        fontWeight: 700,
                        color: "#66220F",
                        textTransform: "uppercase",
                      }}
                      href="random.pdf"
                      download
                    >
                      Teologia Dogmatică
                    </a>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "start",
                      justifyContent: "start",
                      gap: 20,
                    }}
                  >
                    <Image
                      src="/static/studenti/icons/download.svg"
                      alt="Image 1"
                      width={20} // Specify width
                      height={20} // Specify height
                    />
                    <a
                      style={{
                        gap: 20,
                        fontSize: 16,
                        fontWeight: 700,
                        color: "#66220F",
                        textTransform: "uppercase",
                      }}
                      href="random.pdf"
                      download
                    >
                      Omiletica
                    </a>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "start",
                      justifyContent: "start",
                      gap: 20,
                    }}
                  >
                    <Image
                      src="/static/studenti/icons/download.svg"
                      alt="Image 1"
                      width={20} // Specify width
                      height={20} // Specify height
                    />
                    <a
                      style={{
                        gap: 20,
                        fontSize: 16,
                        fontWeight: 700,
                        color: "#66220F",
                        textTransform: "uppercase",
                      }}
                      href="random.pdf"
                      download
                    >
                      Teologia Morală
                    </a>
                  </div>
                </div>
              </div>
              <div
                style={{
                  backgroundColor: "#F1ECEE",
                  width: "50%",
                  padding: 35,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 20,
                }}
              >
                <h1
                  style={{ fontSize: 20, color: "black", textAlign: "center" }}
                >
                  ANUL IV
                </h1>
                <div
                  style={{
                    width: "70%",
                    display: "flex",
                    flexDirection: "column",
                    gap: 30,
                    padding: 10,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "start",
                      justifyContent: "start",
                      gap: 20,
                    }}
                  >
                    <Image
                      src="/static/studenti/icons/download.svg"
                      alt="Image 1"
                      width={20} // Specify width
                      height={20} // Specify height
                    />
                    <a
                      style={{
                        gap: 20,
                        fontSize: 16,
                        fontWeight: 700,
                        color: "#66220F",
                        textTransform: "uppercase",
                      }}
                      href="random.pdf"
                      download
                    >
                      Teologia Pastorala
                    </a>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "start",
                      justifyContent: "start",
                      gap: 20,
                    }}
                  >
                    <Image
                      src="/static/studenti/icons/download.svg"
                      alt="Image 1"
                      width={20} // Specify width
                      height={20} // Specify height
                    />
                    <a
                      style={{
                        gap: 20,
                        fontSize: 16,
                        fontWeight: 700,
                        color: "#66220F",
                        textTransform: "uppercase",
                      }}
                      href="random.pdf"
                      download
                    >
                      Apologetica
                    </a>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "start",
                      justifyContent: "start",
                      gap: 20,
                    }}
                  >
                    <Image
                      src="/static/studenti/icons/download.svg"
                      alt="Image 1"
                      width={20} // Specify width
                      height={20} // Specify height
                    />
                    <a
                      style={{
                        gap: 20,
                        fontSize: 16,
                        fontWeight: 700,
                        color: "#66220F",
                        textTransform: "uppercase",
                      }}
                      href="random.pdf"
                      download
                    >
                      Drept Canonic
                    </a>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "start",
                      justifyContent: "start",
                      gap: 20,
                    }}
                  >
                    <Image
                      src="/static/studenti/icons/download.svg"
                      alt="Image 1"
                      width={20} // Specify width
                      height={20} // Specify height
                    />
                    <a
                      style={{
                        gap: 20,
                        fontSize: 16,
                        fontWeight: 700,
                        color: "#66220F",
                        textTransform: "uppercase",
                      }}
                      href="random.pdf"
                      download
                    >
                      Arta Creștină
                    </a>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "start",
                      justifyContent: "start",
                      gap: 20,
                    }}
                  >
                    <Image
                      src="/static/studenti/icons/download.svg"
                      alt="Image 1"
                      width={20} // Specify width
                      height={20} // Specify height
                    />
                    <a
                      style={{
                        gap: 20,
                        fontSize: 16,
                        fontWeight: 700,
                        color: "#66220F",
                        textTransform: "uppercase",
                      }}
                      href="random.pdf"
                      download
                    >
                      Îndrumări Misionare
                    </a>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "start",
                      justifyContent: "start",
                      gap: 20,
                    }}
                  >
                    <Image
                      src="/static/studenti/icons/download.svg"
                      alt="Image 1"
                      width={20} // Specify width
                      height={20} // Specify height
                    />
                    <a
                      style={{
                        gap: 20,
                        fontSize: 16,
                        fontWeight: 700,
                        color: "#66220F",
                        textTransform: "uppercase",
                      }}
                      href="random.pdf"
                      download
                    >
                      Omiletica
                    </a>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "start",
                      justifyContent: "start",
                      gap: 20,
                    }}
                  >
                    <Image
                      src="/static/studenti/icons/download.svg"
                      alt="Image 1"
                      width={20} // Specify width
                      height={20} // Specify height
                    />
                    <a
                      style={{
                        gap: 20,
                        fontSize: 16,
                        fontWeight: 700,
                        color: "#66220F",
                        textTransform: "uppercase",
                      }}
                      href="random.pdf"
                      download
                    >
                      Practica Misionară
                    </a>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "start",
                      justifyContent: "start",
                      gap: 20,
                    }}
                  >
                    <Image
                      src="/static/studenti/icons/download.svg"
                      alt="Image 1"
                      width={20} // Specify width
                      height={20} // Specify height
                    />
                    <a
                      style={{
                        gap: 20,
                        fontSize: 16,
                        fontWeight: 700,
                        color: "#66220F",
                        textTransform: "uppercase",
                      }}
                      href="random.pdf"
                      download
                    >
                      Practica Liturgică
                    </a>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "start",
                      justifyContent: "start",
                      gap: 20,
                    }}
                  >
                    <Image
                      src="/static/studenti/icons/download.svg"
                      alt="Image 1"
                      width={20} // Specify width
                      height={20} // Specify height
                    />
                    <a
                      style={{
                        gap: 20,
                        fontSize: 16,
                        fontWeight: 700,
                        color: "#66220F",
                        textTransform: "uppercase",
                      }}
                      href="random.pdf"
                      download
                    >
                      Istoria și Filozofia Religiilor
                    </a>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "start",
                      justifyContent: "start",
                      gap: 20,
                    }}
                  >
                    <Image
                      src="/static/studenti/icons/download.svg"
                      alt="Image 1"
                      width={20} // Specify width
                      height={20} // Specify height
                    />
                    <a
                      style={{
                        gap: 20,
                        fontSize: 16,
                        fontWeight: 700,
                        color: "#66220F",
                        textTransform: "uppercase",
                      }}
                      href="random.pdf"
                      download
                    >
                      Teologia Morala
                    </a>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "start",
                      justifyContent: "start",
                      gap: 20,
                    }}
                  >
                    <Image
                      src="/static/studenti/icons/download.svg"
                      alt="Image 1"
                      width={20} // Specify width
                      height={20} // Specify height
                    />
                    <a
                      style={{
                        gap: 20,
                        fontSize: 16,
                        fontWeight: 700,
                        color: "#66220F",
                        textTransform: "uppercase",
                      }}
                      href="random.pdf"
                      download
                    >
                      Ecumenism și secularizare
                    </a>
                  </div>
                </div>
              </div>
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
