import React from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import Title from "../components/Title";
import { useScroll } from "../components/useScroll";
import { HiLightBulb } from "react-icons/hi";
import { BsFillCalendarFill } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { SiGooglemessages } from "react-icons/si";
import { motion } from "framer-motion";
import "../styles/sections/About.scss";
import { reveal } from "../utils/Animations";

function About() {
  const [element, controls] = useScroll();

  return (
    <div className="about-container" id="about" ref={element}>
      <div className="container">
        <motion.div
          className="details"
          initial="hidden"
          animate="show"
          animate={controls}
          variants={reveal}
          transition={{ delay: 0.1, stiffness: 300 }}
        >
          <Title title="About 3a Learning Solutions" color="blue" />
          <p>
          We are the premier training and consultancy organization in the field of high end IT, Quality Management, Business & Process Improvement, Technical, Behavioural and Developmental training programs as well.
          </p>
          <p>
          We are the leading provider of Technical and Behavioral Trainings. We support corporate, professionals, and institutions in their skill building requirements.
          </p>
          <Button content="Why 3aLearning Solutions?" />
        </motion.div>
        <div className="cards" ref={element}>
          <Card
            title="Innovative Ideas"
            logo={<HiLightBulb />}
            animateCustom={controls}
          />
          <Card
            title="Planning"
            logo={<BsFillCalendarFill />}
            animateCustom={controls}
          />
          <Card
            title="Communication"
            logo={<BiSupport />}
            animateCustom={controls}
          />
          <Card
            title="24 * 7 Support"
            logo={<SiGooglemessages />}
            animateCustom={controls}
          />
        </div>
      </div>
    </div>
  );
}

export default About;
