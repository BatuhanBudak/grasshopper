import React, { useEffect, useState } from "react";
import { GrassHopperDrawerLogo } from "../../Icons";

export default function FixedHeader() {
  const [showHeader, setShowHeader] = useState(false);
  const HEADER_HEIGHT = 100;

  useEffect(() => {
    function handleScroll() {
      let currentScroll = window.scrollY;

      if (currentScroll <= HEADER_HEIGHT) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
    }
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`header__container header__container--scroll ${
        showHeader ? "inview" : ""
      }`}
    >
      <div className="nav__logo">
        <a className="nav__drawer__menu__icon" href="">
          <GrassHopperDrawerLogo />
        </a>
      </div>
      <nav className="nav nav__menu">
        <ul role="menubar" className="nav__menu__list">
          <li role="presentation" className="nav__menu__list__item">
            <a role="menuitem" href="" className="nav__menu__list__item__link">
              What is Coding
            </a>
          </li>

          <li
            role="presentation"
            className="nav__menu__list__item  active-link"
          >
            <a role="menuitem" href="" className="nav__menu__list__item__link ">
              Curriculum
            </a>
          </li>
          <li role="presentation" className="nav__menu__list__item">
            <a role="menuitem" href="" className="nav__menu__list__item__link">
              Glossary
            </a>
          </li>
          <li role="presentation" className="nav__menu__list__item">
            <a role="menuitem" href="" className="nav__menu__list__item__link">
              About Us
            </a>
          </li>

          <li role="presentation" className="nav__menu__list__item">
            <a role="menuitem" href="" className="nav__menu__list__item__link">
              FAQ
            </a>
          </li>
        </ul>
      </nav>

      <nav className="nav nav__menu nav__menu--right" aria-label="user-menu">
        <ul role="menubar" className="nav__menu__list">
          <li role="presentation" className="nav__menu__list__item">
            <a role="menuitem" href="" className="nav__menu__list__item__link">
              Sign in
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
