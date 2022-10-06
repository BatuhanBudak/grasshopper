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
    </section>
  );
}
