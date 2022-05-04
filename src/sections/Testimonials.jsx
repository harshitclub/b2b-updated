import React from "react";
import Title from "../components/Title";
import Testimonial from "../components/Testimonial";
import { useScroll } from "../components/useScroll";
import { motion } from "framer-motion";
import "../styles/sections/Testimonials.scss";
import { textAnimation, cardAnimation } from "../utils/Animations";

export default function Testimonials() {
  const [element, controls] = useScroll();

  return (
    <div className="testimonials-container" id="testimonial" ref={element}>
      <div className="container">
        <motion.div
          className="title-container"
          variants={textAnimation}
          animate={controls}
          transition={{
            duration: 0.5,
          }}
        >
          <Title title="Testimonials" color="blue" lineCenter={true} />
          <p>See what our clients are saying about us.</p>
        </motion.div>
        <div className="testimonials">
          <Testimonial
            content="3a Learning solutions’ Salesforce training helped me and my team, manage our company’s Marketing and Sales better than ever before. Very good Trainer when it comes to teaching the advanced version of the tool."
            name="Monica Gandhi"
            designation="Business Head (Technians)"
            variants={cardAnimation}
            animate={controls}
          />
          <Testimonial
            content="It was good and very amazing learning experience with 3a learning solutions, we wish all the best to the team. Great going !"
            name="Hemant"
            designation="Citi Bank"
            variants={cardAnimation}
            animate={controls}
          />
          <Testimonial
            content="This is a great source of motivation for us too to move forward with our development strategy taking along a partner like 3a learning solutions with us."
            name="L. Nihal"
            designation="Asst. Manager- JCB"
            variants={cardAnimation}
            animate={controls}
          />
        </div>
      </div>
    </div>
  );
}
