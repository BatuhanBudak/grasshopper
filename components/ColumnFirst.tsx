import React from "react";

export default function ColumnFirst() {
  return (
    <section className="section-columns section-columns--full-width section-columns--learn-to-code section-columns--turquoise ">
      <div className="section-columns__background-images background-images">
        <div className="section-columns__background-images__image background-images__image lazy-image background-images__image--grasshopper-meditate"></div>
        <div className="section-columns__background-images__image background-images__image lazy-image background-images__image--devices"></div>
      </div>
      <div className="section-columns__container">
        <div className="section-columns__column section-columns__column--one-column">
          <div className="section-columns__column__title">
            Learn to code anywhere.
          </div>

          <div className="section-columns__column__body">
            Grasshopper is available on Android and all web browsers. Your
            progress syncs seamlessly between devices.
          </div>
        </div>
      </div>
    </section>
  );
}
