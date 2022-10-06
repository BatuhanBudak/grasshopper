import { useEffect, useRef, useState } from "react";
import useToggle from "../../hooks/useToggle";
import NavDrawer from "./NavDrawer";
import NavMobile from "./NavMobile";
import NavDesktop from "./NavDesktop";
import { Logo, LogoTitleBlue } from "../../Icons";

export default function Header() {
  const [drawerOpen, toggleDrawer] = useToggle();
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMounting, setIsMounting] = useState(true);
  const headerRef = useRef();

  // useEffect(() => {
  //   const header = headerRef.current;

  //   if (isMounting) {
  //     document.body.classList.add("top");
  //     setIsMounting(false);
  //   }
  //   function handleScroll() {
  //     let currentScroll = window.scrollY;

  //     if (currentScroll <= header.getBoundingClientRect().height) {
  //       if (!document.body.classList.contains("top")) {
  //         document.body.classList.add("top");
  //         document.body.classList.remove("scroll-up");
  //         document.body.classList.remove("scroll-down");
  //       }
  //     }
  //     //Scroll Down
  //     else if (currentScroll > lastScrollY) {
  //       document.body.classList.remove("top");
  //       document.body.classList.remove("scroll-up");
  //       document.body.classList.add("scroll-down");
  //     }
  //     //Scroll Up
  //     else if (currentScroll < lastScrollY) {
  //       document.body.classList.remove("top");
  //       document.body.classList.remove("scroll-down");
  //       document.body.classList.add("scroll-up");
  //     }
  //     setLastScrollY(currentScroll);
  //   }
  //   window.addEventListener("scroll", handleScroll);

  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [lastScrollY, headerRef, isMounting]);

  useEffect(() => {
    if (drawerOpen) {
      document.body.classList.add("nav-open");
    } else if (!drawerOpen) {
      document.body.classList.remove("nav-open");
    }
  }, [drawerOpen]);

  return (
    <header ref={headerRef}>
      <div className={`header__container ${drawerOpen ? "drawer-open" : ""}`}>
        <div className="header__logo delay-enable">
          <h1 className="header__logo__title">Grasshopper</h1>
          <a href="">
            <Logo />
            <LogoTitleBlue />
          </a>
        </div>
        <NavMobile toggleDrawer={toggleDrawer} drawerOpen={drawerOpen} />
        <NavDesktop />
      </div>
    </header>
  );
}
