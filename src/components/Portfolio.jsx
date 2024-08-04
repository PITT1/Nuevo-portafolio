import '../styles/portfolio-styles.css';
import ProjectLink from './ProjectLink';
import wordgameImage from '../images/wordgame.png';

const Portfolio = () => {
    return(
        <section className="portfolio-section" id='PORTFOLIO'>
            <h1>Portfolio</h1>
            <div className='contenedor'>
                <ProjectLink title='juego de palabras' image={wordgameImage} altImage='proyecto de juego de palabras'/>
            </div>

        </section>
    )
}

export default Portfolio;