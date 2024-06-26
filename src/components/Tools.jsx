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
        <span className="icon xampp-icon"></span>
        <span className="icon visual-studio-code-icon"></span>
        <span className="icon git-icon"></span>
        <span className="icon postman-icon"></span>
        <span className="icon figma-icon"></span>
      </div>
    </section>
  );
};

export default Tools;
