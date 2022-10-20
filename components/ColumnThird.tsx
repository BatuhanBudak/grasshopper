import { motion } from "framer-motion";
import React from "react";

export default function ColumnThird() {
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
    <section className="section-columns section-columns--concepts section-columns--light-grey">
      <div className="section-columns__container">
        <div className="section-columns__column section-columns__column--one-column">
          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="section-columns__column__title"
          >
            Learn concepts that apply to any programming language
          </motion.div>
          <div className="section-columns__column__body section-columns__column__body--row-1">
            <p className="section-columns__column__body__paragraph section-columns__column__body__paragraph--1">
              Control Flow
            </p>
            <p className="section-columns__column__body__paragraph section-columns__column__body__paragraph--2">
              Functions
            </p>
            <p className="section-columns__column__body__paragraph section-columns__column__body__paragraph--3">
              Variables
            </p>
            <p className="section-columns__column__body__paragraph section-columns__column__body__paragraph--4">
              Object Editing
            </p>
            <p className="section-columns__column__body__paragraph section-columns__column__body__paragraph--5">
              Animation
            </p>
            <p className="section-columns__column__body__paragraph section-columns__column__body__paragraph--6">
              Callbacks
            </p>
            <p className="section-columns__column__body__paragraph section-columns__column__body__paragraph--7">
              Array Methods
            </p>
            <p className="section-columns__column__body__paragraph section-columns__column__body__paragraph--8">
              Operators
            </p>
            <p className="section-columns__column__body__paragraph section-columns__column__body__paragraph--9">
              Recursion
            </p>
            <p className="section-columns__column__body__paragraph section-columns__column__body__paragraph--10">
              String Manipulation
            </p>
            <p className="section-columns__column__body__paragraph section-columns__column__body__paragraph--11">
              Loops
            </p>
            <p className="section-columns__column__body__paragraph section-columns__column__body__paragraph--12">
              Execution Order
            </p>
            <p className="section-columns__column__body__paragraph section-columns__column__body__paragraph--13">
              Function Declaration
            </p>
            <p className="section-columns__column__body__paragraph section-columns__column__body__paragraph--14">
              If Statements
            </p>
            <p className="section-columns__column__body__paragraph section-columns__column__body__paragraph--15">
              Data Structures
            </p>
            <p className="section-columns__column__body__paragraph section-columns__column__body__paragraph--16">
              Variable Scope
            </p>
            <p className="section-columns__column__body__paragraph section-columns__column__body__paragraph--17">
              For...Of Loops
            </p>
            <p className="section-columns__column__body__paragraph section-columns__column__body__paragraph--18">
              and more...
            </p>
          </div>
          <div className="section-columns__column__body section-columns__column__body--row-2">
            <p className="section-columns__column__body__paragraph section-columns__column__body__paragraph--1">
              Callbacks
            </p>
            <p className="section-columns__column__body__paragraph section-columns__column__body__paragraph--2">
              Array Methods
            </p>
            <p className="section-columns__column__body__paragraph section-columns__column__body__paragraph--3">
              Operators
            </p>
            <p className="section-columns__column__body__paragraph section-columns__column__body__paragraph--4">
              Recursion
            </p>
            <p className="section-columns__column__body__paragraph section-columns__column__body__paragraph--5">
              String Manipulation
            </p>
            <p className="section-columns__column__body__paragraph section-columns__column__body__paragraph--6">
              Loops
            </p>
            <p className="section-columns__column__body__paragraph section-columns__column__body__paragraph--7">
              Execution Order
            </p>
            <p className="section-columns__column__body__paragraph section-columns__column__body__paragraph--8">
              Function Declaration
            </p>
            <p className="section-columns__column__body__paragraph section-columns__column__body__paragraph--9">
              If Statements
            </p>
            <p className="section-columns__column__body__paragraph section-columns__column__body__paragraph--10">
              Data Structures
            </p>
            <p className="section-columns__column__body__paragraph section-columns__column__body__paragraph--11">
              Variable Scope
            </p>
            <p className="section-columns__column__body__paragraph section-columns__column__body__paragraph--12">
              For...Of Loops
            </p>
            <p className="section-columns__column__body__paragraph section-columns__column__body__paragraph--13">
              Control Flow
            </p>
            <p className="section-columns__column__body__paragraph section-columns__column__body__paragraph--14">
              Functions
            </p>
            <p className="section-columns__column__body__paragraph section-columns__column__body__paragraph--15">
              Variables
            </p>
            <p className="section-columns__column__body__paragraph section-columns__column__body__paragraph--16">
              Object Editing
            </p>
            <p className="section-columns__column__body__paragraph section-columns__column__body__paragraph--17">
              Animation
            </p>
          </div>
          <div className="section-columns__column__body section-columns__column__body--row-3">
            <p className="section-columns__column__body__paragraph section-columns__column__body__paragraph--1">
              Loops
            </p>
            <p className="section-columns__column__body__paragraph section-columns__column__body__paragraph--2">
              Execution Order
            </p>
            <p className="section-columns__column__body__paragraph section-columns__column__body__paragraph--3">
              Function Declaration
            </p>
            <p className="section-columns__column__body__paragraph section-columns__column__body__paragraph--4">
              If Statements
            </p>
            <p className="section-columns__column__body__paragraph section-columns__column__body__paragraph--5">
              Data Structures
            </p>
            <p className="section-columns__column__body__paragraph section-columns__column__body__paragraph--6">
              Variable Scope
            </p>
            <p className="section-columns__column__body__paragraph section-columns__column__body__paragraph--7">
              For...Of Loops
            </p>
            <p className="section-columns__column__body__paragraph section-columns__column__body__paragraph--8">
              Control Flow
            </p>
            <p className="section-columns__column__body__paragraph section-columns__column__body__paragraph--9">
              Functions
            </p>
            <p className="section-columns__column__body__paragraph section-columns__column__body__paragraph--10">
              Variables
            </p>
            <p className="section-columns__column__body__paragraph section-columns__column__body__paragraph--11">
              Object Editing
            </p>
            <p className="section-columns__column__body__paragraph section-columns__column__body__paragraph--12">
              Animation
            </p>
            <p className="section-columns__column__body__paragraph section-columns__column__body__paragraph--13">
              Callbacks
            </p>
            <p className="section-columns__column__body__paragraph section-columns__column__body__paragraph--14">
              Array Methods
            </p>
            <p className="section-columns__column__body__paragraph section-columns__column__body__paragraph--15">
              Operators
            </p>
            <p className="section-columns__column__body__paragraph section-columns__column__body__paragraph--16">
              Recursion
            </p>
            <p className="section-columns__column__body__paragraph section-columns__column__body__paragraph--17">
              String Manipulation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
