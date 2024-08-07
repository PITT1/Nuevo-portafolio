import PropTypes from "prop-types";
import "../styles/portfolio-styles.css";

const PortfolioItem = ({ title, imageclass, linkWeb, linkGithub }) => {
    return(
        <figure className="proyecto-figure">
            <div className={`project-image ${imageclass}`}></div>
            <a className='project-link' href={linkWeb}><h3>{title}</h3></a>
            <a href={linkGithub} className='github-link'></a>
        </figure>
    )
}

PortfolioItem.propTypes = {
    title: PropTypes.string.isRequired,
    imageclass: PropTypes.string.isRequired,
    linkWeb: PropTypes.string.isRequired,
    linkGithub: PropTypes.string.isRequired
}

export default PortfolioItem;