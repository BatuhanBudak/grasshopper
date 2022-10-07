import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <footer className="footer ">
      <div className="footer__container">
        <div className="footer__nav footer__nav--main">
          <ul className="footer__nav__links">
            <li className="footer__nav__link ">
              <a href="" className="link">
                <span className="link__label">
                  <span className="link__label__label">Home</span>
                </span>
              </a>
            </li>
            <li className="footer__nav__link ">
              <a href="why-coding" className="link">
                <span className="link__label">
                  <span className="link__label__label">What is coding</span>
                </span>
              </a>
            </li>
            <li className="footer__nav__link ">
              <a href="" className="link">
                <span className="link__label">
                  <span className="link__label__label">About</span>
                </span>
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__nav footer__nav--link-nav footer__nav--resource">
          <ul className="footer__nav__links">
            <li className="footer__nav__link ">
              <a href="mailto:grasshopper-support@google.com" className="link">
                <span className="link__label">
                  <span className="link__label__label">Email us</span>
                </span>
              </a>
            </li>
            <li className="footer__nav__link ">
              <a href="" className="link">
                <span className="link__label">
                  <span className="link__label__label">FAQ</span>
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__nav footer__nav--link-nav footer__nav--legal">
          <ul className="footer__nav__links">
            <li className="footer__nav__link ">
              <a href="https://www.google.com/policies/terms/" className="link">
                <span className="link__label">
                  <span className="link__label__label">Terms of service</span>
                </span>
              </a>
            </li>
            <li className="footer__nav__link ">
              <a href="https://policies.google.com/privacy" className="link">
                <span className="link__label">
                  <span className="link__label__label">Privacy policy</span>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__container">
        <div className="footer__logo">
          <a
            href="https://g.co/codewithgoogle"
            target="_blank"
            rel="noreferrer"
          >
            <div className="footer__logo__container">
              <Image
                src="/code-with-google.v2.png"
                alt="Grasshopper Logo"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
}
