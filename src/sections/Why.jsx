import React from "react";
import Title from "../components/Title";
import { useScroll } from "../components/useScroll";
import { GoPlay } from "react-icons/go";
import { motion } from "framer-motion";
import "../styles/sections/Why.scss";
import {
  topContainerAnimation,
  videoAnimation,
  reasonsAnimation,
} from "../utils/Animations";

function Why() {
  const [element, controls] = useScroll();

  return (
    <div className="why-container" id="services" ref={element}>
      <div className="container">
        <motion.div
          className="top"
          variants={topContainerAnimation}
          animate={controls}
          transition={{
            duration: 0.5,
          }}
        >
          <Title title="Why 3a Learning Solutions ?" color="pink" lineCenter={true} />
          <div className="subTitle">
            <p>
            Our solutions are a suite of best in class training and consulting services that enables Organization to reduce cost, improve process level & efficiencies by improving the capabilities of people involved, sharpen their business focus and obtain quantifiable results.<br/><br/>
            We have focused experience in Quality trainings, Business & Process Improvement trainings, Technology training, Induction Programs and Product /Application roll-out trainings, Development programs and improvement projects make us a preferred Business partner for most of the Small, Medium & Large scale Enterprises.
            </p>
          </div>
        </motion.div>
        <div className="content">
          <motion.div
            variants={videoAnimation}
            animate={controls}
            transition={{ type: "tween", duration: 0.5 }}
          >
            <div className="video">
              <GoPlay />
            </div>
          </motion.div>
          <motion.div
            className="reasons"
            variants={reasonsAnimation}
            animate={controls}
            transition={{ type: "tween", duration: 0.5 }}
          >
            <ul>
              <li>Quality Services in less Investment.</li>
              <li>
               Outcome-Centric Learning.
              </li>
              <li>Customized Program Delivered.</li>
              <li>Pre & Post Assesment.</li>
              <li>Individual Assessment in behavioural
aspects.</li>
<li>Infrastructure & Lab Support Pan India.</li>
              <li>Ready to recieve service request 24/7</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Why;
