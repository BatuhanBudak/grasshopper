import React, { useEffect, useState } from "react";

export default function Banner() {
  const [isMounted, setisMounted] = useState(false);

  useEffect(() => {
    if (!isMounted) {
      setisMounted(true);
    }
  }, [isMounted]);

  return (
    <div className={`banner ${isMounted ? "--active" : ""}`}>
      <div className={`banner__container ${isMounted ? "--active" : ""}`}>
        <a className="banner__link" href="">
          <span className="banner__link__text">Now available in Spanish!</span>
        </a>{" "}
      </div>
      <div className="banner__container">
        <a className="banner__link" href="">
          <span className="banner__link__text">
            Now available in Portuguese!
          </span>
        </a>{" "}
      </div>
    </div>
  );
}
