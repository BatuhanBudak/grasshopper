import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export default function Tout() {
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

  return (
    <section className="section-touts section-touts--light-green">
      <div className="section-touts__container">
        <motion.h2
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="section-touts__title"
        >
          The best way to start your coding adventure.
        </motion.h2>
        <ul className="section-touts__group">
          <motion.li
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="section-touts__item section-touts__item--learn"
          >
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
          </motion.li>
          <motion.li
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="section-touts__item section-touts__item--learn"
          >
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
          </motion.li>
          <motion.li
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="section-touts__item section-touts__item--learn"
          >
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
          </motion.li>
        </ul>
      </div>
    </section>
  );
}
