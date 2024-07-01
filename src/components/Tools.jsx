import "../styles/tools-styles.css";
import { motion } from "framer-motion";

const Tools = () => {
  return (
    <section className="tools-section" id="TOOLS">
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        Tools
      </motion.h1>
      <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 1}}>
        <div>
          <motion.span whileHover={{scale: 1.2}} className="icon xampp-icon"></motion.span>
          <p className="nombre">XAMPP</p>
        </div>
        <div>
          <motion.span whileHover={{scale: 1.2}} className="icon visual-studio-code-icon"></motion.span>
          <p className="nombre">VS Code</p>
        </div>
        <div>
          <motion.span whileHover={{scale: 1.2}} className="icon git-icon"></motion.span>
          <p className="nombre">GIT</p>
        </div>
        <div>
          <motion.span whileHover={{scale: 1.2}} className="icon postman-icon"></motion.span>
          <p className="nombre">Postman</p>
        </div>
        <div>
          <motion.span whileHover={{scale: 1.2}} className="icon figma-icon"></motion.span>
          <p className="nombre">Figma</p>
        </div>
      </motion.div>
    </section>
  );
};

export default Tools;
