import '../styles/portfolio-styles.css';
const wordgameImage = "url(../images/wordgame.png)";

const Portfolio = () => {
    return(
        <section className="portfolio-section" id='PORTFOLIO'>
            <h1>Portfolio</h1>
            <div className='contenedor'>
            <figure className="proyecto-figure">
                <div className="project-image wordgame"></div>
                <h3>Juego de palabras</h3>
            </figure>
            <figure className="proyecto-figure">
                <div className="project-image wheaterapp"></div>
                <h3>app de clima</h3>
            </figure>
            <figure className="proyecto-figure">
                <div className="project-image todoapp"></div>
                <h3>app de tareas</h3>
            </figure>
            </div>
        </section>
    )
}

export default Portfolio;