import { motion } from "framer-motion";
let variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },

  first: {
    rotate: "-25deg",
  },
  second: {
    rotate: "-29deg",
  },
  third: {
    rotate: "-345deg",
  },
  fourth: {
    rotate: "-332deg",
  },
  fifth: {
    rotate: "7deg",
  },
  sixth: {
    rotate: "-29deg",
  },
  seventh: {
    rotate: "-4deg",
  },
  eigth: {
    rotate: "-11deg",
  },
  nineth: {
    rotate: "-30deg",
  },
  tenth: {
    rotate: "-345deg",
  },
  eleventh: {
    rotate: "-106deg",
  },
  boxFirst: {
    rotate: "-15deg",
    opacity: 0.5,
  },
  boxSecond: {
    rotate: "-315deg",
    opacity: 0.21,
  },
};

export const SquareOne = () => (
  <motion.svg
    variants={variants}
    initial="hidden"
    whileInView={["visible", "first"]}
    viewport={{ once: true, amount: 0.65 }}
    className="section-animated-background__svg-square section-animated-background__svg-square--1"
    width="50px"
    height="50px"
    viewBox="0 0 50 50"
  >
    <rect
      className="section-animated-background__square"
      x="0.77398322"
      y="0.397442376"
      width="50"
      height="50"
    ></rect>
  </motion.svg>
);

export const SquareSecond = () => (
  <motion.svg
    variants={variants}
    initial="hidden"
    whileInView={["visible", "second"]}
    viewport={{ once: true, amount: 0.65 }}
    className="section-animated-background__svg-square section-animated-background__svg-square--2"
    width="50px"
    height="50px"
    viewBox="0 0 50 50"
  >
    <rect
      className="section-animated-background__square"
      x="0.77398322"
      y="0.397442376"
      width="50"
      height="50"
    ></rect>
  </motion.svg>
);

export const SquareThird = () => (
  <motion.svg
    variants={variants}
    initial="hidden"
    whileInView={["visible", "third"]}
    viewport={{ once: true, amount: 0.65 }}
    className="section-animated-background__svg-square section-animated-background__svg-square--3"
    width="50px"
    height="50px"
    viewBox="0 0 50 50"
  >
    <rect
      className="section-animated-background__square"
      x="0.77398322"
      y="0.397442376"
      width="50"
      height="50"
    ></rect>
  </motion.svg>
);

export const SquareFourth = () => (
  <motion.svg
    variants={variants}
    initial="hidden"
    whileInView={["visible", "fourth"]}
    viewport={{ once: true, amount: 0.65 }}
    className="section-animated-background__svg-square section-animated-background__svg-square--4"
    width="50px"
    height="50px"
    viewBox="0 0 50 50"
  >
    <rect
      className="section-animated-background__square"
      x="0.77398322"
      y="0.397442376"
      width="50"
      height="50"
    ></rect>
  </motion.svg>
);

export const SquareFifth = () => (
  <motion.svg
    variants={variants}
    initial="hidden"
    whileInView={["visible", "fifth"]}
    viewport={{ once: true, amount: 0.65 }}
    className="section-animated-background__svg-square section-animated-background__svg-square--5"
    width="50px"
    height="50px"
    viewBox="0 0 50 50"
  >
    <rect
      className="section-animated-background__square"
      x="0.77398322"
      y="0.397442376"
      width="50"
      height="50"
    ></rect>
  </motion.svg>
);
export const SquareSixth = () => (
  <motion.svg
    variants={variants}
    initial="hidden"
    whileInView={["visible", "sixth"]}
    viewport={{ once: true, amount: 0.65 }}
    className="section-animated-background__svg-square section-animated-background__svg-square--6"
    width="50px"
    height="50px"
    viewBox="0 0 50 50"
  >
    <rect
      className="section-animated-background__square"
      x="0.77398322"
      y="0.397442376"
      width="50"
      height="50"
    ></rect>
  </motion.svg>
);

export const SquareSeventh = () => (
  <motion.svg
    variants={variants}
    initial="hidden"
    whileInView={["visible", "seventh"]}
    viewport={{ once: true, amount: 0.65 }}
    className="section-animated-background__svg-square section-animated-background__svg-square--7"
    width="50px"
    height="50px"
    viewBox="0 0 50 50"
  >
    <rect
      className="section-animated-background__square"
      x="0.77398322"
      y="0.397442376"
      width="50"
      height="50"
    ></rect>
  </motion.svg>
);

export const SquareEigth = () => (
  <motion.svg
    variants={variants}
    initial="hidden"
    whileInView={["visible", "eigth"]}
    viewport={{ once: true, amount: 0.65 }}
    className="section-animated-background__svg-square section-animated-background__svg-square--8"
    width="50px"
    height="50px"
    viewBox="0 0 50 50"
  >
    <rect
      className="section-animated-background__square"
      x="0.77398322"
      y="0.397442376"
      width="50"
      height="50"
    ></rect>
  </motion.svg>
);

export const SquareNinth = () => (
  <motion.svg
    variants={variants}
    initial="hidden"
    whileInView={["visible", "nineth"]}
    viewport={{ once: true, amount: 0.65 }}
    className="section-animated-background__svg-square section-animated-background__svg-square--9"
    width="50px"
    height="50px"
    viewBox="0 0 50 50"
  >
    <rect
      className="section-animated-background__square"
      x="0.77398322"
      y="0.397442376"
      width="50"
      height="50"
    ></rect>
  </motion.svg>
);

export const SquareTenth = () => (
  <motion.svg
    variants={variants}
    initial="hidden"
    whileInView={["visible", "tenth"]}
    viewport={{ once: true, amount: 0.65 }}
    className="section-animated-background__svg-square section-animated-background__svg-square--10"
    width="50px"
    height="50px"
    viewBox="0 0 50 50"
  >
    <rect
      className="section-animated-background__square"
      x="0.77398322"
      y="0.397442376"
      width="50"
      height="50"
    ></rect>
  </motion.svg>
);

export const SquareEleventh = () => (
  <motion.svg
    variants={variants}
    initial="hidden"
    whileInView={["visible", "eleventh"]}
    viewport={{ once: true, amount: 0.65 }}
    className="section-animated-background__svg-square section-animated-background__svg-square--11"
    width="50px"
    height="50px"
    viewBox="0 0 50 50"
  >
    <rect
      className="section-animated-background__square"
      x="0.77398322"
      y="0.397442376"
      width="50"
      height="50"
    ></rect>
  </motion.svg>
);

export const BoxFirst = () => (
  <motion.svg
    variants={variants}
    initial="hidden"
    whileInView={["visible", "boxFirst"]}
    viewport={{ once: true, amount: 0.65 }}
    className="section-animated-background__svg-box section-animated-background__svg-box--1"
    width="190px"
    height="190px"
    fill="#e7e7e7"
    viewBox="0 0 190 190"
  >
    <defs>
      <rect
        id="path-1"
        x="1"
        y="1"
        width="17.2335861"
        height="17.2335861"
      ></rect>
      <rect
        id="path-2"
        x="1"
        y="173.335861"
        width="17.2335861"
        height="17.2335861"
      ></rect>
      <rect
        id="path-3"
        x="173.335861"
        y="1"
        width="17.2335861"
        height="17.2335861"
      ></rect>
      <rect
        id="path-4"
        x="173.335861"
        y="173.335861"
        width="17.2335861"
        height="17.2335861"
      ></rect>
    </defs>
    <g
      id="Group-4-Copy-2"
      stroke="none"
      strokeWidth="1"
      fill="none"
      fillRule="evenodd"
    >
      <rect
        id="Rectangle"
        stroke="#B9B9B9"
        strokeWidth="2"
        transform="translate(95.784724, 95.784724) rotate(-360.000000) translate(-95.784724, -95.784724) "
        x="8.4625948"
        y="8.4625948"
        width="174.644258"
        height="174.644258"
      ></rect>
      <g id="Rectangle-2">
        <use xlinkHref="#path-1"></use>
        <rect
          fill="#4A4A4A"
          fillRule="evenodd"
          stroke="#4A4A4A"
          strokeWidth="2"
          x="2"
          y="2"
          width="15.2335861"
          height="15.2335861"
        ></rect>
      </g>
      <g id="Rectangle-2-Copy-2">
        <use xlinkHref="#path-2"></use>
        <rect
          fill="#4A4A4A"
          fillRule="evenodd"
          stroke="#4A4A4A"
          strokeWidth="2"
          x="2"
          y="174.335861"
          width="15.2335861"
          height="15.2335861"
        ></rect>
      </g>
      <g id="Rectangle-2-Copy">
        <use xlinkHref="#path-3"></use>
        <rect
          fill="#4A4A4A"
          fillRule="evenodd"
          stroke="#4A4A4A"
          strokeWidth="2"
          x="174.335861"
          y="2"
          width="15.2335861"
          height="15.2335861"
        ></rect>
      </g>
      <g id="Rectangle-2-Copy-3">
        <use xlinkHref="#path-4"></use>
        <rect
          fill="#4A4A4A"
          fillRule="evenodd"
          stroke="#4A4A4A"
          strokeWidth="2"
          x="174.335861"
          y="174.335861"
          width="15.2335861"
          height="15.2335861"
        ></rect>
      </g>
    </g>
  </motion.svg>
);

export const BoxSecond = () => (
  <motion.svg
    variants={variants}
    initial="hidden"
    whileInView={["visible", "boxSecond"]}
    viewport={{ once: true, amount: 0.65 }}
    className="section-animated-background__svg-box section-animated-background__svg-box--2"
    width="190px"
    height="190px"
    viewBox="0 0 190 190"
  >
    <defs>
      <rect
        id="path-1"
        x="1"
        y="1"
        width="17.2335861"
        height="17.2335861"
      ></rect>
      <rect
        id="path-2"
        x="1"
        y="173.335861"
        width="17.2335861"
        height="17.2335861"
      ></rect>
      <rect
        id="path-3"
        x="173.335861"
        y="1"
        width="17.2335861"
        height="17.2335861"
      ></rect>
      <rect
        id="path-4"
        x="173.335861"
        y="173.335861"
        width="17.2335861"
        height="17.2335861"
      ></rect>
    </defs>
    <g
      id="Group-4-Copy-2"
      stroke="none"
      strokeWidth="1"
      fill="none"
      fillRule="evenodd"
    >
      <rect
        id="Rectangle"
        stroke="#B9B9B9"
        strokeWidth="2"
        transform="translate(95.784724, 95.784724) rotate(-360.000000) translate(-95.784724, -95.784724) "
        x="8.4625948"
        y="8.4625948"
        width="174.644258"
        height="174.644258"
      ></rect>
      <g id="Rectangle-2">
        <use xlinkHref="#path-1"></use>
        <rect
          fill="#4A4A4A"
          fillRule="evenodd"
          stroke="#4A4A4A"
          strokeWidth="2"
          x="2"
          y="2"
          width="15.2335861"
          height="15.2335861"
        ></rect>
      </g>
      <g id="Rectangle-2-Copy-2">
        <use xlinkHref="#path-2"></use>
        <rect
          fill="#4A4A4A"
          fillRule="evenodd"
          stroke="#4A4A4A"
          strokeWidth="2"
          x="2"
          y="174.335861"
          width="15.2335861"
          height="15.2335861"
        ></rect>
      </g>
      <g id="Rectangle-2-Copy">
        <use xlinkHref="#path-3"></use>
        <rect
          fill="#4A4A4A"
          fillRule="evenodd"
          stroke="#4A4A4A"
          strokeWidth="2"
          x="174.335861"
          y="2"
          width="15.2335861"
          height="15.2335861"
        ></rect>
      </g>
      <g id="Rectangle-2-Copy-3">
        <use xlinkHref="#path-4"></use>
        <rect
          fill="#4A4A4A"
          fillRule="evenodd"
          stroke="#4A4A4A"
          strokeWidth="2"
          x="174.335861"
          y="174.335861"
          width="15.2335861"
          height="15.2335861"
        ></rect>
      </g>
    </g>
  </motion.svg>
);
