import React from "react";

export default function Intro() {
  return (
    <section className="hero hero--light-grey ng-scope">
      <div className="hero__background-images background-images">
        <div className="hero__background-images__image background-images__image background-images__image--desktop background-images__image--background-hills initial"></div>
        <div className="hero__background-images__image background-images__image background-images__image--desktop background-images__image--bush-dark background-images__image--bush-dark-2 initial"></div>
        <div
          className="hero__background-images__image background-images__image background-images__image--desktop background-images__image--bush-light initial"
          data-src="/assets/static/images/hero/hero__bush-light.svg"
        ></div>
        <div className="hero__background-images__image background-images__image background-images__image--desktop background-images__image--macbook initial"></div>
        <div className="hero__background-images__image background-images__image background-images__image--desktop background-images__image--tree-dark initial"></div>
        <div className="hero__background-images__image background-images__image background-images__image--desktop background-images__image--tree-skinny initial"></div>
        <div className="hero__background-images__image background-images__image background-images__image--desktop background-images__image--grasshopper initial"></div>
        <div className="hero__background-images__image background-images__image background-images__image--desktop background-images__image--android-device initial"></div>
        <div className="hero__background-images__image background-images__image background-images__image--mobile background-images__image--background-hills"></div>
        <div className="hero__background-images__image background-images__image background-images__image--mobile background-images__image--bush-dark background-images__image--bush-dark-1"></div>
        <div className="hero__background-images__image background-images__image background-images__image--mobile background-images__image--bush-light"></div>
        <div className="hero__background-images__image background-images__image background-images__image--mobile background-images__image--hero_ios"></div>
        <div className="hero__background-images__image background-images__image background-images__image--mobile background-images__image--hero_android"></div>
      </div>
      <div className="hero__container">
        <h1 className="hero__title">
          Welcome to Grasshopper, <br />
          the coding app for beginners
        </h1>
        <div className="hero__subtitle">
          Learning to code{" "}
          <span className="hero__subtitle__options">
            <span className="hero__subtitle__options__wrapper hero__subtitle__options__wrapper--reverse-order">
              <span className="hero__subtitle__options__option">
                opens new doors
              </span>
              <span className="hero__subtitle__options__option">
                creates new hobbies
              </span>
              <span className="hero__subtitle__options__option">
                launches new careers
              </span>
              <span className="hero__subtitle__options__option">
                develops new skills
              </span>
              <span className="hero__subtitle__options__option">
                expands your network
              </span>
              <span className="hero__subtitle__options__option">
                opens new doors
              </span>
              <span className="hero__subtitle__options__option">
                creates new hobbies
              </span>
              <span className="hero__subtitle__options__option">
                launches new careers
              </span>
              <span className="hero__subtitle__options__option">
                develops new skills
              </span>
              <span className="hero__subtitle__options__option">
                expands your network
              </span>
              <span className="hero__subtitle__options__option">
                opens new doors
              </span>
              <span className="hero__subtitle__options__option">
                creates new hobbies
              </span>
              <span className="hero__subtitle__options__option">
                launches new careers
              </span>
              <span className="hero__subtitle__options__option">
                develops new skills
              </span>
              <span className="hero__subtitle__options__option">
                expands your network
              </span>
              <span className="hero__subtitle__options__option">
                opens new doors
              </span>
              <span className="hero__subtitle__options__option">
                creates new hobbies
              </span>
              <span className="hero__subtitle__options__option">
                launches new careers
              </span>
              <span className="hero__subtitle__options__option">
                develops new skills
              </span>
              <span className="hero__subtitle__options__option">
                expands your network
              </span>
            </span>
          </span>
        </div>
        <div className="hero__ctas ctas ctas--desktop">
          <a
            href=""
            className="cta__item cta-button start-coding android not-ie"
          >
            <span className="cta-button__label">
              <span className="cta-button__label__label">
                Start coding today
              </span>
            </span>
          </a>

          <a
            href=""
            className="cta__item cta-button google-play ie-only no-left-margin"
          >
            <span className="cta-button__label">
              <span className="cta-button__label__label">Google Play</span>
            </span>
          </a>
        </div>
        <div className="hero__ctas ctas ctas--mobile">
          <a href="" className="cta__item cta-button start-coding android">
            <span className="cta-button__label">
              <span className="cta-button__label__label">
                Start coding today
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
