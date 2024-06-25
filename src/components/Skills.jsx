import '../styles/skills-styles.css';
import { motion } from 'framer-motion';

const Skills = () => {

    return(
        <section className='container-skills'>
            <motion.h1 initial={{y: 400, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.5}}>Skills</motion.h1>
            <div className='container2-skills'>
                <motion.div initial={{opacity: 0, x: -500}} whileInView={{opacity: 1, x: 0}} transition={{duration: 1}} className='window'>
                    <div className='head-window'>
                        <span className='btn-red'></span>
                        <span className='btn-yellow'></span>
                        <span className='btn-green'></span>
                        <p>pitt1dev@admin: ~</p>
                    </div>
                    <p>≥ Strong foundation in <strong className='light-letters'>semantic HTML,Javascript, React, and Astro; CSS, Styled Components, Bootstrap, Tailwind, FastApi with Python. I also have the basics of MySQL, PHP, and Laravel for the development of apis.</strong></p>
                    <p>≥ I am always trying to keep myself constantly learning in both front-end and back-end development.</p>
                    <button className='btn1'>Download CV</button>
                </motion.div>
                <div className='carousel'>
                    <span className='imagen-icon astro-icon'></span>
                    <span className='imagen-icon js-icon'></span>
                    <span className='imagen-icon css-icon'></span>
                    <span className='imagen-icon html-icon'></span>
                    <span className='imagen-icon react-icon'></span>
                    <span className='imagen-icon tailwind-icon'></span>
                    <span className='imagen-icon python-icon'></span>
                    <span className='imagen-icon php-icon'></span>
                    <span className='imagen-icon laravel-icon'></span>
                    <span className='imagen-icon fastapi-icon'></span>
                </div>
            </div>
        </section>
    )
}

export default Skills;