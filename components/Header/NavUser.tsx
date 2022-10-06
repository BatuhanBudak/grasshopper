import React from "react";

export default function NavUser() {
  return (
    <nav aria-label="user-menu" className="nav nav--main nav--right">
      <ul role="menubar" className="nav__items">
        <li
          role="presentation"
          className="nav__items__item nav__items__item--not-ie"
        >
          <a role="menuitem" href="https://ghop.page.link/signin-cta">
            Sign In
          </a>
        </li>
        <li
          role="presentation"
          className="nav__items__item nav__items__item--button nav__items__item--ie-only"
        >
          <a role="menuitem" className="button">
            <span className="button__label">Get the App</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
