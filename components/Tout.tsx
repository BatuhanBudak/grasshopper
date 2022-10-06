import Image from "next/image";
import React from "react";

export default function Tout() {
  return (
    <section className="section-touts section-touts--light-green">
      <div className="section-touts__container">
        <h2 className="section-touts__title">
          The best way to start your coding adventure.
        </h2>
        <ul className="section-touts__group">
          <li className="section-touts__item section-touts__item--learn">
            <div className="section-touts__item__content">
              <div className="section-touts__item__image">
                <div className="section-touts__item__image__container">
                  <Image
                    src="/tout-images/adventure__waving.svg"
                    alt=""
                    role="presentation"
                    layout="fill"
                  />
                </div>
              </div>
              <div className="section-touts__item__body">
                Learn with fun, quick lessons on your phone that teach you to
                write real JavaScript.
              </div>
            </div>
          </li>
          <li className="section-touts__item section-touts__item--learn">
            <div className="section-touts__item__content">
              <div className="section-touts__item__image">
                <div className="section-touts__item__image__container">
                  <Image
                    src="/tout-images/adventure__journey.svg"
                    alt=""
                    role="presentation"
                    layout="fill"
                  />
                </div>
              </div>
              <div className="section-touts__item__body">
                Move through progressively challenging levels as you develop
                your abilities.
              </div>
            </div>
          </li>
          <li className="section-touts__item section-touts__item--learn">
            <div className="section-touts__item__content">
              <div className="section-touts__item__image">
                <div className="section-touts__item__image__container">
                  <Image
                    src="/tout-images/adventure__coding.svg"
                    alt=""
                    role="presentation"
                    layout="fill"
                  />
                </div>
              </div>
              <div className="section-touts__item__body">
                Graduate with fundamental programming skills for your next step
                as a coder.
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
