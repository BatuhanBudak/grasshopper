import Image from "next/image";
import React, { useState } from "react";
import {
  BoxFirst,
  BoxSecond,
  SquareEigth,
  SquareEleventh,
  SquareFifth,
  SquareFourth,
  SquareNinth,
  SquareOne,
  SquareSecond,
  SquareSeventh,
  SquareSixth,
  SquareTenth,
  SquareThird,
} from "./ColumnSecondImgs";

export default function ColumnSecond() {
  const [count, setCount] = useState(1);

  return (
    <section className="section-columns section-columns--feature-carousel section-columns--light-grey">
      <div className="section-animated-background__container">
        <SquareOne />
        <SquareSecond />
        <SquareThird />
        <SquareFourth />
        <SquareFifth />
        <SquareSixth />
        <SquareSeventh />
        <SquareEigth />
        <SquareNinth />
        <SquareTenth />
        <SquareEleventh />
        <BoxFirst />
        <BoxSecond />
      </div>

      <div className="section-columns__container">
        <div className="section-columns__column section-columns__column--two-column section-columns__column--feature-details section-columns__column--desktop-only">
          <div className="section-columns__column__titles section-columns__column__titles--features">
            <div
              className={` ${
                Math.abs(count % 5) === 1
                  ? "section-columns__column__title--active"
                  : "section-columns__column__title--previous"
              } section-columns__column__title section-columns__column__title--visual-puzzles`}
            >
              Visual puzzles develop your problem-solving skills and solidify
              coding concepts.
            </div>
            <div
              className={` ${
                Math.abs(count % 5) === 2
                  ? "section-columns__column__title--active"
                  : "section-columns__column__title--previous"
              } section-columns__column__title section-columns__column__title--laptop-tablet`}
            >
              Put your learning into practice with full projects on your laptop
              or tablet.
            </div>
            <div
              className={` ${
                Math.abs(count % 5) === 3
                  ? "section-columns__column__title--active"
                  : "section-columns__column__title--previous"
              } section-columns__column__title section-columns__column__title--industry-standard`}
            >
              Use industry-standard JavaScript with just a few taps on your
              phone.
            </div>
            <div
              className={` ${
                Math.abs(count % 5) === 4
                  ? "section-columns__column__title--active"
                  : "section-columns__column__title--previous"
              } section-columns__column__title section-columns__column__title--feedback`}
            >
              Real-time feedback guides you like a teacher.
            </div>
            <div
              className={` ${
                Math.abs(count % 5) === 0
                  ? "section-columns__column__title--active"
                  : "section-columns__column__title--previous"
              } section-columns__column__title section-columns__column__title--achievements`}
            >
              Collect achievements as you learn new skills.
            </div>
          </div>
          <div className="section-columns__column__carousel">
            <ul className="carousel__dots">
              <li
                className={`${
                  Math.abs(count % 5) === 1 ? "carousel__dots__dot--active" : ""
                } carousel__dots__dot`}
                onClick={() => setCount(1)}
              ></li>
              <li
                className={`${
                  Math.abs(count % 5) === 2 ? "carousel__dots__dot--active" : ""
                } carousel__dots__dot`}
                onClick={() => setCount(2)}
              ></li>
              <li
                className={`${
                  Math.abs(count % 5) === 3 ? "carousel__dots__dot--active" : ""
                } carousel__dots__dot`}
                onClick={() => setCount(3)}
              ></li>
              <li
                className={`${
                  Math.abs(count % 5) === 4 ? "carousel__dots__dot--active" : ""
                } carousel__dots__dot`}
                onClick={() => setCount(4)}
              ></li>
              <li
                className={`${
                  Math.abs(count % 5) === 0 ? "carousel__dots__dot--active" : ""
                } carousel__dots__dot`}
                onClick={() => setCount(5)}
              ></li>
            </ul>
          </div>
        </div>
        <div className="section-columns__column section-columns__column--two-column section-columns__column--handheld-device section-columns__column--desktop-only">
          <div className="section-columns__column__slides section-columns__column__slides--features-embedded">
            <div
              className={`section-columns__column__slide section-columns__column__slide--0 section-columns__column__slide--hand-with-device ${
                Math.abs(count % 5) === 1
                  ? "section-columns__column__slide--active "
                  : ".section-columns__column__slide--previous "
              } `}
            >
              <Image
                src="/second-column-imgs/slide__device-screen-1.png"
                alt=""
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div
              className={`section-columns__column__slide section-columns__column__slide--1 section-columns__column__slide--laptop ${
                Math.abs(count % 5) === 2
                  ? "section-columns__column__slide--active "
                  : ".section-columns__column__slide--previous "
              }`}
            >
              <Image
                src="/second-column-imgs/slide__device-screen-laptop.png"
                alt=""
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div
              className={`section-columns__column__slide section-columns__column__slide--2 section-columns__column__slide--hand-with-device ${
                Math.abs(count % 5) === 3
                  ? "section-columns__column__slide--active "
                  : ".section-columns__column__slide--previous "
              } `}
            >
              <Image
                src="/second-column-imgs/slide__device-screen-2.png"
                alt=""
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div
              className={`section-columns__column__slide section-columns__column__slide--3 section-columns__column__slide--hand-with-device ${
                Math.abs(count % 5) === 4
                  ? "section-columns__column__slide--active "
                  : ".section-columns__column__slide--previous "
              } `}
            >
              <Image
                src="/second-column-imgs/slide__device-screen-3.png"
                alt=""
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div
              className={`section-columns__column__slide section-columns__column__slide--4 section-columns__column__slide--hand-with-device ${
                Math.abs(count % 5) === 0
                  ? "section-columns__column__slide--active "
                  : ".section-columns__column__slide--previous "
              } `}
            >
              <Image
                src="/second-column-imgs/slide__device-screen-4.png"
                alt=""
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>

        <div className="section-columns__column section-columns__column--one-column section-columns__column--mobile-only">
          <div className="section-columns__column__images">
            <div className="section-columns__column__image section-columns__column__image--ios"></div>
            <div className="section-columns__column__image section-columns__column__image--android">
              <Image
                src="/second-column-imgs/feature__android-1.png"
                alt="Animate"
                layout="intrinsic"
                width="552"
                height="1128"
              />
            </div>
          </div>
          <div className="section-columns__column__title section-columns__column__title--visual-puzzles">
            Visual puzzles develop your problem-solving skills and solidify
            coding concepts.
          </div>
        </div>
        <div className="section-columns__column section-columns__column--one-column section-columns__column--mobile-only">
          <div className="section-columns__column__images">
            <div className="section-columns__column__image section-columns__column__image--ios"></div>
            <div className="section-columns__column__image section-columns__column__image--android">
              <Image
                src="/second-column-imgs/feature__android-2.png"
                alt="animate"
                layout="intrinsic"
                width="552"
                height="1128"
              />
            </div>
          </div>

          <div className="section-columns__column__title section-columns__column__title--industry-standard">
            Use industry-standard JavaScript with just a few taps on your phone.
          </div>
        </div>
        <div className="section-columns__column section-columns__column--one-column section-columns__column--mobile-only">
          <div className="section-columns__column__images">
            <div className="section-columns__column__image section-columns__column__image--ios"></div>
            <div className="section-columns__column__image section-columns__column__image--android">
              <Image
                src="/second-column-imgs/feature__android-3.png"
                alt="animate"
                layout="intrinsic"
                width="552"
                height="1128"
              />
            </div>
          </div>

          <div className="section-columns__column__title section-columns__column__title--feedback">
            Real-time feedback guides you like a teacher.
          </div>
        </div>

        <div className="section-columns__column section-columns__column--one-column section-columns__column--mobile-only">
          <div className="section-columns__column__images">
            <div className="section-columns__column__image section-columns__column__image--ios"></div>
            <div className="section-columns__column__image section-columns__column__image--android">
              <Image
                src="/second-column-imgs/feature__android-4.png"
                alt="animate"
                layout="responsive"
                width={552}
                height={1128}
              />
            </div>
          </div>

          <div className="section-columns__column__title section-columns__column__title--achievements">
            Collect achievements as you learn new skills.
          </div>
        </div>

        <div className="section-columns__column section-columns__column--one-column section-columns__column--mobile-only section-columns__column--max-width">
          <div className="section-columns__column__images">
            <div className="section-columns__column__image">
              <Image
                src="/second-column-imgs/feature__laptop.png"
                alt="animate"
                layout="intrinsic"
                width={712}
                height={356}
              />
            </div>
          </div>

          <div className="section-columns__column__title section-columns__column__title--laptop-tablet">
            Put your learning into practice with full projects on your laptop or
            tablet.
          </div>
        </div>
      </div>
    </section>
  );
}
let variants = {
  enter: () => ({
    x: "-100%",
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: () => ({
    opacity: 0,
  }),
  hidden: {
    opacity: 0,
  },
  visible: { opacity: 1 },
};
