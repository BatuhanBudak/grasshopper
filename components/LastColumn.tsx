import { motion } from "framer-motion";
import React from "react";

export default function LastColumn() {
  let variants = {
    hidden: { opacity: 0, y: "20%" },
    visible: {
      opacity: 1,
      y: "0",
      transition: { duration: 0.6, delay: 0.6 },
    },
    cloudFirst: {
      x: ["0%", "750%", "0%"],
      transition: { duration: 120, repeat: Infinity, ease: "easeInOut" },
    },
    cloudSecond: {
      x: ["0%", "-750%", "0%"],
      transition: { duration: 120, repeat: Infinity, ease: "easeInOut" },
    },
  };
  return (
    <section className="section-columns section-columns--full-width section-columns--get-started section-columns--turquoise">
      <div className="section-columns__background-images background-images">
        <motion.div
          variants={variants}
          initial={{ x: 0 }}
          whileInView="cloudFirst"
          viewport={{ once: true, amount: 0.2 }}
          className="section-columns__background-images__image background-images__image background-images__image--cloud-1"
        ></motion.div>
        <motion.div
          variants={variants}
          initial={{ x: 0 }}
          whileInView="cloudSecond"
          viewport={{ once: true, amount: 0.2 }}
          className="section-columns__background-images__image background-images__image background-images__image--cloud-2"
        ></motion.div>
        <motion.div
          variants={variants}
          initial={{ x: 0 }}
          whileInView="cloudFirst"
          viewport={{ once: true, amount: 0.2 }}
          className="section-columns__background-images__image background-images__image background-images__image--cloud-3"
        ></motion.div>
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="section-columns__background-images__image background-images__image background-images__image--grasshopper-mama"
        ></motion.div>
      </div>
      <div className="section-columns__container">
        <div className="section-columns__column section-columns__column--two-column section-columns__column--mobile-1x1 section-columns__column--large-title">
          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="section-columns__column__title"
          >
            Get started on your adventure in coding with Grasshopper.
          </motion.div>

          <div className="section-columns__column__ctas ctas ctas--desktop">
            <a
              href="https://ghop.page.link/main-cta"
              className="cta__item cta-button start-coding not-ie start-coding--small"
            >
              <span className="cta-button__label">
                <span className="cta-button__label__label">Get Started</span>
              </span>
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.area120.grasshopper"
              className="cta__item cta-button google-play no-left-margin-ie"
            >
              <span className="cta-button__label">
                <span className="cta-button__label__label">Google Play</span>
              </span>
            </a>
          </div>

          <div className="section-columns__column__ctas ctas ctas--mobile">
            <a
              href="https://play.google.com/store/apps/details?id=com.area120.grasshopper"
              className="cta__item cta-button start-coding android"
            >
              <span className="cta-button__label">
                <span className="cta-button__label__label">
                  Start coding today
                </span>
              </span>
            </a>
          </div>
        </div>
        <div className="section-columns__column section-columns__column--two-column section-columns__column--mobile-1x1"></div>
      </div>
    </section>
  );
}
