"use client";
import React from "react";
import styles from "./header.module.scss";
import BirdTop from "./svg/bird-top";
import BirdRight from "./svg/bird-right";
import BirdLeft from "./svg/bird-left";
import BottomLineDecor from "./svg/decor-line-bottom";
import TopLineDecor from "./svg/decor-line-top";
import PhoneIcon from "./svg/phone-icon";
import CompaseIcon from "./svg/compase-icon";
import EmailIcon from "./svg/email-icon";
import HeaderLogo from "./svg/logo";
import HeaderGerb from "./svg/gerb";
import ItemSelector from "./svg/item-selector"
import Link from "next/link";

const headerTopItems = [
  { id: 1, itemName: "Pagina principală", itemLink: "/", itemSelector: "" },
  {
    id: 2,
    itemName: "Facultate",
    itemLink: "/",
    itemSelector: <ItemSelector />,
  },
  { id: 3, itemName: "Seminarul", itemLink: "/", itemSelector: "" },
  { id: 4, itemName: "Studenţi", itemLink: "studenti", itemSelector: "" },
  { id: 5, itemName: "Admiterea 2023-2024", itemLink: "/", itemSelector: "" },
  {
    id: 6,
    itemName: "Panou Informativ",
    itemLink: "/",
    itemSelector: <ItemSelector />,
  },
  { id: 7, itemName: "Biblioteca", itemLink: "/", itemSelector: "" },
];

const headerBottomItems = [
  {
    id: 8,
    itemName: "Republica Moldova, mun. Chișinău, str. Izmail 46",
    itemNameMob: "R. Moldova, mun. Chișinău, str. Izmail 46",
    itemLink: "/",
    itemIcon: <CompaseIcon />,
  },
  {
    id: 9,
    itemName: "+373 (022) 54-28-70",
    itemNameMob: "",
    itemLink: " +373022542870",
    itemIcon: <PhoneIcon />,
  },
  {
    id: 10,
    itemName: " teologie.ortodoxa@gmail.com",
    itemNameMob: "",
    itemLink: "/",
    itemIcon: <EmailIcon />,
  },
];

const Index = () => {
  return (
    <section className="flex flex-col w-full">
      <header className={styles.header}>
        <div className={styles.header__wrapper}>
          <span className={styles.header__top_gradient}></span>
          <span className={styles.header__bottom_gradient}></span>
          <div className={styles.header__top}>
            <HeaderGerb />

            <ul className={styles.top__items}>
              {headerTopItems.map((item) => (
                <li key={item.id} className={styles.top__item}>
                  <Link href={`/${item.itemLink}`} className={styles.item__text}>{item.itemName}</Link>{" "}
                  <span className={styles.item__selector}>
                    {item.itemSelector}
                  </span>
                </li>
              ))}
            </ul>
            <HeaderLogo />

            <button type="button" className={styles.burger__button}>
              <span className=""></span>
            </button>
          </div>

          <h1 className={styles.header__title}>
            <BirdTop />
            <TopLineDecor />
            Academia <br />
            de teologie ortodoxă <br />
            din Moldova
            <BottomLineDecor />
            <BirdLeft />
            <BirdRight />
          </h1>

          <div className={styles.header__bottom}>
            <ul className={styles.bottom__items}>
              {headerBottomItems.map((item) => (
                <li key={item.id} className={styles.bottom__item}>
                  <span className={styles.item__icon}>{item.itemIcon}</span>
                  <span className={styles.item__text}>{item.itemName}</span>
                  <span className={styles.item__text_mob}>
                    {item.itemNameMob}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>
      <div className={styles.subheader}>
        <div className={styles.subheader__wrapper}>
          <p className={styles.subheader__text}>
            Instituţia religioasă de învăţămînt uperior „Academia de Teologie
            Ortodoxă din Moldova”, este parte omponentă a cultului religios
            Biserica Ortodoxă din Moldova.
          </p>
          <div className={styles.subheader__image}></div>
        </div>
      </div>
    </section>
  );
};

export default Index;
