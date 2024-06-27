import "../styles/tools-styles.css";
import { motion } from "framer-motion";

const Tools = () => {
  return (
    <section className="tools-section">
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        Tools
      </motion.h1>
      <div>
        <div>
          <motion.span initial={{opacity: 0}} whileHover={{scale: 1.2}} whileInView={{opacity: 1}} transition={{duration: 1}} className="icon xampp-icon"></motion.span>
          <p className="nombre">XAMPP</p>
        </div>
        <div>
          <motion.span initial={{opacity: 0}} whileHover={{scale: 1.2}} whileInView={{opacity: 1}} transition={{duration: 1}} className="icon visual-studio-code-icon"></motion.span>
          <p className="nombre">VS Code</p>
        </div>
        <div>
          <motion.span initial={{opacity: 0}} whileHover={{scale: 1.2}} whileInView={{opacity: 1}} transition={{duration: 1}} className="icon git-icon"></motion.span>
          <p className="nombre">GIT</p>
        </div>
        <div>
          <motion.span initial={{opacity: 0}} whileHover={{scale: 1.2}} whileInView={{opacity: 1}} transition={{duration: 1}} className="icon postman-icon"></motion.span>
          <p className="nombre">Postman</p>
        </div>
        <div>
          <motion.span initial={{opacity: 0}} whileHover={{scale: 1.2}} whileInView={{opacity: 1}} transition={{duration: 1}} className="icon figma-icon"></motion.span>
          <p className="nombre">Figma</p>
        </div>
      </div>
    </section>
  );
};

export default Tools;
