import { useState } from 'react'
import '../styles/header-styles.css'
const Header = () => {
    const [dinamiClass, setDinamiClass] = useState("list");
    const [xClass, setXClass] = useState("burguer");

    const openList = () => {
        if (dinamiClass === "list") {
            setDinamiClass("list list-open");
            setXClass("burguer-inner burguer-inner-x");    
        } else {
            setDinamiClass("list");
            setXClass("burguer-inner");
        }
    }
    return(
        <header className='head'>
        <div>
            <h1>Pitt1<strong className='strong'>Dev</strong></h1>
        </div>

        <div className={dinamiClass}>
            <ul>
                <li>Start</li>
                <li>Skills</li>
                <li>Tools</li>
                <li>About</li>
                <li>Portfolio</li>
            </ul>
        </div>

        <div className="burguer" onClick={openList}>
            <span className={xClass}></span>
        </div>

        </header>
    )
}

export default Header;