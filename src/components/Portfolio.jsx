import '../styles/portfolio-styles.css';
const wordgameImage = "url(../images/wordgame.png)";

const Portfolio = () => {
    return(
        <section className="portfolio-section" id='PORTFOLIO'>
            <h1>Portfolio</h1>
            <div className='contenedor'>
            <figure className="proyecto-figure">
                <div className="project-image wordgame"></div>
                <a className='project-link' href="https://wordgamepitt1.netlify.app/"><h3>Juego de palabras</h3></a>
                <a href='https://github.com/PITT1/WordGame' className='github-link'></a>
            </figure>
            <figure className="proyecto-figure">
                <div className="project-image wheaterapp"></div>
                <a className='project-link' href="https://weatherpitt1.netlify.app/"><h3>app de clima</h3></a>
                <a href='https://github.com/PITT1/weather-app' className='github-link'></a>
            </figure>
            <figure className="proyecto-figure">
                <div className="project-image todoapp"></div>
                <a className='project-link' href="https://todo-app-pitt1.netlify.app/"><h3>app de tareas</h3></a>
                <a href='https://github.com/PITT1/TODO-app-frontendmentor' className='github-link'></a>
            </figure>
            </div>
        </section>
    )
}

export default Portfolio;