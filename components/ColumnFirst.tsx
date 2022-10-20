import { motion } from "framer-motion";
import React from "react";

export default function ColumnFirst() {
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
    <section className="section-columns section-columns--full-width section-columns--learn-to-code section-columns--turquoise ">
      <div className="section-columns__background-images background-images">
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="section-columns__background-images__image background-images__image background-images__image--grasshopper-meditate"
        ></motion.div>
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="section-columns__background-images__image background-images__image background-images__image--devices"
        ></motion.div>
      </div>
      <div className="section-columns__container">
        <div className="section-columns__column section-columns__column--one-column">
          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="section-columns__column__title"
          >
            Learn to code anywhere.
          </motion.div>

          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="section-columns__column__body"
          >
            Grasshopper is available on Android and all web browsers. Your
            progress syncs seamlessly between devices.
          </motion.div>
        </div>
      </div>
    </section>
  );
}
