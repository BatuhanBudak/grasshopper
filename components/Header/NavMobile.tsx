import React from "react";
import { Hamburger } from "../../Icons";
import NavDrawer from "./NavDrawer";
// import { MobileNavMenuIcon } from "../Icon";
export default function NavMobile({ toggleDrawer, drawerOpen }) {
  return (
    <nav className="nav nav--mobile">
      {/* <a href="" className="nav__menu-icon">

      </a> */}
      <button
        type="button"
        className="nav__toggle"
        aria-expanded={drawerOpen}
        aria-controls="mobile-nav-primary"
        aria-label="toggle nav"
        onClick={() => {
          toggleDrawer();
        }}
      >
        <Hamburger />
      </button>
      <NavDrawer drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} />
    </nav>
  );
}
