import React from "react";
import purpleVector from "./Images/purpleVector.jpg";
import tynebridge from "./Images/tynebridge.jpg";
import { motion } from "framer-motion";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";

const Banner = () => {
  return (
    <motion.div
      className="contain-banner"
      id="fade"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 2 }}
    >
      <img src={purpleVector} alt="purpleVector" className="logo-banner"></img>
      <img src={tynebridge} alt="tynebridge" className="banner-bridge"></img>
      <div className="banner-info">
        <motion.h1
          initial={{ y: -250 }}
          animate={{ y: 0 }}
          transition={{ delay: 2, type: "spring", stiffness: 150 }}
        >
          Aspiring Full Stack Developer
        </motion.h1>
        <motion.h3
          initial={{ y: -500 }}
          animate={{ y: 0 }}
          transition={{ delay: 3, type: "spring", stiffness: 150 }}
        >
          Dear Visitor:
        </motion.h3>
        <motion.p
          initial={{ y: -500 }}
          animate={{ y: 0 }}
          transition={{ delay: 3, type: "spring", stiffness: 150 }}
          className="responsive-font"
        >
          This website is no longer in use and is for demonstration purposes
          only now, you can view my updated portfolio at{" "}
          <a
            href="https://www.kairoberts.dev"
            style={{ color: "cyan", fontWeight: "bold" }}
          >
            www.kairoberts.dev
          </a>
        </motion.p>

        <motion.div
          initial={{ y: -500 }}
          animate={{ y: 0 }}
          transition={{ delay: 3, type: "spring", stiffness: 150 }}
          className="flex-item"
        >
          <a href="https://www.linkedin.com/in/kairobertss" className="icons">
            <AiOutlineLinkedin size={35} />
          </a>
          <a href="https://github.com/kairoberts" className="icons">
            {" "}
            <FiGithub size={30} />
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Banner;
