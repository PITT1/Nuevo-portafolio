import "../styles/skills-styles.css";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section className="container-skills" id="SKILLS">
      <motion.h1
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Skills
      </motion.h1>
      <div className="container2-skills">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="window"
        >
          <div className="head-window">
            <span className="btn-red"></span>
            <span className="btn-yellow"></span>
            <span className="btn-green"></span>
            <p>pitt1dev@admin: ~</p>
          </div>
          <p>
            ≥ Strong foundation in{" "}
            <strong className="light-letters">
              semantic HTML,Javascript, React, and Astro; CSS, Styled
              Components, Bootstrap, Tailwind, FastApi with Python. I also have
              the basics of MySQL, PHP, and Laravel for the development of apis.
            </strong>
          </p>
          <p>
            ≥ I am always trying to keep myself constantly learning in both
            front-end and back-end development.
          </p>
          <button className="btn1">Download CV</button>
        </motion.div>
        <div className="carousel">
          <motion.div whileHover={{ scale: 1.4 }} className="icon-contenedor">
            <motion.span
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              className="imagen-icon astro-icon"
            ></motion.span>
          </motion.div>
          <motion.div whileHover={{ scale: 1.4 }} className="icon-contenedor">
            <motion.span
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.1 }}
              className="imagen-icon js-icon"
            ></motion.span>
          </motion.div>
          <motion.div whileHover={{ scale: 1.4 }} className="icon-contenedor">
            <motion.span
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="imagen-icon css-icon"
            ></motion.span>
          </motion.div>
          <motion.div whileHover={{ scale: 1.4 }} className="icon-contenedor">
            <motion.span
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.3 }}
              className="imagen-icon html-icon"
            ></motion.span>
          </motion.div>
          <motion.div whileHover={{ scale: 1.4 }} className="icon-contenedor">
            <motion.span
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.4 }}
              className="imagen-icon react-icon"
            ></motion.span>
          </motion.div>
          <motion.div whileHover={{ scale: 1.4 }} className="icon-contenedor">
            <motion.span
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.5 }}
              className="imagen-icon tailwind-icon"
            ></motion.span>
          </motion.div>
          <motion.div whileHover={{ scale: 1.4 }} className="icon-contenedor">
            <motion.span
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.6 }}
              className="imagen-icon python-icon"
            ></motion.span>
          </motion.div>
          <motion.div whileHover={{ scale: 1.4 }} className="icon-contenedor">
            <motion.span
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.7 }}
              className="imagen-icon php-icon"
            ></motion.span>
          </motion.div>
          <motion.div whileHover={{ scale: 1.4 }} className="icon-contenedor">
            <motion.span
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.8 }}
              className="imagen-icon laravel-icon"
            ></motion.span>
          </motion.div>
          <motion.div whileHover={{ scale: 1.4 }} className="icon-contenedor">
            <motion.span
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.9 }}
              className="imagen-icon fastapi-icon"
            ></motion.span>
          </motion.div>
        </div>
      </div>
      <div className="wave">
      </div>
    </section>
  );
};

export default Skills;
