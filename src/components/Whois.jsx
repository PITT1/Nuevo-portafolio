import '../styles/whois-styles.css'
import { motion } from 'framer-motion';

const Whois = () => {
    return(
        <section className='whois-section' id='WHOIS'>
            <motion.h1 initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 3}}>Who is Pitt1<strong>Dev?</strong></motion.h1>
            <div className='whois-content'>
                <motion.div initial={{x: -50, opacity:0}} whileInView={{x: 0, opacity: 1}} transition={{duration: 2}} className='content-extern'>
                    <div className='image'></div>
                    <h2>Pitt1Dev</h2>
                    <p>Full-Stack Developer</p>
                </motion.div>

                <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="window"
        >
          <div className="head-window">
            <span className="btn-red"></span>
            <span className="btn-yellow"></span>
            <span className="btn-green"></span>
            <p>pitt1dev@admin: ~</p>
          </div>
          <p><strong className='green-letter'>≥</strong> Pedro Leon Torrez</p>
          <p><strong className='green-letter'>≥</strong> I really like <strong className='light-letters'>JavaScript</strong> and <strong className='light-letters'>Python</strong> and I am always trying to learn new technologies that derive from those languages ​​to expand my resume.</p>
          <p><strong className='green-letter'>≥</strong> I study <strong className='light-letters'>PHP</strong> only to use <strong className='light-letters'>Laravel</strong> 😂</p>
          <p><strong className='green-letter'>≥</strong> I really love what I do! 💙 I think combining creativity and code can improve user experiences.</p>
          <button className="btn1">see more</button>
        </motion.div>
            </div>
        </section>
    )
}

export default Whois;