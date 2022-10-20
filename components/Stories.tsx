import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import { motion } from "framer-motion";

export default class Carousel extends Component {
  render() {
    let variants = {
      hidden: { opacity: 0, y: "20%" },
      visible: {
        opacity: 1,
        y: "0",
        transition: {
          duration: 0.5,
        },
      },
    };

    const settings = {
      dots: false,
      infinite: true,
      arrows: false,
      speed: 2000,
      autoplay: true,
      autoSpeed: 4000,
      centerPadding: "70px",
      swipeToSlide: true,
      cssEase: "ease-in-out",
      initialSlide: 0,
      centerMode: true,
      responsive: [
        {
          breakpoint: 3500,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 3000,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 2000,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerPadding: "10px",
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },

        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <section className="section-stories section-stories--light-grey ng-scope">
        <div className="section-stories__container" role="toolbar">
          <div className="section-stories__header">
            <motion.h2
              variants={variants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="section-stories__title"
            >
              Grasshopper stories
            </motion.h2>
          </div>

          <Slider className="section-stories__group" {...settings}>
            <div>
              <div
                className="section-stories__item section-stories__item--0 slick-slide slick-current slick-active slick-center"
                aria-describedby="slick-slide00"
              >
                <div className="section-stories__item__image">
                  <div className="section-stories__item__image__container">
                    <Image
                      src="/user1.jpg"
                      alt=""
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </div>
                <div className="section-stories__item__content">
                  <div className="section-stories__item__body">
                    Grasshopper showed me that no matter what or who or how I
                    look, anyone can learn how to code. It’s exciting. It opens
                    up a whole new world for me.
                  </div>
                  <div className="section-stories__item__customer_name">
                    Ismael
                  </div>
                  <div className="section-stories__item__customer_location"></div>
                </div>
              </div>
            </div>
            <div>
              <div
                className="section-stories__item section-stories__item--1 slick-slide"
                aria-describedby="slick-slide01"
              >
                <div className="section-stories__item__image">
                  <div className="section-stories__item__image__container">
                    <Image
                      src="/user2.jpg"
                      alt=""
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </div>
                <div className="section-stories__item__content">
                  <div className="section-stories__item__body">
                    I like Grasshopper because it allows anyone with or without
                    experience in coding to jump right in and have fun along the
                    way.
                  </div>
                  <div className="section-stories__item__customer_name">
                    Brianna
                  </div>
                  <div className="section-stories__item__customer_location"></div>
                </div>
              </div>
            </div>
            <div>
              <div
                className="section-stories__item section-stories__item--2 slick-slide"
                aria-describedby="slick-slide02"
              >
                <div className="section-stories__item__image">
                  <div className="section-stories__item__image__container">
                    <Image
                      src="/user3.jpg"
                      alt=""
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </div>
                <div className="section-stories__item__content">
                  <div className="section-stories__item__body">
                    Grasshopper helped me achieve basic understanding of coding.
                    Now, I know that I can see myself in this field.
                  </div>
                  <div className="section-stories__item__customer_name">
                    Zhamal
                  </div>
                  <div className="section-stories__item__customer_location"></div>
                </div>
              </div>
            </div>
            <div>
              <div
                className="section-stories__item section-stories__item--3 slick-slide"
                aria-describedby="slick-slide03"
              >
                <div className="section-stories__item__image">
                  <div className="section-stories__item__image__container">
                    <Image
                      src="/user4.jpg"
                      alt=""
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </div>
                <div className="section-stories__item__content">
                  <div className="section-stories__item__body">
                    This is the most user-friendly interactive app [where]
                    challenges are structured like fill-in-the-blanks puzzles
                    [and] animations and confetti ... demonstrate how code can
                    bring things to life.
                  </div>
                  <div className="section-stories__item__customer_name">
                    Alverson
                  </div>
                  <div className="section-stories__item__customer_location"></div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
    );
  }
}
