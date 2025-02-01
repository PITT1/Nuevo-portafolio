import '../styles/portfolio-styles.css';
import PortfolioItem from './PortfolioItem';
import { motion } from 'framer-motion';

const Portfolio = () => {
    return(
        <section className="portfolio-section" id='PORTFOLIO'>
            <motion.h1 initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.5}}>Portfolio</motion.h1>
            <div className='contenedor'>
                <PortfolioItem title='Word Game' 
                                imageclass='wordgame' 
                                linkGithub='https://github.com/PITT1/WordGame' 
                                linkWeb='https://wordgamepitt1.netlify.app/'
                />
                <PortfolioItem title='Wheater App' 
                                imageclass='wheaterapp' 
                                linkGithub='https://github.com/PITT1/weather-app' 
                                linkWeb='https://weatherpitt1.netlify.app/'
                />
                <PortfolioItem title='ToDo App' 
                                imageclass='todoapp' 
                                linkGithub='https://github.com/PITT1/TODO-app-frontendmentor' 
                                linkWeb='https://todo-app-pitt1.netlify.app/'
                />
                <PortfolioItem title='Pokedex' 
                                imageclass='pokedex' 
                                linkGithub='https://github.com/PITT1/simple-pokeApi-app' 
                                linkWeb='https://simplepokedexpitt.netlify.app/'
                />
                <PortfolioItem title='Tic Tac Toe' 
                                imageclass='tresenraya' 
                                linkGithub='https://github.com/PITT1/tic-tac-toe-reactjs' 
                                linkWeb='https://tic-tac-toe-pitt1.netlify.app/'
                />
                <PortfolioItem title='Age Calculator' 
                                imageclass='agecalculator' 
                                linkGithub='https://github.com/PITT1/Age-calculator-Frontend-Mentor' 
                                linkWeb='https://age-calculator-pitt1.netlify.app/'
                />
                <PortfolioItem title='Snake Game' 
                                imageclass='snakegame' 
                                linkGithub='https://github.com/PITT1/Snake-Game-JS' 
                                linkWeb='https://snakejspitt1.netlify.app/'
                />
                <PortfolioItem title='Landing Page' 
                                imageclass='landingpage' 
                                linkGithub='https://github.com/PITT1/Sunny-side-landingpage-Frontedmentor' 
                                linkWeb='https://sunnysidepitt1.netlify.app/'
                />
                <PortfolioItem title='android game'
                                imageclass='android-game'
                                linkGithub='default'
                                linkWeb='default'
                />
            </div>
        </section>
    )
}

export default Portfolio;