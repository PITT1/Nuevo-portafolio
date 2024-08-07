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
            <figure className="proyecto-figure">
                <div className="project-image pokedex"></div>
                <a className='project-link' href="https://simplepokedexpitt.netlify.app/"><h3>Pokedex</h3></a>
                <a href='https://github.com/PITT1/simple-pokeApi-app' className='github-link'></a>
            </figure>
            <figure className="proyecto-figure">
                <div className="project-image tresenraya"></div>
                <a className='project-link' href="https://tic-tac-toe-pitt1.netlify.app/"><h3>tic tac toe</h3></a>
                <a href='https://github.com/PITT1/tic-tac-toe-reactjs' className='github-link'></a>
            </figure>
            <figure className="proyecto-figure">
                <div className="project-image agecalculator"></div>
                <a className='project-link' href="https://age-calculator-pitt1.netlify.app/"><h3>Age Calculator</h3></a>
                <a href='https://github.com/PITT1/Age-calculator-Frontend-Mentor' className='github-link'></a>
            </figure>
            <figure className="proyecto-figure">
                <div className="project-image snakegame"></div>
                <a className='project-link' href="https://snakejspitt1.netlify.app/"><h3>Snake game</h3></a>
                <a href='https://github.com/PITT1/Snake-Game-JS' className='github-link'></a>
            </figure>
            </div>
        </section>
    )
}

export default Portfolio;