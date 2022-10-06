import { useEffect, useRef, useState } from "react";
import useToggle from "../../hooks/useToggle";
import NavDrawer from "./NavDrawer";
import NavMobile from "./NavMobile";
import NavDesktop from "./NavDesktop";
import { Logo, LogoTitleBlue } from "../../Icons";
import FixedHeader from "./FixedHeader";

export default function Header() {
  const [drawerOpen, toggleDrawer] = useToggle();

  const headerRef = useRef();

  useEffect(() => {
    if (drawerOpen) {
      document.body.classList.add("nav-open");
    } else if (!drawerOpen) {
      document.body.classList.remove("nav-open");
    }
  }, [drawerOpen]);

  return (
    <header>
      <div className={`header__container ${drawerOpen ? "drawer-open" : ""}`}>
        <div className={`header__logo ${drawerOpen ? "hide" : "delay-enable"}`}>
          <h1 className="header__logo__title">Grasshopper</h1>
          <a href="">
            <Logo />
            <LogoTitleBlue />
          </a>
        </div>
        <NavMobile toggleDrawer={toggleDrawer} drawerOpen={drawerOpen} />
        <NavDesktop />
        <FixedHeader />
      </div>
    </header>
  );
}
