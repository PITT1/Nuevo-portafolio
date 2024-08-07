import PropTypes from "prop-types";
import "../styles/portfolio-styles.css";
import { motion } from "framer-motion";

const PortfolioItem = ({ title, imageclass, linkWeb, linkGithub }) => {
    return(
        <motion.figure initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.8}} className="proyecto-figure">
            <motion.div initial={{scale: 1.6}} whileInView={{scale: 1}} transition={{duration: 0.8}} className={`project-image ${imageclass}`}></motion.div>
            <a className='project-link' href={linkWeb}><h3>{title}</h3></a>
            <a href={linkGithub} className='github-link'></a>
        </motion.figure>
    )
}

PortfolioItem.propTypes = {
    title: PropTypes.string.isRequired,
    imageclass: PropTypes.string.isRequired,
    linkWeb: PropTypes.string.isRequired,
    linkGithub: PropTypes.string.isRequired
}

export default PortfolioItem;