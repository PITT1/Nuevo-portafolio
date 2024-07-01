import '../styles/whois-styles.css'
import { motion } from 'framer-motion';

const Whois = () => {
    return(
        <section className='whois-section' id='WHOIS'>
            <motion.h1 initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 3}}>Who is Pitt1<strong>Dev?</strong></motion.h1>
            <div className='whois-content'>
                <div className='content-extern'>
                    <div className='image'></div>
                    <h2>Pitt1Dev</h2>
                    <p>Full-Stack Developer</p>
                </div>
            </div>
        </section>
    )
}

export default Whois;