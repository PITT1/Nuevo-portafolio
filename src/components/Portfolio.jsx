import '../styles/portfolio-styles.css'
import ProjectLink from './ProjectLink';

const Portfolio = () => {
    return(
        <section className="portfolio-section" id='PORTFOLIO'>
            <h1>Portfolio</h1>
            <div className='contenedor'>
                <ProjectLink/>
            </div>

        </section>
    )
}

export default Portfolio;