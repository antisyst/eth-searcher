import * as React from "react";
import { motion } from "framer-motion";

export default function MainLogo() {


    const icon = {
        hidden: {
          opacity: 0,
          pathLength: 0,
          fill: "rgba(255, 255, 255, 0)"
        },
        visible: {
          opacity: 1,
          pathLength: 1,
          fill: "rgba(255, 255, 255, 1)"
        }
      };

    return(
        <motion.svg  className="item" width={138} height="71.8" viewBox="0 0 138 71.8" xmlns="http://www.w3.org/2000/svg"><motion.g id="svgGroup" strokeLinecap="round" fillRule="evenodd" fontSize="9pt" stroke="#ffffff" strokeWidth="0.25mm" fill="#ffffff" style={{stroke: '#ffffff', strokeWidth: '0.25mm', fill: '#ffffff'}} ><motion.path  variants={icon}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 3, ease: "easeInOut" },
          fill: { duration: 3, ease: [1, 0, 0.8, 1] }
        }}  d="M 18.9 71.8 L 18.9 47.9 L 25.1 47.9 L 39.8 71.8 L 62.3 71.8 L 44.7 44.9 A 28.23 28.23 0 0 0 53.239 39.435 A 20.862 20.862 0 0 0 59.9 24 A 23.466 23.466 0 0 0 56.811 11.783 C 52.8 5.065 44.989 1.037 34.012 0.175 A 58.923 58.923 0 0 0 29.4 0 L 0 0 L 0 71.8 L 18.9 71.8 Z M 117.6 71.8 L 138 71.8 L 111.7 0 L 91 0 L 64.4 71.8 L 83.5 71.8 L 88 58.5 L 113.2 58.5 L 117.6 71.8 Z M 18.9 15.6 L 28.6 15.6 C 36.486 15.6 40.405 17.979 40.856 22.986 A 11.311 11.311 0 0 1 40.9 24 C 40.9 29.7 37 32.3 28.6 32.3 L 18.9 32.3 L 18.9 15.6 Z M 100.8 20.8 L 108.3 43.6 L 93.1 43.6 L 100.8 20.8 Z" vectorEffect="non-scaling-stroke" /></motion.g></motion.svg>
    )
}