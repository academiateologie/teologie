"use client";
import React from "react";
import styles from "./header.module.scss";
import PhoneIcon from "./svg/phone-icon";
import CompaseIcon from "./svg/compase-icon";
import EmailIcon from "./svg/email-icon";
import HeaderLogo from "./svg/logo";
import HeaderGerb from "./svg/gerb";
import ItemSelector from "./svg/item-selector"
import Link from "next/link";

const headerTopItems = [
  { id: 1, itemName: "Pagina principală", itemLink: "/", itemSelector: '' },
  { id: 2, itemName: "Facultate", itemLink: "/", itemSelector: <ItemSelector /> },
  { id: 3, itemName: "Seminarul", itemLink: "/", itemSelector: '' },
  { id: 4, itemName: "Studenţi", itemLink: "/studenti", itemSelector: '' },
  { id: 5, itemName: "Admiterea 2023-2024", itemLink: "/", itemSelector: '' },
  { id: 6, itemName: "Panou Informativ", itemLink: "/", itemSelector: <ItemSelector /> },
  { id: 7, itemName: "Biblioteca", itemLink: "/", itemSelector: '' },
];

const Index = () => {
  const [isHeader, setIsHeader] = React.useState('')

  React.useEffect(()=>{
    const pagePath = window.location.pathname
    console.log("pagePath ", pagePath);
    setIsHeader(pagePath);
  })
  // const headerTitleInit = () => {}

  return (
    <section className="flex flex-col w-full">
      <header className={styles.header}>
        <div className={styles.header__wrapper}>
          <span className={styles.header__top_gradient}></span>
          <span className={styles.header__bottom_gradient}></span>

          <div className={styles.container}>
            <div className={styles.header__top}>
              {/* <HeaderGerb /> */}
              <HeaderLogo />
              <ul className={styles.top__items}>
                {headerTopItems.map((item) => (
                  <li key={item.id} className={styles.top__item}>
                    <Link
                      href={`${item.itemLink}`}
                      className={styles.item__text}
                    >
                      {item.itemName}
                    </Link>{" "}
                    <span className={styles.item__selector}>
                      {item.itemSelector}
                    </span>
                  </li>
                ))}
              </ul>

              <button type="button" className={styles.burger__button}>
                <span className=""></span>
              </button>
            </div>

            {isHeader === "/publicatii" && (
              <h1 className={styles.header__title}>Publicații</h1>
            )}

            {isHeader === "/studenti" && (
              <h1 className={styles.header__title}>Studenţi</h1>
            )}

            {isHeader === "/despre-noi" && (
              <h1 className={styles.header__title}>despre noi</h1>
            )}
          </div>
        </div>
      </header>
    </section>
  );
};

export default Index;
