import Image from "next/image";
import React from "react";
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
  return (
    <section className="section-columns section-columns--feature-carousel section-columns--light-grey ng-scope">
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
            <div className="section-columns__column__title section-columns__column__title--visual-puzzles section-columns__column__title--active">
              Visual puzzles develop your problem-solving skills and solidify
              coding concepts.
            </div>
            <div className="section-columns__column__title section-columns__column__title--industry-standard">
              Use industry-standard JavaScript with just a few taps on your
              phone.
            </div>
            <div className="section-columns__column__title section-columns__column__title--feedback">
              Real-time feedback guides you like a teacher.
            </div>
            <div className="section-columns__column__title section-columns__column__title--achievements">
              Collect achievements as you learn new skills.
            </div>
          </div>
        </div>
        <div className="section-columns__column section-columns__column--two-column section-columns__column--handheld-device section-columns__column--desktop-only">
          <div className="section-columns__column__slides section-columns__column__slides--features-embedded">
            <div className="section-columns__column__slide section-columns__column__slide--0 section-columns__column__slide--hand-with-device section-columns__column__slide--active section-columns__column__slide--previous">
              <Image
                src="/second-column-imgs/slide__device-screen-1.png"
                alt=""
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="section-columns__column__slide section-columns__column__slide--1 section-columns__column__slide--laptop">
              <Image
                src="/second-column-imgs/slide__device-screen-1.png"
                alt=""
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="section-columns__column__slide section-columns__column__slide--2 section-columns__column__slide--hand-with-device">
              <Image
                src="/second-column-imgs/slide__device-screen-2.png"
                alt=""
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="section-columns__column__slide section-columns__column__slide--3 section-columns__column__slide--hand-with-device">
              <Image
                src="/second-column-imgs/slide__device-screen-3.png"
                alt=""
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="section-columns__column__slide section-columns__column__slide--4 section-columns__column__slide--hand-with-device">
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
