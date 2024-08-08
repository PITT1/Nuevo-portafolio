import '../styles/hero-styles.css';
import GithubIcon from '../images/GithubIcon';

const Hero = () => {
    return(
        <section className='container'>
            <div className='presentation'>
                <h1>Hi! I'm Pitt1<strong className='dev'>Dev</strong></h1>
                <p>≥ FullStack developer in <strong className='strong-color'>Venezuela</strong></p>
            </div>
            <div className='image-container'>
                <div className='my-avatar'>
                <a href="https://github.com/PITT1"><GithubIcon/></a>
                </div>
            </div>
        </section>
    )
}

export default Hero;