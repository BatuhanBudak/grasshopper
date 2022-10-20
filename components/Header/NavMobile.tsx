import React from "react";
import { Hamburger } from "../../Icons";
import NavDrawer from "./NavDrawer";

type Props = {
  drawerOpen: boolean;
  toggleDrawer: () => void;
};

export default function NavMobile({ toggleDrawer, drawerOpen }: Props) {
  return (
    <nav className="nav nav--mobile">
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
