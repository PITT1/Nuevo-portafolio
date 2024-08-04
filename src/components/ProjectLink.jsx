import PropTypes from "prop-types";
import '../styles/projectlink-styles.css';

const ProjectLink = ({ title, image, altImage }) => {
    return(
        <figure className="proyecto-figure">
            <div className="project-image">
                <img src={image} alt={altImage}/>
            </div>
            <h3>{title}</h3>
            <div className="tech">

            </div>
        </figure>
    )
}

ProjectLink.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    altImage: PropTypes.string.isRequired
  };

export default ProjectLink;