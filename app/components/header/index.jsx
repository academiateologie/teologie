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
import ItemSelector from "./svg/item-selector-white";
import Link from "next/link";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const headerTopItems = [
  {
    id: 1,
    itemName: "Pagina principală",
    itemLink: "/",
    itemSelector: "",
    submenuItems: [],
  },
  {
    id: 2,
    itemName: "Facultate",
    itemLink: "/corp-didactic",
    itemSelector: <ItemSelector />,
    submenuItems: [{ id: 21, submenuItem: "Corp Didactic ATOM", submenuLink: "/corp-didactic" }],
  },
  {
    id: 3,
    itemName: "Seminarul",
    itemLink: "/seminarul",
    itemSelector: "",
    submenuItems: [],
  },
  {
    id: 4,
    itemName: "Studenţi",
    itemLink: "/",
    itemSelector: "",
    submenuItems: [],
  },
  {
    id: 5,
    itemName: "Admiterea 2023-2024",
    itemLink: "/admitere",
    itemSelector: "",
    submenuItems: [],
  },
  {
    id: 6,
    itemName: "Panou Informativ",
    itemLink: "",
    itemSelector: <ItemSelector />,
    submenuItems: [
      { id: 61, submenuItem: "Pentru Studenţi" },
      { id: 62, submenuItem: "Pentru Profesori" },
      { id: 63, submenuItem: "MASTERAT" },
      { id: 64, submenuItem: "Licenţa" },
    ],
  },
  {
    id: 7,
    itemName: "Biblioteca",
    itemLink: "/",
    itemSelector: "",
    submenuItems: [],
  },
];

const headerBottomItems = [
  {
    id: 8,
    itemName: "Republica Moldova, mun. Chișinău, str. Izmail 46",
    itemNameMob: "R. Moldova, mun. Chișinău, str. Izmail 46",
    itemLink: "https://maps.app.goo.gl/WBCY6XKuabaw2e1b8",
    itemIcon: <CompaseIcon />,
  },
  {
    id: 9,
    itemName: "+373 (022) 54-28-70",
    itemNameMob: "",
    itemLink: "tel:+373022542870",
    itemIcon: <PhoneIcon />,
  },
  {
    id: 10,
    itemName: " teologie.ortodoxa@gmail.com",
    itemNameMob: "",
    itemLink: "mailto:teologie.ortodoxa@gmail.com",
    itemIcon: <EmailIcon />,
  },
];

const Index = () => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 600px)",
  });

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [selectorActive, setSelectorActive] = React.useState(false);
  const [isItemActive, setIsItemActive] = React.useState(null);
  const [isSubmenuMobileActive, setIsSubmenuMobileActive] =
    React.useState(false);
  const [isOpenSubmenuMobile, setIsOpenSubmenuMobile] = React.useState(null);

  React.useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  return (
    <section className="flex flex-col w-full relative">
      {isMenuOpen && (
        <div
          className="fixed tablet:hidden top-0 left-0 z-[3] bg-stone-600/50 backdrop-blur-sm w-full h-[100svh]"
          onClick={() => {
            setIsMenuOpen(false);
          }}
        >
          <div
            className="flex flex-col w-full h-auto bg-white absolute top-[50%] -translate-y-[50%]"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            {headerTopItems.map((item) => (
              <motion.div
                key={item.id}
                onTap={() => {
                  setIsSubmenuMobileActive(!isSubmenuMobileActive);
                  setIsOpenSubmenuMobile(item.id);
                }}
              >
                <Link
                  href={item.itemLink}
                  className="relative flex justify-between h-[48rem] w-full items-center pl-[22rem] pr-[40rem] after:content-[''] after:absolute after:top-0 after:left-[6rem] after:w-[96%] after:h-[2rem] after:bg-[#e9e9e9]"
                >
                  <span className="flex justify-between items-center w-full">
                    <span className="text-[18rem] text-[#272b37] inline-flex font-semibold leading-none uppercase">
                      {item.itemName}
                    </span>
                    <motion.span
                      animate={{
                        rotate:
                          isSubmenuMobileActive &&
                          isOpenSubmenuMobile === item.id
                            ? 180
                            : 0,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.itemSelector}
                    </motion.span>
                  </span>
                </Link>
                {isOpenSubmenuMobile === item.id && isSubmenuMobileActive && (
                  <motion.span
                    className="relative bottom-0 w-full flex flex-col font-semibold leading-none uppercase pr-[40rem]"
                    initial={{ height: 0, opacity: 0, right: -300 }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                      right: 0,
                    }}
                    transition={{
                      ease: "easeOut",
                      duration: 1,
                    }}
                  >
                    {item.submenuItems.map((si, idx) => (
                      <motion.span
                        key={idx}
                        className="flex justify-end text-[18rem] text-[#272b37] w-full py-[11rem] transition-all duration-150"
                        initial={{ right: 300 }}
                        animate={{
                          right: 0,
                        }}
                      >
                        {si.submenuItem}
                      </motion.span>
                    ))}
                  </motion.span>
                )}
              </motion.div>
            ))}
            <Link
              href={"https://www.facebook.com/Teologie.MD"}
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
        <div
          className={styles.header__wrapper}
          onClick={() => {
            setSelectorActive(!selectorActive);
            setIsItemActive(null);
          }}
        >
          <div className={styles.header__wrapper_dark} />
          <div
            className={styles.header__top_gradient}
            onClick={() => {
              setSelectorActive(!selectorActive);
              setIsItemActive(null);
            }}
          />
          <span className={styles.header__bottom_gradient}></span>

          <div className={styles.header__top}>
            <Link href="/">
              <HeaderGerb />
            </Link>

            <ul className={styles.top__items}>
              {headerTopItems.map((item, idx) => (
                <Link key={idx} href={`${item.itemLink}`} className="relative">
                  <motion.li
                    className={styles.top__item}
                    onHoverStart={() => {
                      setSelectorActive(!selectorActive);
                      setIsItemActive(item.id);
                    }}
                  >
                    <span className={styles.item__text}>{item.itemName}</span>
                    {isItemActive === item.id ? (
                      <span className={styles.item__selector}>
                        {item.itemSelector}
                      </span>
                    ) : (
                      <span className={styles.item__selector_rotate}>
                        {item.itemSelector}
                      </span>
                    )}
                  </motion.li>
                  {item.id === isItemActive && (
                    <span
                      className={styles.top__item_menu}
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      {item.submenuItems.map((it) => (
                        <li
                          key={it.id}
                          className="text-[10rem] pl-[11rem] w-[100%] hover:cursor-pointer py-[11rem] relative hover:bg-[#2E2914]"
                        >
                          {isDesktop && it.id !== 61 && it.id !== 21 && (
                            <span className={styles.separate__line}></span>
                          )}
                          {it.submenuItem}
                        </li>
                      ))}
                    </span>
                  )}
                </Link>
              ))}
            </ul>

            <Link href="/">
              <HeaderLogo />
            </Link>

            <button
              type="button"
              className={styles.burger__button}
              onClick={() => setIsMenuOpen(true)}
            >
              <span className=""></span>
            </button>
          </div>

          <div className={styles.title__wrapper}>
            <BirdTop />
            <TopLineDecor />
            <h1 className={styles.title}>
              Academia <br />
              de teologie ortodoxă <br />
              din Moldova
            </h1>
            <BottomLineDecor />
            <BirdLeft />
            <BirdRight />
          </div>

          <div className={styles.header__bottom}>
            <div className={styles.bottom__items}>
              {headerBottomItems.map((item) => (
                <a
                  key={item.id}
                  href={item.itemLink}
                  className={styles.bottom__item}
                >
                  <span className={styles.item__icon}>{item.itemIcon}</span>
                  <span className={styles.item__text}>{item.itemName}</span>
                  <span className={styles.item__text_mob}>
                    {item.itemNameMob}
                  </span>
                </a>
              ))}
            </div>
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
