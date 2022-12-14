export default function NavDesktop() {
  return (
    <>
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
    </>
  );
}
