"use client";
import React from "react";
import styles from "./header.module.scss";
import PhoneIcon from "./svg/phone-icon";
import CompaseIcon from "./svg/compase-icon";
import EmailIcon from "./svg/email-icon";
import HeaderLogo from "./svg/logo";
import HeaderGerb from "./svg/gerb";
import ItemSelector from "./svg/item-selector";
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
  { id: 4, itemName: "Studenţi", itemLink: "/studenti", itemSelector: "" },
  { id: 5, itemName: "Admiterea 2023-2024", itemLink: "/", itemSelector: "" },
  {
    id: 6,
    itemName: "Panou Informativ",
    itemLink: "/",
    itemSelector: <ItemSelector />,
  },
  { id: 7, itemName: "Biblioteca", itemLink: "/", itemSelector: "" },
];

const Index = () => {
  const [isHeader, setIsHeader] = React.useState("");
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [selectorActive, setSelectorActive] = React.useState(false);
  const [isItemActive, setIsItemActive] = React.useState(null);

  React.useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  React.useEffect(() => {
    const pagePath = window.location.pathname;
    console.log("pagePath ", pagePath);
    setIsHeader(pagePath);
  });

  return (
    <section className="flex flex-col w-full relative">
      {isMenuOpen && (
        <div
          className="fixed tablet:hidden top-0 left-0 z-[3] bg-stone-600/50 backdrop-blur-sm w-full h-full"
          onClick={() => {
            setIsMenuOpen(false);
          }}
        >
          <div
            className="flex flex-col mt-[300rem] w-full h-auto bg-white"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            {headerTopItems.map((item) => (
              <Link
                href={item.itemLink}
                key={item.id}
                className="relative flex justify-between h-[48rem] items-center pl-[22rem] pr-[40rem] after:content-[''] after:absolute after:top-0 after:left-[6rem] after:w-[96%] after:h-[2rem] after:bg-[#e9e9e9]"
                onClick={() => {
                  setSelectorActive(!selectorActive);
                }}
              >
                <span className="text-[18rem] text-[#272b37] inline-flex font-semibold leading-none uppercase">
                  {item.itemName}
                </span>
                <span
                  className={
                    selectorActive ||
                    item.id ||
                    item.itemSelector === ItemSelector
                      ? "rotate-180"
                      : "w-[10rem] h-[8rem]"
                  }
                >
                  {item.itemSelector}
                </span>
              </Link>
            ))}
            <Link
              href={"/"}
              className="relative flex justify-between h-[48rem] items-center after:content-[''] after:absolute after:top-0 after:left-[6rem] after:w-[96%] after:h-[2rem] after:bg-[#e9e9e9]"
            >
              <svg
                className="w-[11rem] h-[20rem] ml-[22rem]"
                viewBox="0 0 11 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.00374 11.2894H0.525557C0.125156 11.2894 0 11.1394 0 10.7639V7.73522C0 7.33482 0.150089 7.20966 0.525557 7.20966H3.00374V5.00672C3.00374 4.00548 3.17876 3.0541 3.67939 2.178C4.20494 1.27698 4.95588 0.676135 5.90726 0.325601C6.53304 0.100222 7.15882 0 7.83446 0H10.2877C10.6382 0 10.7883 0.150089 10.7883 0.500623V3.35427C10.7883 3.70481 10.6382 3.8549 10.2877 3.8549C9.61207 3.8549 8.93593 3.8549 8.26029 3.87983C7.58464 3.87983 7.2341 4.20543 7.2341 4.90601C7.20917 5.65695 7.2341 6.38295 7.2341 7.15882H10.1376C10.538 7.15882 10.6881 7.3089 10.6881 7.70931V10.738C10.6881 11.1384 10.563 11.2635 10.1376 11.2635H7.2341V19.4236C7.2341 19.8489 7.10895 19.9995 6.65819 19.9995H3.5293C3.15383 19.9995 3.00374 19.8494 3.00374 19.474V11.289V11.2894Z"
                  fill="#272B37"
                />
              </svg>
            </Link>
          </div>
        </div>
      )}
      <header className={styles.header}>
        <div className={styles.header__wrapper}>
          <span className={styles.header__top_gradient}></span>
          <span className={styles.header__bottom_gradient}></span>

          <div className={styles.container}>
            <div className={styles.header__top}>
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

              <button
                type="button"
                className={styles.burger__button}
                onClick={() => setIsMenuOpen(true)}
              >
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

            {isHeader === "/galerie-foto" && (
              <h1 className={styles.header__title}>galerie foto</h1>
            )}
          </div>
        </div>
      </header>
    </section>
  );
};

export default Index;
