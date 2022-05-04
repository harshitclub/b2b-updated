import React, { useState } from "react";
import Button from "./Button";
import BrandName from "./BrandName";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../styles/components/Navbar.scss";
import { navbarAnimation } from "../utils/Animations";

export default function Navbar() {
  const [toggleNavbar, setToggleNavbar] = useState(false);
  const navbarToggler = () => {
    setToggleNavbar(!toggleNavbar);
  };
  return (
    <motion.div
      className={`navbar ${toggleNavbar === true ? "active" : ""}`}
      variants={navbarAnimation}
      transition={{ delay: 0.1 }}
    >
      <div className="col">
        <BrandName />
        <div className="collapseble-button">
          {!toggleNavbar ? (
            <GiHamburgerMenu onClick={navbarToggler} />
          ) : (
            <MdClose onClick={navbarToggler} />
          )}
        </div>
      </div>
      <nav>
        <div className="links">
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>

            <li>
              <a href="#testimonial">Testimonial</a>
            </li>

            <li>
              <a href="#blog">Blog</a>
            </li>
            <li>
            <Link to="/contact"><Button content="Contact" /></Link>
            </li>
          </ul>
        </div>
      </nav>
    </motion.div>
  );
}
