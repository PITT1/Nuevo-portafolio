import '../styles/style.css'
const Header = () => {
    return(
        <header className='head'>
        <div>
            <h1>Pitt1<strong className='strong'>Dev</strong></h1>
        </div>

        <div className='list'>
            <ul>
                <li>Start</li>
                <li>Skills</li>
                <li>Tools</li>
                <li>About</li>
                <li>Portfolio</li>
            </ul>
        </div>

        <div className="burguer">
            <span className="burguer-inner"></span>
        </div>

        </header>
    )
}

export default Header;