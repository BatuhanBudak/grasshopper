// import { MobileNavMenuIcon } from "../Icon";

import { CloseMenu, GrassHopperDrawerLogo } from "../../Icons";

export default function NavDrawer({ drawerOpen, toggleDrawer }) {
  return (
    <div
      className="nav__drawer"
      aria-hidden={!drawerOpen}
      tabIndex={drawerOpen ? 0 : -1}
      role="menu"
    >
      <div className="nav__logo">
        <a className="nav__drawer__menu__icon" href="">
          <GrassHopperDrawerLogo />
        </a>
      </div>
      <button
        type="button"
        className="nav__drawer__menu__close"
        aria-expanded={drawerOpen}
        aria-controls="mobile-nav-primary"
        onClick={() => {
          toggleDrawer();
        }}
      >
        <CloseMenu />
      </button>
      <ul role="menubar" className="nav__drawer__list" id="mobile-nav-primary">
        <li className="nav__drawer__list__item">
          <a className="nav__drawer__list__item__link" href="">
            What is Coding
          </a>
        </li>
        <li className="nav__drawer__list__item">
          <a className="nav__drawer__list__item__link" href="">
            Curriculum
          </a>
        </li>
        <li className="nav__drawer__list__item">
          <a className="nav__drawer__list__item__link" href="">
            Glossary
          </a>
        </li>
        <li className="nav__drawer__list__item">
          <a className="nav__drawer__list__item__link" href="">
            About Us
          </a>
        </li>
        <li className="nav__drawer__list__item">
          <a className="nav__drawer__list__item__link" href="">
            FAQ
          </a>
        </li>

        <li className="nav__drawer__list__item">
          <a className="cta__item cta-button get-the-app android" href="">
            <span className="cta-button__label">
              <span className="cta-button__label__label">Get the App</span>
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
}
